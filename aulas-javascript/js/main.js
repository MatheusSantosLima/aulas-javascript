var nome = "Matheus Santos";
var n1 = 40;
var n2 = 5;
var frase = "Japão é o melhor time do mundo";

alert(nome + " tem " + idade + " anos ");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));


var frutas = [{nome:"maça", cor: "vermelha"},{nome:"uva", cor: "roxa"} ]
console.log(frutas);
alert(frutas[1].nome);





var fruta = {nome:"maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);


var lista = ["maça","pera", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));



var d = new Date();
alert(d.getMinutes()+ 1);
alert(d.getDay()+ 1);
alert(d.getHours()+ 1);


var count;
for(count = 1; count <= 5; count++){
     alert(count);
}



var count = 0;
while(count <= 4){
    alert(count);
    console.log(count);
    count++
}





var idade = prompt("Qual sua idade");
if(idade >= 20){
    alert("maior de idade");
}else{
    alert("menor de idade");
};




function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar = 0;
    if(idade >= 18){
        validar = true;
        

    }else{
         validar = false;
    }
    return validar;
}

var idade = prompt ("Qual sua idade");
console.log(validaIdade(idade));



function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("obrigado por clicar");
}


function redirecionar(){
    window.open("https://www.google.com/");
    //window.location.href = "https://www.rocketseat.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui";
    elemento.innerHTML = "Obrigado por passar o mouse aqui";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
    alert("pagina carregada")
}


    function funcaoChange(elemento){
        console.log(elemento.value)

    }


