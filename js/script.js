/*
console.log("alô mundo")

let a = 0.1
let b = 0.2
console.log(a+b)


//As instruções abaixo geram valores aleatórios
//entre 0 e 255 para atribuir a cores RGB


console.log(`Cor vermelha escolhida ${Math.trunc((Math.random()*256))}`)


*/
/**
* Funcao para gerar cores aleatorias
* @returns - um código RGB sorteado
*/
function geraCor() {
    let corAleatoriaVermelha = Math.random()*256
    let corAleatoriaVerde = Math.random()*256
    let corAleatoriaAzul = Math.random()*256

    corAleatoriaVermelha = Math.trunc(corAleatoriaVermelha)
    corAleatoriaVerde = Math.trunc(corAleatoriaVerde)
    corAleatoriaAzul = Math.trunc(corAleatoriaAzul)

    return "rgb("+corAleatoriaVermelha+"," +corAleatoriaVerde+","+corAleatoriaAzul+")"
}

//expressão de função
const somar = function(a, b) {
    return a+b
}

somar(2,3)

//arrow function
const multiplicar = (a, b) => {
return a*b
}

const dobrar = numero => numero*2

// atribuindo o h1 da página web na constante cabecalhoDaPagina
const cabecalhoDaPagina = document.querySelector("#cabecalho")
cabecalhoDaPagina.textContent = "Outro cabeçalho"
console.log(cabecalhoDaPagina)

// atribuindo o botao da página web na constante botao
const botao = document.querySelector("#executar")
// adicionando um comportamento ao botao ao clicar
botao.onclick = function() {
//document.body.style.backgroundColor = geraCor()
}

/*
exercício 1
*/
botao.addEventListener("click", function(){
    // a. Recuperar o valor digitado no input #frase
    const frase = document.querySelector("#frase").value

    // b. contar vogais
    let qtdVogais = 0
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u"){ 
            qtdVogais++
        }
    }

    // c. escrever uma resposta
    const resultado = document.querySelector("#resultado")
    resultado.textContent = `A frase possui ${qtdVogais} vogais`
})

/*
exercicio 2
*/

const botao2 = document.querySelector("#executar2")

botao2.addEventListener("click", function() {
    const frase2 = document.querySelector("#frase2").value

    let qtdPalavras = 0

    for (let i = 0; i < frase2.length; i++) {
        // Se o caractere atual não é espaço e o próximo é espaço OU é o final da frase
        if (frase2[i] !== " " && (frase2[i + 1] === " " || i === frase2.length - 1)) {
            qtdPalavras++
        }
    }

    const resultado2 = document.querySelector("#resultado2")
    resultado2.textContent = `Número de palavras: ${qtdPalavras}`
})


/*
exercicio 3
*/

const botao3 = document.querySelector("#executar3")

botao3.addEventListener("click", function() {
    const frase3 = document.querySelector("#frase3").value

    // Transforma em array, inverte, volta pra string
    const novaFrase = frase3.split("").reverse().join("")

    const resultado3 = document.querySelector("#resultado3")
    resultado3.textContent = `Frase invertida: ${novaFrase}`
})


/*
exercicio 4
*/

const botao4 = document.querySelector("#executar4")

// A posição das palavras continua a mesma, mas as letras dentro de cada palavra são invertidas.
botao4.addEventListener("click", function () {
    const frase4 = document.querySelector("#frase4").value

    // 1. Quebra em palavras
    const palavras = frase4.split(" ")

    // 2. Inverte cada palavra individualmente
    const invertidas = palavras.map(palavra =>
        palavra.split("").reverse().join("")
    )

    // 3. Junta tudo novamente
    const novaFrase = invertidas.join(" ")

    const resultado4 = document.querySelector("#resultado4")
    resultado4.textContent = `Cada palavra invertida: ${novaFrase}`
})


/*
exercicio 5
*/

const botao5 = document.querySelector("#executar5")

botao5.addEventListener("click", function(){
    let numAleatorio = Math.floor(Math.random() * 51)

    const resultado5 = document.querySelector("#resultado5")
    resultado5.textContent = `Número aleatório entre 0 e 50: ${numAleatorio}`
})

/*
exercicio 6
*/

const botao6 = document.querySelector("#executar6")

botao6.addEventListener("click", function(){
    const numero = Number(document.querySelector("#frase6").value)
    const resultado6 = document.querySelector("#resultado6")

    if(numero >= 0 && numero < 10){ 
        resultado6.textContent = `Insuficiente`
    } else if(numero >= 10 && numero < 14){
        resultado6.textContent = `Bom`
    } else{
        resultado6.textContent = `Muito bom`
    }
})

/*
exercicio 7
*/

const botao7 = document.querySelector("#executar7")

botao7.addEventListener("click", function(){
    const n1 = Number(document.querySelector("#num1").value)
    const n2 = Number(document.querySelector("#num2").value)
    const resultado7 = document.querySelector("#resultado7")

    let tabela = `
        <table border="1" cellpadding="5">
            <tr>
                <th>Operação</th>
                <th>Valor</th>
            </tr>
            <tr>
                <td>${n1} + ${n2}</td>
                <td>${n1 + n2}</td>
            </tr>
            <tr>
                <td>${n1} * ${n2}</td>
                <td>${n1 * n2}</td>
            </tr>
            <tr>
                <td>${n1} / ${n2}</td>
                <td>${n1 / n2}</td>
            </tr>
            <tr>
                <td>${n1} % ${n2}</td>
                <td>${n1 % n2}</td>
            </tr>
        </table>
    `

    resultado7.innerHTML = tabela
})

/*
exercicio 8
*/

const botao8 = document.querySelector("#executar8")

botao8.addEventListener("click", function () {
    const senha = document.querySelector("#senha8").value
    const resultado = document.querySelector("#resultado8")

    // Regras:
    const temMinuscula = /[a-z]/.test(senha)
    const temMaiuscula = /[A-Z]/.test(senha)
    const temNumero = /[0-9]/.test(senha)
    const temEspecial = /[@#!$%&*()\-\+\.=]/.test(senha)

    // Classificação:
    if ((temMinuscula && !temMaiuscula && !temNumero && !temEspecial) ||
        (!temMinuscula && temMaiuscula && !temNumero && !temEspecial)) {

        resultado.textContent = "Fraca"
        resultado.style.color = "red"

    } else if (temMinuscula && temMaiuscula && temNumero && !temEspecial) {

        resultado.textContent = "Moderada"
        resultado.style.color = "orange"

    } else if (temMinuscula && temMaiuscula && temNumero && temEspecial) {

        resultado.textContent = "Forte"
        resultado.style.color = "green"

    } else {
        // Caso não se encaixe em nenhuma das regras acima
        resultado.textContent = "Senha não se encaixa nas regras"
        resultado.style.color = "black"
    }
})

/*
exercicio 9
*/

const botao9 = document.querySelector("#executar9")

botao9.addEventListener("click", function() {

    const texto = document.querySelector("#frase9").value
    const resultado = document.querySelector("#resultado9")

    const mapa = {
        "t": "p", "p": "t",
        "e": "o", "o": "e",
        "n": "l", "l": "n",
        "i": "a", "a": "i",
        "s": "r", "r": "s"
    }

    let codificado = ""

    for (let c of texto) { // para cada letra do texto
        let lower = c.toLowerCase()

        if (mapa[lower]) {
            // Se for letra do mapa, troca mantendo o tipo (maiúscula/minúscula)
            let novaLetra = mapa[lower]

            if (c === c.toUpperCase()) {
                codificado += novaLetra.toUpperCase()
            } else {
                codificado += novaLetra
            }

        } else {
            // Caso não esteja no mapa, mantém igual
            codificado += c
        }
    }

    resultado.textContent = codificado
})

