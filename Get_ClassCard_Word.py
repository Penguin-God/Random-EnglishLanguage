from bs4 import BeautifulSoup
import requests
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import random
import os
import json
from collections import OrderedDict

browser = webdriver.Chrome() 
browser.get("https://www.classcard.net/set/4520841")

def Sleep_and_ClickXpath(delay, Xpath):
    time.sleep(delay)
    browser.find_element_by_xpath(Xpath).click()

# 로그인버튼 클릭
time.sleep(3)
login = browser.find_element_by_xpath("/html/body/div[1]/div[1]/div/div/div[3]/a[3]")
login.click()
# 로그인 우회
input_js = ' \
        document.getElementById("login_id").value = "{login_id}"; \
        document.getElementById("login_pwd").value = "{login_pwd}"; \
    '.format(login_id = "gkswh4860", login_pwd = "6N9iKBR*fWQbj)F") # 아이디 비번 입력
time.sleep(random.uniform(1,3)) # 자동화탐지를 우회 하기 위한 delay
browser.execute_script(input_js)
time.sleep(3) # 자동화탐지를 우회 하기 위한 delay
browser.find_element_by_xpath("//*[@id='loginForm']/div[2]/button").click()

Sleep_and_ClickXpath(3, "/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/a")
time.sleep(3)
browser.execute_script("window.scrollTo(0, document.body.scrollHeight)")

Sleep_and_ClickXpath(3, "/html/body/div[1]/div[2]/div/div/div[2]/div/a[14]/div/div[1]/img")

# 광고 우회용
time.sleep(3)
button = browser.find_element_by_xpath("//*[@id='newsPopupModal']/div[2]/div/div/div[4]/a/i")
browser.execute_script("arguments[0].click();", button)

for i in range(15):
    xPath = "/html/body/div[1]/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div[{}]/div[1]/div[2]/div/a".format(i + 1)
    Sleep_and_ClickXpath(3, xPath)
    time.sleep(2)
    browser.back()


soup = BeautifulSoup(browser.page_source, "html5lib")
print(soup)

en = soup.find_all("div", attrs = {"class" : "ex_front hidden"})
kr = soup.find_all("div", attrs = {"class" : "ex_back hidden"})


en_array = []
kr_array = []
tojson_day = OrderedDict()

for i in range(len(en)):
    en_array.append(en[i].get_text())
    kr_array.append(kr[i].get_text())

for i in range(len(en_array)):
    tojson_day[en_array[i]] = kr_array[i]

#data = {}
# for i in range(15):
#     data[i] = tojson_day

# with open('en.json', 'w', encoding='utf-8') as makeJson:
#     json.dump(data, makeJson, ensure_ascii=False, indent='\t')