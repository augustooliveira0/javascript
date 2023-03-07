function clicou(){
    let anonasceu= Number(prompt('Qual ano você nasceu?'))
    let agora= new Date
    let ano= Number(agora.getFullYear())
    let res= document.getElementById('resultado')

    if(anonasceu <= ano){
        res.innerHTML= `<p>Quem nasceu em ${anonasceu} vai completar <strong>${ano-anonasceu}</strong> anos em ${ano}.`
    }
    else{
        res.innerHTML= `Digite um ano de nascimento menor que <strong>${ano}</strong>.`
    }
}