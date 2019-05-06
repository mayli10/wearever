#filter Helper

import pandas as pd
from selenium import webdriver


def filter_catalogue():
    catalogue_local_path = r'.\Wearever All Unfiltered.csv'
    catalogue_local_path2 = r'.\Wearever All Unfiltered.csv'
    
    output_path = r'.\Wearever All Unfiltered.csv'
    fonly_output = r'.\Wearever Filtered Only.csv'
    
    chrome_url = 'C:/Users/Arno Murcia/Documents/chromedriver_win32/chromedriver.exe'
    
    catalogue = pd.read_csv(catalogue_local_path2)
    browser = webdriver.Chrome(chrome_url)

    dropped_int = 0
    for index, item in catalogue.iterrows():
        if str(item["City"]) == "nan": 
            
            item_url = item["defaultImages"].replace("[", "")
            item_url = item_url.replace("]", "")
            item_url = item_url.replace("'", "")
            item_url = list(item_url.split(", "))[0]

            browser.get(item_url)
            
            confirm = input("Do you want to keep "+item['title']+ "? (y/n)")

            if 'n' in confirm:
                catalogue.drop([index], inplace = True)
                dropped_int += 1
            elif confirm == '' or confirm == ' ':
                confirm = input("Do you want to keep "+item['title']+ "? (y/n)")
            else:
                new_city = input("City (LA, NYC): ")
                new_activity = input("Activity (Dining, PP): ")
                catalogue.loc[index, "City"] = new_city
                catalogue.loc[index, "Activity"] = new_activity

            filtered_only = catalogue[0:index-dropped_int+1]
            filtered_only.to_csv(fonly_output, index = None, header=True)
            
            catalogue.to_csv(catalogue_local_path2, index = None, header=True)

filter_catalogue()

#filter_catalogue(r'C:\Users\Arno Murcia\Desktop\Northwestern University\GitHub\NUVention-B-2019\RTRitems large.csv', 'C:/Users/Arno Murcia/Documents/chromedriver_win32/chromedriver.exe')
        
#filter_catalogue(1, r"~/Downloads/Wearever All Products to be Filtered.csv", r"~/Downloads/Wearever Filtered Products from {}", "~/Downloads/chromedriver.exe")
#output_path = r'C:\Users\Arno Murcia\Desktop\Northwestern University\GitHub\NUVention-B-2019\All Wearever Items Compiled.csv'    
#filter_catalogue(1, r"~/Downloads/Wearever All Products to be Filtered.csv", r"~/Downloads/Wearever Filtered Products from {}", "~/Downloads/chromedriver.exe")
#mac chrome path = "~/Downloads/chromedriver.exe"
#input file path = r"~/Downloads/Wearever All Products to be Filtered.csv"
#output_file path = r"~/Downloads/Wearever Filtered Products from {}"
