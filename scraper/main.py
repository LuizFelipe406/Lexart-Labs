from flask import Flask
from flask_cors import CORS
from scraper import get_products

app = Flask(__name__)
CORS(app)

@app.route("/search/<category>/<name>")
def searchProduct(category, name):
    return get_products(name, category)