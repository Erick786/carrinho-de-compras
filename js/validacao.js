let inputNumeroValidacoes = document.getElementById("input-numero");
let titularError = document.getElementById("titularError");
let numeroMinimo = 16;
let numeroMaximo = 16;
let titularInputValidacoes = document.getElementById("titular-input");
let inputCvv = document.getElementById("cvvInput")
let cvvError = document.getElementById("cvvError");
const anoSelect = document.getElementById("anoSelect");
const mesSelect = document.getElementById("mesSelect");
let cpfInput = document.getElementById("cpfInput");
let cpfError = document.getElementById("cpfError");
let anoAtual = new Date().getFullYear();
inputNumeroValidacoes.addEventListener("input", function(){
    validarCartao();
    formatarCartao();
} )

const cvvCartao = document.getElementById("cvv-cartao");


anoSelect.addEventListener("change", atualizarValidadeCartao);
mesSelect.addEventListener("change", atualizarValidadeCartao);
anoSelect.addEventListener("blur",validarAno);
mesSelect.addEventListener("blur", validarMes);

titularInputValidacoes.addEventListener("input", function(){
    const valorTitular = titularInputValidacoes.value.trim();

    if(!/^[A-Za-z\s]*$/.test(valorTitular)){
        titularError.textContent = "O titular deve conter apenas letras.";
    }else{
        titularError.textContent = "";
    }
} )

cpfInput.addEventListener("input", formatarCPF);
cpfInput.addEventListener("blur", validarCPF)

inputCvv.addEventListener("input", function(){
  cvvCartao.textContent = inputCvv.value;
})
inputCvv.addEventListener("input", function(){
    if(this.value.length > 3){
        this.value = this.value.slice(0, 3);
    }
})


for(let i = 1; i <=12; i++){
    let option = document.createElement("option");
    option.text = i < 10 ? '0' + i: i;
    option.value = i;
    mesSelect.add(option);
}

for(let i = anoAtual; i <= anoAtual + 10; i++){
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    anoSelect.add(option);
}

function validarCartao(){
    validaNumero();
    validarTitular();
    validarCvv();
    validarCPF();
}

function formatarCartao(){
    formatarNumeroCartao();
    formatarCPF();
}



function validaNumero(){
   
    
    if (inputNumeroValidacoes.value.length === 16){
        inputNumeroValidacoes.classList.remove("is-invalid");
    } else{
        inputNumeroValidacoes.classList.add("is-invalid");
    }
   
}
  

function formatarNumeroCartao(){
    let numero = inputNumeroValidacoes.value.replace(/\D/g,''); 
    let mascara = numero.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/,"$1 $2 $3 $4").trim();
    inputNumeroValidacoes.value = mascara;

}

function validarTitular(){
    if(titularInputValidacoes.value.length < 3){
        titularError.textContent = "O titular deve ter no minimo 3 caracteres";
    }else{
        titularError.textContent = "";
    }
}

 

function validarCvv(){
    if(inputCvv.value.length == 3){
         inputCvv.classList.remove('is-invalid');
        //cvvError.textContent = "O CVV deve ter no minímo 3 caracteres.";
    } else{
        inputCvv.classList.add("is-invalid");
    }
}

function formatarCPF(){
    let cpf = cpfInput.value.replace(/\D/g, '');
    let mascara = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4');
    cpfInput.value = mascara;
}



function validarCPF() {
   let cpf = cpfInput.value.replace(/\D/g, '');
   if(cpf.length !== 11){
       cpfError.textContent = "CPF invalido. Deve conter 11 dígitos.";
   }else{
    cpfError.textContent = '';
   }
    
}

function validarAno() {
    let anoSelecionado = anoSelect.value;
    let anoAtual = new Date().getFullYear();

    if (anoSelecionado >= anoAtual && anoSelecionado <= anoAtual + 10) {
        // Ano válido
        anoSelect.classList.remove("is-invalid");
    } else {
        // Ano inválido
        anoSelect.classList.add("is-invalid");
    }
}
function validarMes(){
    let mesSelecionado = mesSelect.value;

    if(mesSelecionado >= 1 && mesSelecionado <=12){
        mesSelect.classList.remove("is-invalid");
    }else{
        mesSelect.classList.add("is-invalid");
    }
}
function atualizarValidadeCartao(){
    const anoSelecionado = anoSelect.value;
    const mesSelecionado = mesSelect.value;

    document.getElementById("validade-cartao-mes").textContent = mesSelecionado;
    document.getElementById("cartao-validade-ano").textContent = anoSelecionado.slice(-2);
}
atualizarValidadeCartao();