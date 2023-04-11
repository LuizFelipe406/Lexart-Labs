import time
import requests
from parsel import Selector

CATEGORIES = {
    "Mobile": "&refinements%5B0%5D%5Bid%5D=categoryId&refinements%5B0%5D%5Bvalues%5D%5B0%5D=7",
    "TV": "&refinements%5B0%5D%5Bid%5D=categoryId&refinements%5B0%5D%5Bvalues%5D%5B0%5D=3",
    "Refrigerator": "&refinements%5B0%5D%5Bid%5D=categoryId&refinements%5B0%5D%5Bvalues%5D%5B0%5D=8"
}

def fetch(url):
    try:
        time.sleep(1)
        content = requests.get(
            url, headers={"user-agent": "Fake user-agent"}, timeout=3
        )
    except requests.exceptions.Timeout:
        return None

    if content.status_code == 200:
        return content.text
    else:
        return None


def scrape_products(html_content):
    result = list()
    selector = Selector(text=html_content)
    for product in selector.css("a[data-testid='product-card::card']").getall():
        productObject = dict()
        productSelector = Selector(text=product)
        productObject["website"] = "https://www.buscape.com.br" + productSelector.css("::attr(href)").get()
        productObject["id"] = productSelector.css("::attr(href)").get()
        productObject["image"] = productSelector.css("div[data-testid='product-card::image'] span img:last-child::attr(src)").get()
        productObject["title"] = productSelector.css("h2[data-testid='product-card::name']::text").get()
        productObject["price"] = productSelector.css("p[data-testid='product-card::price']::text").get()
        result.append(productObject)
    return result


# Requisito 5
def get_products(name, category):
    searchTerm = name if name != "null" else ""
    url = f"https://www.buscape.com.br/search?q={searchTerm}{CATEGORIES[category]}"
    html_content = fetch(url)
    return scrape_products(html_content)
