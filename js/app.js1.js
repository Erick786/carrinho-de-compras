let btnSoma = document.getElementById("btnSoma");
let btnDiminui = document.getElementById("btnDiminui");
let quantidade = document.getElementById("quantidade");
let preco = document.getElementById("preco");
let total = document.getElementById("total");

btnSoma.addEventListener("click", ()=>{
    soma();
    atualizaTotal();
})
btnDiminui.addEventListener("click",()=>{
    diminui();
    atualizaTotal();
});

quantidade.addEventListener("input",() => {
    
    quantidade.value = Math.max(1, Math.floor(+quantidade.value));
    console.log("Quantidade após a validação", quantidade.value)
    atualizaTotal()
});

function diminui(){
    if(quantidade.value > 1){
        quantidade.value = +quantidade.value - 1;
       }
       atualizaTotal(); 
    /*pode usar o exemplo abaixo tambem
    quantidade.value = +quantidade.value > 1 ? +quantidade.value - 1: 1; 
   */
}


function soma() {
    quantidade.value = +quantidade.value + 1 ;
    atualizaTotal();
}

function atualizaTotal() {
    //Obeter o valor numérico do preço
    let precoNumerico = parseFloat(preco.textContent.replace('R$','').replace(',','.'));
    //calcula o resultado e atualiza o total na interface
    let resultado = precoNumerico * quantidade.value;
    total.innerText = 'R$' + resultado.toFixed(2);
    
    
    
}
   
   //let resultado = +preco.textContent.substring(3,8) * quantidade.value;
    //total.innerText = "R$ " + resultado.toFixed(2);
    
    
    
    
    //total.innerText = `R$   ${resultado.toFixed(2)}`;
    /*let cardNumber = document.getElementById("numeroCartao").value;
    let nomeTitular = document.getElementById("nomeTitular").value;
    let mesExpiracao = document.getElementById("mesExpiracao").value;
    let anoExpiracao = document.getElementById("anoExpiracao").value;
    let cvv = document.getElementById("cvv").value;

    // Atualizar os elementos do cartão com os dados digitados
    document.getElementById("cardNumber").innerText = numeroCartao || "**** **** **** ****";
    document.getElementById("cardHolder").innerText
    */

    /* o chatgpt me deu essa opção mas não funcionou
     let precoNumerico = parseFloat(preco.textContent.replace("R$ ", "").replace(",", "."));
    let resultado = precoNumerico * quantidade.value;
    total.innerText = "R$ " + resultado.toFixed(2);
   */
    
        