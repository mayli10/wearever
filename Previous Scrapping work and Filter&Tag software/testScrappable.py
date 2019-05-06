#test if scrapable
import requests
from bs4 import BeautifulSoup
from user_agent import generate_user_agent
from selenium import webdriver
import pandas as pd

def test_scrap(website_url, product_tuple, website_prefix, title_tuple):
    page = requests.get(website_url)
    soup = BeautifulSoup(page.content, 'html.parser')

    
    p = soup.find(product_tuple[0], class_= product_tuple[1])
    detail_link = p.find('a', attrs={'href': re.compile(website_prefix)})
    detail_page = requests.get(detail_link)
    detail_soup = BeautifulSoup(detail_page.content, 'html.parser')

    
    print(detail_soup.find(title_tuple[0], title_tuple[1]).find('span').get_text())

test_scrap("https://www.everlane.com/collections/womens-leather-bags",
           ['a', 'product'],
           "^https://www.everlane.com",
           ['h1', 'product-heading__name'])
