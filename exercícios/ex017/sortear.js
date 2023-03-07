let res= document.getElementById('resultado')

function gerar(){
    let num= Math.random() * (100 - 1) + 1
    num= Math.round(num)
    res.innerHTML+= `<p>Acabei de pensar no número <mark>${num}</mark>`
}
function limpar(){
    res.innerHTML= '<p>'
}