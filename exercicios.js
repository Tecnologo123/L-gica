function verificar_altura() {
    var pes1 = (window.prompt('Solicitar pes1'))
    var pes2 = (window.prompt('Solicitar pes2'))
    var par1 = document.getElementById('numero')

    if (pes1 > pes2) {
        window.alert(`A primeira pessoa com a altura ${pes1} é mais alta que a segunda pessoa`)
    }else {
        window.alert(`A segunda pessoa com a altura ${pes2} é mais alta que a primeira pessoa`)
    }
}

function elevar_quadrado() {
    var num = Number(window.prompt('Insira um número inteiro'))
    var resto = num % 2

    if (resto==0) {
        window.alert(`O número é par`) 
    
        if ((num>10) && (num<30))  { 
            window.alert(`Esse número elevado ao quadrado é ${Math.pow(num,2)}`)
        }else {
             window.alert(`Porém como o número não está entre 10 e 30 fim do programa`)
        }
    } else {
        window.alert(`O número é impar`)
    }
}

function calcular() {
    var maca = Number(window.prompt('Quantas maçãs você comprou ?'))

    if (maca < 12) {
        (window.alert(`O total da compra é ${maca * 1.30} `))
    }else {
        window.alert(`O total da compra é ${maca * 1.00}`)
    }
}

function calcular2() {
    var ganhob1 = Number(window.prompt('Qual o ganho bruto do primeiro mês ?'))
    var ganhob2 = Number(window.prompt('Qual o ganho bruto do segundo mês ?'))
    var ganhob3 = Number(window.prompt('Qual o ganho bruto do terceiro mês ?'))
    var ganhob4 = Number(window.prompt('Qual o ganho bruto do quarto mês ?'))
    var ganhob5 = Number(window.prompt('Qual o ganho bruto do quinto mês ?'))
    var ganhob6 = Number(window.prompt('Qual o ganho bruto do sexto mês ?'))
    var gastosempr1 = Number(window.prompt('Qual os gastos da empresa no primeiro mês ?'))
    var gastosempr2 = Number(window.prompt('Qual os gastos da empresa no segundo mês ?'))
    var gastosempr3 = Number(window.prompt('Qual os gastos da empresa no terceiro mês ?'))
    var gastosempr4 = Number(window.prompt('Qual os gastos da empresa no quarto mês ?'))
    var gastosempr5 = Number(window.prompt('Qual os gastos da empresa no quinto mês ?'))
    var gastosempr6 = Number(window.prompt('Qual os gastos da empresa no sexto mês ?'))
    var ganhobs = ganhob1 + ganhob2 + ganhob3 +
                  ganhob4 + ganhob5 + ganhob6
    var gastosemestral = gastosempr1 + gastosempr2 + gastosempr3 +
                 gastosempr4 + gastosempr5 + gastosempr6

    window.alert(`O ganho bruto semestral é ${ganhobs}`)

    window.alert(`O gasto semestral é ${gastosemestral}`)

    window.alert(`O saldo financeiro é ${ganhobs - gastosemestral}`)
    
    if (ganhobs > gastosemestral) {
        window.alert(`A empresa teve um ganho bruto semestral de ${ganhobs}
                    reais ,ou, seja teve lucro.`)
    }else if (ganhobs < gastosemestral) {
        window.alert(`A empresa teve um gasto semestral de ${gastosemestral}
                    reais ,ou seja, teve prejuízo.`)           
    }else {
        window.alert(`A empresa não teve lucro nem prejuízo.`)
    }
}

function calcular3() {
    var horastrb = Number(window.prompt('Digite o número de horas trabalhadas em uma semana:'))
    var salhora = Number(window.prompt('Digite o sálario ganho por hora:'))
    
    if (horastrb <= 40) {
        window.alert(`Essa pessoa não fez hora extra, então o salário dela é de ${horastrb * salhora} reais`)
    }else if (horastrb > 40) {

    var horasextras = horastrb - 40
        window.alert(`A quantidade de horas extras é ${horasextras}`)

    var horas = salhora*1.5
        window.alert(`O valor que ele ganhou por hora extra é ${horas}`) 

    var ganhohorasextras = horasextras * horas 
        window.alert(`O valor total de horas extras que essa pessoa ganhou é ${ganhohorasextras} reais`)

    var hora = 40 * salhora
        window.alert(`O valor de 40 horas trabalhadas é ${hora}`)     

    var ganhototal = hora + ganhohorasextras
        window.alert(`O valor total que essa pessoa ganhou é ${ganhototal}`)
    }else {
        window.alert(`Opção inválida`)
    }
    
}

function calcular4() {
    var roupa = (window.prompt('Você pretende comprar uma roupa Masculina ou Feminina ?'))
    
    
    if (roupa == 'Masculina') {
        window.alert(`Você escolheu a roupa Masculina`)
    
         var opcao = Number(window.prompt('Escolha uma opção de roupa Masculina: \n [1]Calça \n [2]Suéter'))
    
        switch (opcao) {
            case 1:
                masculina = 'Calça'
                window.alert(`A opção que você escolheu é ${masculina} então o valor da ${masculina} é R$100,00 reais`) 
                break
            case 2 :
                masculina = 'Suéter' 
                window.alert(`A opção que você escolheu é ${masculina} então o valor do ${masculina} é R$90,00 reais`)
                break
            default :
                window.alert(`Opção inválida`)
                break
        }
    
      
    }else if (roupa == 'Feminina') {
        window.alert(`Você escolheu a roupa Feminina`)

        var opcao = Number(window.prompt('Escolha uma opção de roupa Feminina: \n [1]Vestido \n [2]Saia '))

        switch (opcao) {

            case 1 :
                feminina = 'Vestido'
                window.alert(`A opção que você escolheu é ${feminina} então o valor do ${feminina} é R$80,00 reais`)
                break
            case 2 :
                feminina = 'Saia'
                window.alert(`A opção que você escolheu é ${feminina} então o valor da ${feminina} é R$65,00 reais`)
                break
            default :
                window.alert(`Opção inválida`)
                break
        }
    }else {
        window.alert(`Opção inválida`)
    }
  
}

function somar() {
    var soma = 0;
    for (i=1; i<=10; i++){
         var numero = Number(window.prompt('Digite um número:'))
         soma = soma + numero
         console.log(soma)
   
    }
    window.alert(`A soma total é ${soma}`)
    
}

function calcular() {
    var soma = 0;
    for (i=1; i <=6; i++){
         var ganhobruto = Number(window.prompt(`Digite o ganho bruto do ${i} mês:`))
         soma = soma + ganhobruto
         console.log(soma)
    }
    window.alert(`O ganho bruto semestral é ${soma}`)

    var somagastos = 0;
    for (i=1; i<=6; i++){
         var gastosempresa = Number(window.prompt(`Digite os gastos da empresa do ${i} mês:`))
         somagastos = somagastos + gastosempresa
         console.log(soma)

    }
    window.alert(`O gasto semestral é ${somagastos}`)

    window.alert(`O saldo financeiro é ${soma - somagastos}`)

    if (soma > somagastos) {
        window.alert(`A empresa teve lucro.`)
    }else if (soma < somagastos) {
        window.alert(`A empresa teve prejuízo.`)
    }else {
        window.alert(`A empresa não teve lucro nem prejuízo.`)
    }
}

function somar2() {
    var soma = 0
    var num1 = Number(window.prompt('Digite o primeiro número'))
    var num2 = Number(window.prompt('Digite o segundo número')) 
    for (i=num1; i<=num2; i++){
        soma = soma + i
        console.log(soma)

    }
    window.alert(`A soma total é ${soma}`)
}

function calcular_idade() {
    var soma  = 0
    for (i=1; i<=12; i++){
        var idade = Number(window.prompt(`Digite a idade da ${i} pessoa:`))
        console.log(soma)

    if (idade >= 18) {
            window.alert(`${soma = soma + idade}`)
    }else {
            window.alert(`Opção inválida`)
    }
    window.alert(`O total de pessoas que tem 18 anos ou mais é ${soma}`)    
        
    }  
    
}

function executar() {
    var i = 1;

    while(i<5){
        console.log("While - "+i)
        i++;
    }

    do{
        console.log("D-While - "+i)
        i--;
    }while(i>0);

    console.log("Valor final - "+i)
}

// E - &&
// OU - ||
// <> - !=

