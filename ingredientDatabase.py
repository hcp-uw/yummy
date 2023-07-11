import psycopg2
import os
import json
from dotenv import load_dotenv

load_dotenv()
conn = psycopg2.connect(host=os.getenv("HOST"),
                        port=os.getenv("PORT"),
                        user=os.getenv("USER"),
                        password=os.getenv("PASSWORD"),
                        database=os.getenv("DATABASE")) # To remove slash

clearCommand = "DELETE FROM public.\"Recipes\""
seedCommand = "INSERT INTO public.\"Recipes\"(name, ingredients, prep_time, servings, cook_time, cuisine, link) VALUES"
selectCommand = "SELECT name, ingredients, prep_time, servings, cook_time, cuisine, link FROM public.\"Recipes\";"

clearIngredientCommand = "DELETE FROM public.\"Ingredients\""
seedIngredientCommand = "INSERT INTO public.\"Ingredients\"(\"Ingredient\", \"Category\")	VALUES"
selectIngredientCommand = "SELECT \"Ingredient\", \"Category\" FROM public.\"Ingredients\""

# First clear the database entries
cursor = conn.cursor()
cursor.execute(clearCommand)
cursor.execute(clearIngredientCommand)

# Open json file and add database items
f = open('recipes.json')
data = json.load(f)
for i in data:
    cursor.execute(f"{seedCommand} (\'{i['name']}\', ARRAY{i['ingredients']}, \'{i['prep_time']}\', {i['servings']}, {i['cook_time']}, \'{i['cuisine']}\', \'{i['link']}\')")

f.close()

ingredients = []
with open('Food.json', 'r', encoding='utf8') as f:
    for ingredient in f:
        added_ingredient = json.loads(ingredient)
        added_ingredient['name'] = added_ingredient['name'].replace("'", "")
        ingredients.append(added_ingredient)

for i in ingredients:
    cursor.execute(f"{seedIngredientCommand} (\'{i['name']}\', \'{i['food_subgroup']}\')")

f.close()

# Print database entries
cursor = conn.cursor()
cursor.execute(selectCommand)
result = cursor.fetchall()
print(result)

cursor.execute(selectIngredientCommand)
result = cursor.fetchall()
print(result)

# Commit and close cursor
conn.commit()
cursor.close()
conn.close()