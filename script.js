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

function lerVariaveis() {

  let variavel = Number(prompt("Digite um número: "));

  if (variavel % 2 === 0) {
    let soma = variavel + 5
   alert("A resposta é: " + soma);
} else {
    let soma = variavel + 8
    alert("A resposta é: " + soma);
}

}

function ordenarDecrescente() {
  let a = parseInt(prompt("Digite o valor de A:"));
  let b = parseInt(prompt("Digite o valor de B:"));
  let c = parseInt(prompt("Digite o valor de C:"));

  if (a > b && a > c) {
    if (b > c) {
        alert(`${a}, ${b}, ${c}`);
    } else {
        alert(`${a}, ${c}, ${b}`);
    }

  } else if (b > a && b > c) {
    if (c > a) {
        alert(`${b}, ${c}, ${a}`);
    } else {
        alert(`${b}, ${a}, ${c}`);
    }
   
  } else { 
    if (b > a) {
        alert(`${c}, ${b}, ${a}`);
    } else {
        alert(`${c}, ${a}, ${b}`);
    }
    
  }


}

function pesoIdeal() {
     let altura = parseFloat(prompt("Digite sua altura em metros: (Ex.: 1.80)"));
     let genero = prompt("Digite seu gênero (EX.: M ou F):").toUpperCase();
     let pesoIdeal;

     switch (genero) {
     case "M":
             pesoIdeal = (72.7 * altura) - 58;
         break;
     case "F":
             pesoIdeal = (62.1 * altura) - 44.7;
         break;
     default:
            alert("Gênero informado é inválido.");
         return;
         
     }
     alert(`O peso ideal é ${pesoIdeal.toFixed(2)} kg.`);

}

function descobrirImc() {
   let peso = parseFloat(prompt("Digite seu peso em kg:"));
   let altura = parseFloat(prompt("Digite sua altura em metros: (Ex.: 1.80)"));
   const imc = peso / (altura ** 2);
   let condicao;

      switch (true) {

    case imc < 18.5:
         condicao = "Abaixo do peso";
        break;
    case imc >= 18.5 && imc < 25:
            condicao = "Peso normal";
            break;
    case imc >= 25 && imc < 30:
                condicao = "Acima do peso";
                break;
    case imc >= 30:
                    condicao = "Obeso";
                    break;
    default:
        alert('Impossivel de calcular o IMC com os dados fornecidos.');

 }
    alert(`
        IMC: ${imc.toFixed(2)}
          Condição: ${condicao}`);

}

function verDesconto() {
   let preco = parseFloat(prompt("Digite o preço sem desconto:"));
   let codigo = parseInt(prompt(`
    Escolhas uma das opções disponiveis:
    1 - Dinheiro ou cheque (Desconto de 10%)
    2 - Cartão de crédito (Desconto de 5%)
    3 - 2x sem juros 
    4 2x com juros de 10%
   `));
   let total;

   switch (codigo) {

     case 1: 
      total = preco * 0.10
         break;
     case 2:
        total = preco * 0.15
         break;
     case 3:
        total = preco;
         break;
     case 4:
       total = preco * 1.1;
        break;
     default:
        alert("Código inválido.");
        return;
 
   }
   (codigo >=3) 
   ? alert(`Duas parcelas de R$ ${(total / 2).toFixed(2)} cada.`) 
    : alert("Total a pagar: R$ " + total.toFixed(2));

}

function verificarMedia() {

  let id = prompt("Digite o identificador do aluno:");
  let nota01 = parseFloat(prompt("Digite a nota da 1ª verificação:"));
  let nota02 = parseFloat(prompt("Digite a nota da 2ª verificação:"));
  let nota03 = parseFloat(prompt("Digite a nota da 3ª verificação:"));
  let mediaExercicios = parseFloat(prompt("Digite a Média dos exercícios:"));
  const mediaAproveitamento = (nota01 + (nota02 * 2) + (nota03 * 3) + 
  mediaExercicios) / 7 * 10;
  let conceito; 

     switch (true) {
     
    case mediaAproveitamento >= 90:
       conceito = "A";
       break;
    case mediaAproveitamento >= 75 && mediaAproveitamento < 90:
        conceito = "B";
        break;
    case mediaAproveitamento >= 60 && mediaAproveitamento < 75:
        conceito = "C";
        break;
    case mediaAproveitamento >= 40 && mediaAproveitamento < 60:
        conceito = "D";
        break;
    case mediaAproveitamento < 40:
        conceito = "E";
        break;
        default: 
          alert("Impossível de obter a média de aproveitamento");
          return;
     }

     let resultado = ["A", "B", "C"].includes(conceito) ? "APROVADO" : "REPROVADO";
      alert(`
        Identificador do aluno: ${id}
        Nota 1: ${nota01.toFixed(2)}
        Nota 2: ${nota02.toFixed(2)}
        Nota 3: ${nota03.toFixed(2)}
        Média dos exercícios: ${mediaExercicios.toFixed(2)}
        Média de aproveitamento: ${mediaAproveitamento.toFixed(2)}
        Conceito: ${conceito}
        Resultado: ${resultado}
      `)
      
    }  
 