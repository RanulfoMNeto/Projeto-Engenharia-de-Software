import time
from selenium import webdriver

def main():
    driver = webdriver.Chrome()
    # Navigate to a website
    url = 'http://localhost:3000/keyword'
    # Abrir a página da web
    driver.get(url)
    # Adicionar uma espera de 5 segundos
    time.sleep(5)
    # Localizar o campo de entrada pelo XPath e inserir texto
    input_element = driver.find_element_by_xpath('//*[@id="__next"]/div/div[3]/div/form/div/div[1]/div[1]/input')
    # Adicionar uma espera de 2 segundos
    time.sleep(2)
    input_element.send_keys('Engenharia de Software')
    # Adicionar uma espera de 2 segundos
    time.sleep(2)
    button_element = driver.find_element_by_xpath('//*[@id="__next"]/div/div[3]/div/form/div/div[3]/div/button')
    # Adicionar uma espera de 2 segundos
    time.sleep(2)
    button_element.click()
    # Adicionar uma espera de 5 segundos
    time.sleep(5)
    input("Pressione Enter para fechar o navegador...")

if __name__ == "__main__":
    main()
