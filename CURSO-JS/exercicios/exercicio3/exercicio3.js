function contagem() {
    var inicio = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    var passo = document.getElementById('txt3')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 00 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{2794}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{2794}`
            }
        }
        res.innerHTML += `\u{01F3C1}`
    }


}