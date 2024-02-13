let titularInputAnimacoes = document.getElementById("titular-input");
let inputNumeroAnimacoes = document.getElementById("input-numero")
let cartaoTitular = document.getElementById("cartao-titular");
let numeroCartao = document.querySelector(".numero-cartao");
let cvvInput = document.getElementById("cvvInput");
let frente = document.getElementById("frente");
let verso = document.getElementById("verso");
let cartaoLogo = document.getElementById("cartao-logo");
let novaLogoSrc = "img/visa-logo.png";
let maisUmaLogoSrc = "img/logo-cartao-elo.png"
let masterLogoSrc = "img/mastercard.webp"


inputNumeroAnimacoes.addEventListener("keyup", escreveNumeroTitular);


cvvInput.addEventListener("focus", ()=>{
    verso.style.display = "block"
    frente.style.display = "none"
    verso.classList.add("animate__flipOutY");
});
cvvInput.addEventListener("blur", ()=>{
    verso.style.display = "none"
    frente.style.display = "block"
    frente.classList.add("animate__flipOutY");
});
cvvInput.addEventListener("click", virarCartao);
cvvInput.addEventListener("blur", function(){
    frente.classList.remove("animate__flipOutY", "animate__flipOutY");
    verso.classList.remove("animate__flipOutY", "animate__flipOutY");
});

titularInputAnimacoes.addEventListener("keyup", ()=>{
    cartaoTitular.innerHTML = titularInputAnimacoes.value.toUpperCase();
});

document.addEventListener("keydown", function(event){
       switch(event.key){
        case "3":
        definirCartao(maisUmaLogoSrc);
        break;
        case "4":
        definirCartao(novaLogoSrc);
        break;
        case "5":
        definirCartao(masterLogoSrc);        
       }
   
});


function escreveNumeroTitular(){
    //numeroCartao.innerHTML = inputNumeroAnimacoes.value;

    let numero = inputNumeroAnimacoes.value.replace(/\s/g, '');
    let numeroFormatado = numero.match(/.{1,4}/g).join(' ');

    numeroCartao.textContent = numeroFormatado;
}

function virarCartao(){
    frente.classList.toggle("virado");
    verso.classList.toggle("virado");
    
};
function definirCartao(numero) {   
    //let extensao = ".png";
    cartaoLogo.src = numero;
    console.log(numero)

//cartaoLogo.src = novaLogoSrc;
//cartaoLogo.src = maisUmaLogoSrc;
    
}



    
    
    
