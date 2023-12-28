window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('.navbar').style.background = '#111';
    }else if(window.scrollY < 100){
        document.querySelector('.navbar').style.background = 'transparent';
    }
});

function send(name,value){
    textopadrao = `Bom dia, eu me interessei no produto ${name}, no valor de ${value} e gostaria de fazer um orçamento.`
    window.open(` https://wa.me/5538999994246?text=${textopadrao}`, '_blank');
}
document.getElementById("Contato").addEventListener("click", function() {
    window.scrollTo({top:document.body.scrollHeight - 1000,
        behavior: 'smooth'});
});