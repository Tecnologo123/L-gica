function recuperacao() {

    var qtdeRecuperacoes = 0
    var nota = Number(window.prompt('Digite a nota que você tirou na prova'))

    while (nota<7){

        var nota = Number(window.prompt(`Qual foi a nota da recuperação ?`))
        window.alert(`A nota de recuperação é ${nota}`)
        qtdeRecuperacoes++
    }

    window.alert(`O estudante fez ${qtdeRecuperacoes} provas de recuperação`)
    
}

function opcoes() {

    var num1 = Number(window.prompt('Digite o primeiro número'))
    var num2 = Number(window.prompt('Digite o segundo número'))
    somaDosNumeros = (num1 + num2)

    do{

        var somaDigitada = Number(window.prompt('Qual a soma dos dois números ?'))

        if (somaDosNumeros != somaDigitada) {
            window.alert(`Tente novamente`)
        }
    }while (somaDosNumeros != somaDigitada)

    
    window.alert(`Resultado correto`)
    
}


function voto() {
do{
    
         var qtdeVotosDaniel = 0
         var qtdeVotosJean = 0
         var qtdeVotosemBranco = 0
         var qtdeVotosNulo = 0  
         var opcao = Number(window.prompt('Escolha uma opção de Candidatos : \n [15]Daniel \n [75]Jean \n [0]Voto em branco \n [Outras coisas]Voto nulo'))
    
        switch (opcao) {
            case 15:
                candidato = 'Daniel'
                window.alert(`Você vai votar no candidato Daniel`)
                qtdeVotosDaniel++
                break
            case 75 :
                candidato2 = 'Jean' 
                window.alert(`Você vai votar no candidato Jean`)
                qtdeVotosJean++
                break
            case 0:
                candidato3 = 'Voto em branco'
                window.alert(`Você escolheu a opção Voto em branco`)
                qtdeVotosemBranco++
                break
            default :
                window.alert(`Voto nulo`)
                qtdeVotosNulo++ 
                break

        } 

   var pessoa = Number(window.prompt('Tem mais alguma pessoa para votar ?'))


    }while (pessoa == 'Sim')

    
    window.alert(`A quantidade de votos de Daniel é ${qtdeVotosDaniel}`)

    window.alert(`A quantidade de votos de Jean é ${qtdeVotosJean}`)

    window.alert(`A quantidade de votos em branco é ${qtdeVotosemBranco}`)

    window.alert(`A quantidade de votos nulos é ${qtdeVotosNulo}`)

}







