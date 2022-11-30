function recuperacao() {

    var soma = 0
    var nota = Number(window.prompt('Digite a nota que você tirou na prova'))

    while (nota<7){

    var nota = Number(window.prompt(`Qual foi a nota da recuperação ?`))
        window.alert(`A nota de recuperação é ${nota}`)

    }

    if (nota < 18) {
        window.alert(`${soma = soma + 1}`)
    }else if (idade>=7) {
        window.alert(`O estudante não precisou fazer prova de recuperação`)
    }else {
        window.alert(`Opção inválida`)
    }
}
window.alert(`O ${soma}`)






