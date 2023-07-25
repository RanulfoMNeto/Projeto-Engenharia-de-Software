import time
from selenium import webdriver

def main():
    driver = webdriver.Chrome()
    # Navigate to a website
    url = 'http://localhost:3000/keyword'
    # Abrir a página da web
    driver.get(url)
    # Adicionar uma espera de 5 segundos
    # Seleciona a primeira palavra-chave
    div = '//*[@id="__next"]/div/div[3]/div/form/div/div[2]/div'
    element = driver.find_element_by_xpath(div + '/div')
    # Pega o conteúdo da palavra-chave
    element.text
    time.sleep(5)
    button_element = driver.find_element_by_xpath(div + '/svg')
    # Adicionar uma espera de 2 segundos
    time.sleep(2)
    button_element.click()
    time.sleep(5)
    elementNew = driver.find_element_by_xpath(div + '/div')
    # Pega o conteúdo da palavra-chave
    if (element != elementnew):
        print("Apagou!")
    # Adicionar uma espera de 5 segundos
    time.sleep(5)
    input("Pressione Enter para fechar o navegador...")

if __name__ == "__main__":
    main()
