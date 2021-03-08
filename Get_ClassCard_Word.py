from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import random
browser = webdriver.Chrome() 
browser.get("https://www.classcard.net/set/4520841")

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
time.sleep(random.uniform(1,3)) # 자동화탐지를 우회 하기 위한 delay
browser.find_element_by_xpath("//*[@id='loginForm']/div[2]/button").click()