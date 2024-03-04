/* # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nível}**"
 
*/

function saldo (vitorias, derrotas){
    return vitorias - derrotas;
}
function nível(vitorias,derrotas){
    let saldoVitorias = saldo (vitorias, derrotas)
    let nível;
        if(saldoVitorias >= 101){
            nível = "Imortal"
        }else if (saldoVitorias >= 91 && saldoVitorias <= 100){
            nível = "Lendário"
        }else if (saldoVitorias >= 81 && saldoVitorias <= 90){
            nível = "Diamante"
        }else if (saldoVitorias >= 51 && saldoVitorias <= 80){
            nível = "Ouro"
        }else if (saldoVitorias >= 21 && saldoVitorias <= 50){
            nível = "Prata"
        }else if (saldoVitorias >= 11 && saldoVitorias <= 20){
            nível = "Bronze"
        }else{ nível = "Ferro" }
   return (`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nível}`);
}

let mensagem = nível (52,6)
console.log (mensagem)
console.log("")