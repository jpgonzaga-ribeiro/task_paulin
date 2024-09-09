
function ex1(){
alert("ALo galera de cowboy")
}

function ex2(){
 let atvdois = document.getElementById("numeroatv2").value
 alert(`O número informado foi ` + atvdois)
}

function ex3(){
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    alert(`A soma dos números eh ${Number (a) + Number (b)}`)
}

function ex4(){
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    let c = document.getElementById("num3").value
    let d = document.getElementById("num4").value

    alert(`A média das notas eh ${(Number (a) + Number (b)+ Number (c) + Number (d))/4 }`)
}

function ex5(){
    let a = document.getElementById("num1").value
    alert(`A quantidade em cm eh ${(Number (a) * 100 )}`)
}

function ex6(){
    let a = document.getElementById("num1").value
    alert(`A area do círculo é ${(Number (a**2) * 3.14 )}`) 
}

function ex7(){
    let a = document.getElementById("num1").value
    alert(`A area do quadrado é ${(Number (a**2) *2)}`) 
}

function ex8(){
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    alert(`Vc irá receber ${(Number (a) * Number (b))}`) 
}

function ex9(){
    let a = document.getElementById("num1").value
    alert(`Temperatura em Celsius é ${( 5*(Number (a) -32) / 9)}`) 
}

function ex10(){
    let a = document.getElementById("num1").value
    alert(`Temperatura em Fahrenheit é ${( (Number (a) * 1.8) +32)}`) 
}

function ex11(){
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    let c = document.getElementById("num3").value
     
    let pa = ((Number (a)*2) * (Number (b)/2))
    let pb = ((Number (a)*3) + Number(c))
    let pc = (Number(c)**3)

    alert(`Produto do dobro do primeiro com metade do segundo ${( Number (pa) )}
            A soma do triplo do primeiro com o terceiro ${( Number (pb) )}
            O terceiro elevado ao cubo ${( Number (pc) )}`)
    
}

function ex12(){
    let a = document.getElementById("num1").value
    let pa = a/100
    alert(`Sexo : Masculino Seu peso ideal é ${(((72.7 * Number (pa) )) - 58).toFixed(2)}
Sexo : Feminino Seu peso ideal é ${(((62.1 * Number (pa) )) - 44.7).toFixed(2)}`)
}

function ex13(){
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value

    let pa = Number (a) * Number (b) // bruto
    let pb = pa * 0.11 // imposto de renda
    let pc = pa * 0.08 // inss
    let pd = pa * 0.05 // Sindicato
    let pe = pa - (pb + pc + pd) //Líquido
    alert(`Salario bruto R$${pa.toFixed(2)}
Imposto de Renda R$${pb.toFixed(2)}
INSS R$${pc.toFixed(2)}
Sindicato R$${pd.toFixed(2)}
Salário Líquido R$${pe.toFixed(2)}`) 
}