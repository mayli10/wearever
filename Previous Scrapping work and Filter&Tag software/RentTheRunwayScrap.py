import requests
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
from user_agent import generate_user_agent
from selenium import webdriver
import pandas as pd
import re
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium import webdriver

chromeURL = 'C:/Users/Arno Murcia/Documents/chromedriver_win32/chromedriver.exe'

sku = []                    #
title = []                  #
description = []            #Done
details = []                #Done
designer = []               #
mrsp = []                   #
currencyId = []             #
prices = []                 #
variants = []               #
optionTypes = []            #
defaultImages = []          #
        


#website_scrap("https://shop.nordstrom.com/c/womens-clothing?page={}", 508, ['section', 'ryqjK xDaC'], [['div', 'ZcPcxb Z2wCdmP'], ['div', 'ZcPcxb Z21FzMm'],["div", "ZcPcxb _196u05"], ["div", "ZcPcxb Zi7mwv"],["article", "Z2vCTnn"] ], ['img', '_48M3Q'], ['span', 'ZP7ABL KIKnH'], ['span', '_1XYdYp'])


def website_scrap_rtr(indict):
    #website_url is the url of the website with the 'page number' replace by '{}'
    #max_index is the integer index of the last page of the catalogue from the website
    #product_tuple_list is a list [product_tuple, ...] where product_tuples are all the possible [product_section, product_class]
    #img_tuple is a tuple [img_section, img_class]
    #title_tuple is a tuple [title_section, title_class]
    #price_tuple is a tuple [price_section, price_class]

    browser = webdriver.Chrome('C:/Users/Arno Murcia/Documents/chromedriver_win32/chromedriver.exe')
    browser.get("https://www.google.com")
    
    for i in range(1,indict['max_index']+1):                                                                        #Iterates through the pages of the website containing the catalogue from 1 to max_index
    #for i in range(1, 2):
        print('Scrapping page:',i)

        webdriver.ActionChains(browser).key_down(Keys.CONTROL).send_keys('t').key_up(Keys.CONTROL).perform()
        browser.get(indict['website_url'].format(i))
        soup = BeautifulSoup(browser.page_source, 'html.parser')

        #page = requests.get(indict['website_url'].format(i))
        #soup = BeautifulSoup(page.content, 'html.parser')
        products = soup.find_all(indict['catalogue_tuple'][0], class_=indict['catalogue_tuple'][1])
        all_products = []
        for p in products:
            all_products.append(p.find(indict['product_tuple'][0], class_= indict['product_tuple'][1]))

        #all_products = products.find_all(indict['product_tuple'][0], class_= indict['product_tuple'][1])        #get all products elements
        #print(all_products)

        global sku
        global title
        global description
        global details
        global designer
        global mrsp
        global currencyId
        global prices
        global variants
        global optionTypes
        global defaultImages

        element = 0
        
        for pc in all_products:
            element += 1
            print('Scraping product {} out of {}'.format(element, len(all_products)))
            
            detail_url = indict['website_prefix']+pc['href']
            #pc.find('a', attrs={'href': re.compile(indict['website_prefix'])}).get('href')         #website_prefix ="^https://www.lulus.com"

            webdriver.ActionChains(browser).key_down(Keys.CONTROL).send_keys('t').key_up(Keys.CONTROL).perform()
            #browser.find_element_by_id('body').send_keys(Keys.chord(Keys.CONTROL, 't'))
            browser.get(detail_url)

            python_first_button = browser.find_elements_by_class_name('mfp-close')
            if len(python_first_button)>0:
                python_first_button[0].click()


            rtr_details_buttons = browser.find_elements_by_class_name('collapsible-menu') #FHSU
            size = ""
            append_description = ""
            append_details = ""
            
            for b in rtr_details_buttons:
                b.click()
                #print('After click')
                b_detail = browser.find_element_by_class_name("active")
                #print(b_detail.text)
                
                if b_detail.find_element_by_class_name('summary-label').text == "STYLIST NOTES":
                    append_description = b_detail.find_element_by_tag_name('p').text
                if b_detail.find_element_by_class_name('summary-label').text == "SIZE & FIT":
                    size = b_detail.find_element_by_tag_name('p').text
                if b_detail.find_element_by_class_name('summary-label').text == "PRODUCT DETAILS":
                    append_details = b_detail.find_element_by_tag_name('p').text

            
            #detail_page = requests.get(detail_url)
            #print("detail url:"+detail_url)
            detail_soup = BeautifulSoup(browser.page_source, 'html.parser')

            webdriver.ActionChains(browser).key_down(Keys.CONTROL).send_keys('w').key_up(Keys.CONTROL).perform()
            #browser.find_element_by_id('body').send_keys(Keys.chord(Keys.CONTROL, 'w'))
            #print(detail_soup.prettify())

            #all_variants = detail_soup.find_all(indict['variance_tuple'][0], class_= indict['variance_tuple'][1])
            pc_variants = []

            pc_images = []
            images = 4
            for img in detail_soup.find_all(indict['img_tuple'][0], class_= indict['img_tuple'][1]):
                if images >0:
                    images -= 1
                    pc_images.append(img.find('img')['src'])

            #pc_images = [img.find('img')['src'] for img in detail_soup.find_all(indict['img_tuple'][0], class_= indict['img_tuple'][1])]
            
            pc_variants.append({
                "id": 0,
                "options": {"sizes": size},
                "images": pc_images,
                "inStock": True})
##            for v in all_variants:
##                print("found variants")
##                variant_page = requests.get(re.compile(indict['website_prefix'], v.get('href')))
##                variant_soup = BeautifulSoup(detail_page.content, 'html.parser')
##                variants_img = [img.find('img')['src'] for img in detail_soup.find_all(indict['img_tuple'][0], class_= indict['img_tuple'][1])]
##                pc_variants.append({
##                    "id":variant_soup.find(indict['color_tuple'][0], class_indict['color_tuple'][1]),
##                    "options": {"color": detail_soup.find(indict['color_tuple'][0], class_indict['color_tuple'][1])},
##                    "images": variants_img,
##                    "inStock": True})
##                pc_images += variants_img

            
            rprice = detail_soup.find(indict['price_tuple'][0], class_=indict['price_tuple'][1]).get_text()
            rprice.replace('â€“', 'to')
            rprice = ''.join(c for c in rprice if c.isdigit() or c == '.')
            if float(rprice) <= 400.0 and float(rprice) >= 100.0:
                sku.append(0)                                                                                          #SKU Done
                title.append(detail_soup.find(indict['title_tuple'][0], class_=indict['title_tuple'][1]).get_text())
                description.append(append_description) 
                details.append(append_details)                                        #Details Done
                designer.append(detail_soup.find(indict['designer_tuple'][0], class_=indict['designer_tuple'][1]).get_text())
                mrsp.append(rprice)
                currencyId.append(indict['currencyId'])
                prices.append({"3": 0, "5": 0, "purchase": 0})
                variants.append(pc_variants)
                optionTypes.append([{"size": size}])
                defaultImages.append(pc_images)
                nImages = []
                for i in defaultImages:
                    nImages.append(i)

        
    catalogue = pd.DataFrame({
        "sku": sku,
        "title": title,
        "description": description,
        "details": details,
        "designer": designer,
        "mrsp": mrsp,
        "currencyId": currencyId,
        "prices": prices,
        "variants": variants,
        "optionTypes": optionTypes,
        "defaultImages": nImages
        })

    return catalogue


dresses_rtr_dict = {'website_url': "https://www.renttherunway.com/c/dresses?sort=recommended&_=1554746477594&page={}",
                    'website_prefix': "https://www.renttherunway.com",
                    'max_index': 15,
                    'catalogue_tuple': ['div', 'grid-product-card'],
                    'product_tuple': ['a', 'grid-product-card-inner'],
                    'img_tuple': ['a', 'product-thumbnail'],
                    'title_tuple': ['h2','pdp-header__display-name display-name body-copy'],
                    'price_tuple': ['div', 'grid-product-card-price grid-product-card-price--retail small-copy unlimited-false'],
                    #'description_tuple': ['p', 'product-description__container'],
                    #'details_tuple': ['ul', 'product-details__container'],
                    'designer_tuple': ['h1', 'h3 product-designer'],
                    'currencyId': "USD",
                    #'variance_tuple': ['ul', 'product-page__color-button-set'],
                    #'color_tuple': ['a', 'product-page__color-swatch']
                    }
RTRdresses = website_scrap_rtr(dresses_rtr_dict)

#Nordstrom website: "https://shop.nordstrom.com/c/womens-clothing?page={}"
#Rent The Runway website: "https://www.renttherunway.com/c/dresses?sort=recommended&_=1554746477594&page={}"
#lulus_handbags = website_scrap_lulus(handbag_dict)

#everlane_handbags = website_scrap_everlane(handbag_everlane_dict)
RTRdresses.to_csv(r'C:\Users\Arno Murcia\Desktop\Northwestern University\GitHub\NUVention-B-2019\RTRDresses.csv',index = None, header=True)
RTRdresses.to_json(r'C:\Users\Arno Murcia\Desktop\Northwestern University\GitHub\NUVention-B-2019RTRDresses.json', orient ='table')
