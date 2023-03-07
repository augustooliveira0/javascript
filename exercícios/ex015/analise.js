function clicou(){
    let meses= new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana= new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora= new Date
    let dia= agora.getDate()
    let sem= agora.getDay()
    let mes= agora.getMonth()
    let ano= agora.getFullYear()
    let horas= agora.getHours()
    let minutos= agora.getMinutes()
    let segundos= agora.getSeconds()
    let res= document.getElementById('resultado')
    res.innerHTML= `<p>Dia: <mark>${dia}</mark>`
    res.innerHTML+= `<p>Mês: <mark>${meses[mes]}</mark>`
    res.innerHTML+= `<p>Ano: <mark>${ano}</mark>`
    res.innerHTML+= `<p>Dia da semana: <mark>${semana[sem]}</mark>`
    res.innerHTML+= `<p>Horas: <mark>${horas}</mark>`
    res.innerHTML+= `<p>Minutos: <mark>${minutos}</mark>`
    res.innerHTML+= `<p>Segundos: <mark>${segundos}</mark>`
}