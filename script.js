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

function valoresIguais() {
    let a = parseInt(prompt("Digite um número:"));
    let b = parseInt(prompt("Digite outro número:"));

    if (a === b) {
        let c = a + b;
        alert("A soma de A + B é: " + c);
    } else {
        let c = a * b;
        alert("O produto de A * B é: " + c);
    }

}

function valorPositivoNegativo() {
    let numero = Number(prompt("Digite um número, positivo ou negativo:"));

        if (numero < 0) {
            let resultado = numero * 3;
            alert("O triplo de " + numero + " é: " + resultado);
        } else {
            let resultado = numero * 2;
            alert("O dobro de " + numero + " é: " + resultado);
        }



        }

function valorBooleano() {
    let bool1 = Boolean(Number(prompt("Digite '1' para true ou '0' para false: ")));
    let bool2 = Boolean(Number(prompt("Digite '1' para true ou '0' para false: ")));

    console.log(bool1);
    console.log(bool2);

       if(bool1 == true && bool2 == true) {
        alert("Ambos são verdadeiros.");
       } else if (bool1 == false && bool2 == false) {
        alert("Ambos são falsos.");
       } else {
        alert("Que que tá acontecendo?");
       }
}

