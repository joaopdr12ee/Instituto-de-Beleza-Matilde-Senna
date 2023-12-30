window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('.navbar').style.background = '#111';
    }else if(window.scrollY < 100){
        document.querySelector('.navbar').style.background = 'transparent';
    }
});

function send(name,value){
    textopadrao = `Bom dia, eu me interessei no produto ${name}, no valor de ${value} e gostaria de fazer um orçamento.`
    window.open(` https://wa.me/553197486420?text=${textopadrao}`, '_blank');
}
document.getElementById("Contato").addEventListener("click", function() {
    window.scrollTo({top:document.body.scrollHeight - 1000,
        behavior: 'smooth'});
});

function inserecarrinho(nome, valor){
    alert(valor);
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