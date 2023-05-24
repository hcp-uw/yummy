import psycopg2
import os
from dotenv import load_dotenv

def filter_on_ingredients(ingredients: []):
    """
    Returns the top 100 recipes with all of the given ingredients provided
    :param ingredients: a string containing a comma separated list of ingredients. 
    :return Returns a list of the top 100 query results.
    """
    ingredients.sort()
    ingredient_string = ".*"
    for ingredient in ingredients:
        ingredient_string += ingredient + ",.*"

    load_dotenv()
    conn = psycopg2.connect(host=os.getenv("HOST"),
                            port=os.getenv("PORT"),
                            user=os.getenv("DATABASE_USER"),
                            password=os.getenv("PASSWORD"),
                            database=os.getenv("DATABASE")) # To remove slash

    #queryCommand = "SELECT name, ingredients, prep_time, servings, cook_time, cuisine, link FROM public.\"Recipes\";"
    queryCommand = f"SELECT * FROM public.\"Recipes\" WHERE ingredient_string ~* \'{ingredient_string}\'"
    print("QUERY COMMAND: " + queryCommand)
    # Print database entries
    cursor = conn.cursor()
    cursor.execute(queryCommand)
    result = cursor.fetchall()
    print(result)

    # Commit and close cursor
    conn.commit()
    cursor.close()
    conn.close()
    
def filter(categories: []): # how are we expecting inputs to be recieved - right now: list of tuples
    """
    Returns the top 100 recipes with given filters applied
    :param categories: a list of tuples containing the categories to filter by and the filter request
        Example: [('cuisine', 'Mexican'), ('servings', 1)]
    :return Returns a list of the top 100 query results
    """
    if len(categories) == 0:
        return []
    
    # connecting to database
    conn = psycopg2.connect(database="yumeat",
                            host="localhost",
                            user="postgres",
                            password="YOUR_PASSWORD")
    cursor = conn.cursor()
    
    # constructing query
    query = "SELECT TOP 100 name, link FROM \"Recipes\" WHERE " # limiting to top 100 results
    if len(categories) > 1:
        for i in range(len(categories) - 1):
            query += categories[i][0].lower() + " = '" + str(categories[i][1]) + "' AND "
        query += categories[len(categories) - 1][0].lower() + " = " + str(categories[len(categories) - 1][1])
    else:
        query += categories[0][0] + " = \"" + categories[0][1] + "\""

    # executing query
    cursor.execute(query)
    return cursor.fetchall()