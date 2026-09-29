function somaMaior() {

    let a = Number(prompt("digite um número:"));
    let b = Number(prompt("digite um número:"));
    let c = Number(prompt("digite um número:"));
    let soma = a + b;
    
    if (soma < c) {
         alert("A soma de A+B é " + soma )
    } else { 
      console.log("fim!")
    
    }
}
function tempoCasamento() {
    let nome = String(prompt("Digite seu nome:")).toUpperCase();
    let genero = String(prompt("Qual seu gênero? 'M' ou 'F'?")).toUpperCase();
    let estadoCivil = String(prompt("Qual seu estado civil? Solteiro(a) ou Casado(a)?")).toUpperCase();
     console.log(`
        ==========
        Nome: ${nome},
        Gênero: ${genero},
        Estado Civil: ${estadoCivil}
        `)

    if (genero === 'F' && estadoCivil === 'CASADA'){
     let tempoCasada = Number(prompt("Quantos anos de casada?"));
     alert(`
       ==============
       Nome: ${nome},
       Gênero: ${genero},
       Estado Civil: ${estadoCivil},
       Tempo de Casada: ${tempoCasada}
     `)

    }

}

function imparPar() {
  let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0 ) {
    alert("O número é par.");
} else if (numero % 2 === 1) {
    alert("O número é ímpar.");
} else {
    alert("Caractere inválido :(");
    imparPar();

}

}
