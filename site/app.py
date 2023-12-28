from flask import Flask, redirect, render_template, request
import json


app = Flask(__name__, template_folder='templates')



@app.route("/")
def home():
    return render_template('index.html')

@app.route("/produtos")
def produtos():
    return render_template('produtos.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)