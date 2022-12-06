function recuperacao() {

    var soma = 0
    var nota = Number(window.prompt('Digite a nota que você tirou na prova'))

    while (nota<7){

    var nota = Number(window.prompt(`Qual foi a nota da recuperação ?`))
        window.alert(`A nota de recuperação é ${nota}`)

    }

    if (nota <7) {
        window.alert(`${soma = soma + nota}`)
    }else if (nota>=7) {
        window.alert(`O estudante fez ${soma} provas de recuperação`)
    }else {
        window.alert(`Opção inválida`)
    }
}







