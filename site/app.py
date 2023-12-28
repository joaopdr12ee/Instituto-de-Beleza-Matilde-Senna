from flask import Flask, redirect, render_template, request
import base64


app = Flask(__name__, template_folder='templates')



@app.route("/")
def home():
    return render_template('index.html')

@app.route("/produtos")
def produtos():
    return render_template('produtos.html')

@app.route("/inserir", methods=['POST','GET'])
def inserir():
    nome = request.form.get('nome')
    valor = request.form.get('valor')
    file = request.files['arquivo']
    image_string = base64.b64encode(file.read()).decode('utf-8')
    promo = request.form.get('promocao')

    return render_template('atualizarbase.html',nomes=f'{nome}',valor=valor,promo=promo, img=image_string)

if __name__ == "__main__":
    app.run(debug=True, port=8000)