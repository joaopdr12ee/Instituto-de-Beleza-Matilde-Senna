def insere_prod(produto, valor, img, promo):
    import mysql.connector


    host = 'localhost'
    database = 'produtos'
    user = 'root'
    password = ''

    try:

        conn = mysql.connector.connect(
            host=host,
            database=database,
            user=user,
            password=password
        )
        print("Conexão bem-sucedida!")


        cursor = conn.cursor()

        cursor.execute("SELECT * FROM prod_info WHERE name = %s", (produto,))
        existing_product = cursor.fetchall()

        if existing_product:
            cursor.execute(f"UPDATE prod_info SET value = '{valor}', promo = '{promo}' WHERE name = %s", (produto,))
        else:
            cursor.execute(f"INSERT INTO prod_info VALUES('','{produto}','{valor}','{img}','{promo}')")

        conn.commit()

        conn.close()

    except mysql.connector.Error as err:
        print(f"Erro na conexão: {err}")

