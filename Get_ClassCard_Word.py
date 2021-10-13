from bs4 import BeautifulSoup
from selenium import webdriver
import time
import json
from collections import OrderedDict

browser = webdriver.Chrome() 
browser.get("https://www.classcard.net/set/4520841")


def Sleep_and_ClickXpath(delay, Xpath):
    time.sleep(delay)
    browser.find_element_by_xpath(Xpath).click()

# 로그인버튼 클릭
time.sleep(3)

login = browser.find_element_by_xpath("/html/body/div[1]/div[1]/div/div/div[3]/a[4]")
login.click()
# 로그인 우회
input_js = ' \
        document.getElementById("login_id").value = "{login_id}"; \
        document.getElementById("login_pwd").value = "{login_pwd}"; \
    '.format(login_id = "gkswh4860", login_pwd = "2134okok^^") # 아이디 비번 입력
time.sleep(3) # 자동화탐지를 우회 하기 위한 delay
browser.execute_script(input_js)
time.sleep(3) # 자동화탐지를 우회 하기 위한 delay
browser.find_element_by_xpath("//*[@id='loginForm']/div[2]/button").click()

Sleep_and_ClickXpath(3, "/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/a")
Sleep_and_ClickXpath(3, "/html/body/div[1]/div[2]/div/div/div[2]/div/div[2]/ul/li[4]/a")
Sleep_and_ClickXpath(3, "/html/body/div[1]/div[2]/div/div/div[2]/div/div[3]/div[2]/div/div/a[4]/img") # 교재 이미지 클릭

#browser.execute_script("window.scrollTo(0, document.body.scrollHeight)") # 스크롤 내리기

# 광고 우회용
time.sleep(5)
button = browser.find_element_by_xpath("//*[@id='newsPopupModal']/div[2]/div/div/div[4]/a")
browser.execute_script("arguments[0].click();", button)

# 실제 데이터 수집
word_data = {}
word_data_day = ""
for i in range(50):
    xPath = "/html/body/div[1]/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div[{}]/div[1]/div[2]/div/a".format(i + 1)
    Sleep_and_ClickXpath(3, xPath)
    soup = BeautifulSoup(browser.page_source, "html5lib")
    en = soup.find_all("div", attrs = {"class" : "ex_front hidden"})
    kr = soup.find_all("div", attrs = {"class" : "ex_back hidden"})
    word_array = []
    tojson_day = OrderedDict()
    
    for j in range(int(len(en) / 2)):
        word_array.append(en[j].get_text() + " : " + kr[j].get_text())
        #print(en[j].get_text() + " : " + kr[j].get_text())

    for k in range(len(word_array)):
        tojson_day[k + 1] = word_array[k]

    # json 데이터 저장 방식 바꾸기
    word_data_day = "day" + str(i+1)
    word_data[word_data_day] = tojson_day
    time.sleep(3)
    browser.back()
browser.close()

with open('word_data_test.json', 'w', encoding='utf-8') as makeJson:
    json.dump(word_data, makeJson, ensure_ascii=False, indent='\t')
