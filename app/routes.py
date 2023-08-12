from flask import render_template, jsonify
from app import app
import json

num = 0

@app.route('/')
def home():
    return "This is the home!"

@app.route('/getRecipes/', methods=['GET'])
def index():
    global num
    recipes = {
        "name": f"Recipe {num}",
        "ingredients": "",
        "prep_time": num,
        "servings": num,
        "cook_time": num,
        "cuisine": "cuisine",
        "link": "",
        "ingredient_string": ""
    }
    num += 1
    return jsonify(recipes)