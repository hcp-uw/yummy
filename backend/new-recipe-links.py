'''
Updates any invalid URLs in the recipe database.

Last updated: 5/26/23
'''

from googlesearch import search
import json
import validators

# pull data from json
f = open('db-recipes.json')
recipes = json.load(f)
 
# to search
for k,v in recipes.items():
    if (not validators.url(recipes[k]["source"])):
        search_query = recipes[k]["name"] + " recipe"
        for j in search(search_query, tld="co.in", num=1, stop=1, pause=2):
            recipes[k]["source"] = j

# update recipes database
with open("db-recipes.json", "w") as outfile:
    json.dump(recipes, outfile, indent=4)