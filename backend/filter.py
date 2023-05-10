import psycopg2

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
    query = "SELECT TOP 100 * FROM \"Recipes\" WHERE " # limiting to top 100 results
    if len(categories) > 1:
        for i in range(len(categories) - 1):
            query += categories[i][0].lower() + " = '" + str(categories[i][1]) + "' AND "
        query += categories[len(categories) - 1][0].lower() + " = " + str(categories[len(categories) - 1][1])
    else:
        query += categories[0][0] + " = \"" + categories[0][1] + "\""

    # executing query
    cursor.execute(query)
    return cursor.fetchall()
