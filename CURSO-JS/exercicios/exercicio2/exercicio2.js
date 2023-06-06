function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if (fano.value.length == 0 || Number(fano.value) > ano){
            window.alert(`ERRO 404 verifique os dados e tente novamente`)
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'Homem'  
                if (idade >=0 && idade < 10){
                    //bebe
                    img.setAttribute('src', 'bebemasculino.jpg')
                } else if (idade < 29) {
                    //Jovem
                    img.setAttribute('src', 'jovemmasculino.jpg')
                } else if (idade < 50){
                    //Adulto
                    img.setAttribute('src', 'adultomasculino.jpg')
                } else if (idade < 120) {
                    //Idoso
                    img.setAttribute('src', 'idosomasculino.jpg')
                } else {
                    //Só o esqueleto
                    img.setAttribute('src', 'esqueleto.jpg')
                }
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >=0 && idade < 10){
                    //bebe
                    img.setAttribute('src', 'bebefeminina.jpg')
                } else if (idade < 29) {
                    //Jovem
                    img.setAttribute('src', 'jovemfeminina.jpg')
                } else if (idade < 50){
                    //Adulto
                    img.setAttribute('src', 'adultofeminina.jpg')
                } else if (idade < 120) {
                    //Idoso
                    img.setAttribute('src', 'idosafeminina.jpg')
                } else {
                    //Só o esqueleto
                    img.setAttribute('src', 'esqueleto.jpg')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
            res.appendChild(img)
        }
}

