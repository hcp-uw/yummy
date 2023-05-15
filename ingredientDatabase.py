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

# First clear the database entries
cursor = conn.cursor()
cursor.execute(clearCommand)

# Open json file and add database items
f = open('recipes.json')
data = json.load(f)
for i in data:
    cursor.execute(f"{seedCommand} (\'{i['name']}\', \'{i['foodgroup']}")

f.close()

# Print database entries
cursor = conn.cursor()
cursor.execute(selectCommand)
result = cursor.fetchall()
print(result)

# Commit and close cursor
conn.commit()
cursor.close()
conn.close()