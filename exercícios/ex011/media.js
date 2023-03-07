function media(){
    let nome= prompt('Qual é o nome do aluno?')
    let n1= Number(prompt(`Qual a primeira nota de ${nome}?`))
    let n2= Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let media= (n1+n2)/2

    let msg
    if(media >= 6){
        msg= 'Meus parabéns!'
    }
    else{
        msg= 'Estude mais um pouco!'
    }

    let res= document.getElementById('resultado')
    res.innerHTML= `<p>Calculando a média final de <mark>${nome}</mark>.`
    res.innerHTML+= `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.`
    res.innerHTML+= `<p>A média final será <mark>${media}</mark>.`
    res.innerHTML+= `<p>A mesagem que temos é: <strong>${msg}</strong>`
}