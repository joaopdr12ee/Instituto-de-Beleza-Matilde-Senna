localStorageCarrinho = 'Carrinho'

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('.navbar').style.background = '#111';
    }else if(window.scrollY < 100){
        document.querySelector('.navbar').style.background = 'transparent';
    }
});

function send(name,value){
    textopadrao = `Bom dia, eu me interessei no produto ${name}, no valor de R$${value} e gostaria de fazer um orçamento.`
    window.open(` https://wa.me/553197486420?text=${textopadrao}`, '_blank');
}
function inserecarrinho(nome, valor){
    let item = JSON.parse(localStorage.getItem(localStorageCarrinho) || "[]")

    item.push({
        name: nome,
        value: valor
    });

    localStorage.setItem(localStorageCarrinho,JSON.stringify(item))
    displaycarrinho();
}

function abrecarrinho(){
    document.getElementById('prodcarrinho').style.width = '200px'
    document.getElementById('prodcarrinho').style.height = '400px'
    document.getElementById('prodcarrinho').style.color = '#111'
}
function closecarrinho(){
    document.getElementById('prodcarrinho').style.width = '0px'
    document.getElementById('prodcarrinho').style.height = '0px'
    document.getElementById('prodcarrinho').style.color = 'transparent'
}

function sendcarrinho(){
    let produtos = JSON.parse(localStorage.getItem(localStorageCarrinho) || "[]")
    localStorage.setItem(localStorageCarrinho,JSON.stringify(produtos))
    carrinho = ''
    for(j=0;j != produtos.length;j++){
        carrinho+= `${produtos[j]['name']} - R$${produtos[j]['value']}%0A`
    }
    textopadrao = `Bom dia, eu me interessei nos produtos:%0A${carrinho}no valor total de ${document.getElementById('total').innerHTML} e gostaria de fazer um orçamento.`
    window.open(` https://wa.me/553197486420?text=${textopadrao}`, '_blank');
}