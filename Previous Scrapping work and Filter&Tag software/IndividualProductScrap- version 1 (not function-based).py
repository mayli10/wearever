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

def RTR_special_scrap(browser):
    rtr_details_buttons = browser.find_elements_by_class_name('collapsible-menu') #FHSU
    size = ""
    append_description = ""
    append_details = ""
    
    for b in rtr_details_buttons:
        b.click()
        b_detail = browser.find_element_by_class_name("active")            
        if b_detail.find_element_by_class_name('summary-label').text == "STYLIST NOTES":
            append_description = b_detail.find_element_by_tag_name('p').text
        if b_detail.find_element_by_class_name('summary-label').text == "SIZE & FIT":
            size = b_detail.find_element_by_tag_name('p').text
        if b_detail.find_element_by_class_name('summary-label').text == "PRODUCT DETAILS":
            append_details = b_detail.find_element_by_tag_name('p').text
    return {'append_details' = append_details,
            'size' = size,
            'append_description'= append_description}
def set_prices(price):
    if price < 100:
        return 15
    if price < 200:
        return 25
    if price < 400:
        return 30
    if price < 600:
        return 45
    if price >= 600:
        return 50

        
def website_scrap(indict):
    product_data = pd.read_csv(r'C:\Users\Arno Murcia\Desktop\Northwestern University\The Melodi House\NUMATCH FINAL.csv')
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


    browser = webdriver.Chrome('C:/Users/Arno Murcia/Documents/chromedriver_win32/chromedriver.exe')
    browser.get("https://www.google.com")
    
    for index, product in product_data.iterrows:       
        print('Scrapping page:',index)

        webdriver.ActionChains(browser).key_down(Keys.CONTROL).send_keys('t').key_up(Keys.CONTROL).perform()
        browser.get(product["URL"])
        
        python_first_button = browser.find_elements_by_class_name('mfp-close')
        if len(python_first_button)>0:
            python_first_button[0].click()

        details_dict = RTR_special_scrap(browser)
        detail_soup = BeautifulSoup(browser.page_source, 'html.parser')

        webdriver.ActionChains(browser).key_down(Keys.CONTROL).send_keys('w').key_up(Keys.CONTROL).perform()
        pc_variants = []

        pc_images = []
        images = 4
        for img in detail_soup.find_all(indict['img_tuple'][0], class_= indict['img_tuple'][1]):
            if images >0:
                images -= 1
                pc_images.append(img.find('img')['src'])

        pc_variants.append({
            "id": 0,
            "options": {"sizes": details_dict['size']},
            "images": pc_images,
            "inStock": True})

            
        rprice = detail_soup.find(indict['price_tuple'][0], class_=indict['price_tuple'][1]).get_text()
        rprice = re.sub('[^0-9]','', rprice)
        rprice = ''.join(c for c in rprice if c.isdigit() or c == '.')
        
        sku.append(0)                                                                                          #SKU Done
        title.append(detail_soup.find(indict['title_tuple'][0], class_=indict['title_tuple'][1]).get_text())
        description.append(details_dict['append_description']) 
        details.append(details_dict['append_details'])                                        #Details Done
        designer.append(detail_soup.find(indict['designer_tuple'][0], class_=indict['designer_tuple'][1]).get_text())
        mrsp.append(float(rprice))
        currencyId.append(indict['currencyId'])
        prices.append({"3": set_prices(float(rprice)), "5": 1.5*set_prices(float(rprice)), "purchase": float(rprice)})
        variants.append(pc_variants)
        optionTypes.append([{"size": details_dict['size']}])
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


RTR_dict = {'website_url': "https://www.renttherunway.com/c/dresses?sort=recommended&_=1554746477594&page={}",
                    'csv_url' : r'C:\Users\Arno Murcia\Desktop\Northwestern University\GitHub\NUVention-B-2019\Wearever 1.0 Inventory - RTR commencement.csv',
                    'website_prefix': "https://www.renttherunway.com",
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
RTRdresses = website_scrap(dresses_rtr_dict)

RTRdresses.to_csv(r'C:\Users\Arno Murcia\Desktop\Northwestern University\GitHub\NUVention-B-2019\RTRDresses.csv',index = None, header=True)
RTRdresses.to_json(r'C:\Users\Arno Murcia\Desktop\Northwestern University\GitHub\NUVention-B-2019RTRDresses.json', orient ='table')
