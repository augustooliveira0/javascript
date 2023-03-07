function clicou(){
    let agora= new Date
    let res= document.getElementById('resultado')
    res.innerHTML= `<p>O que eu recebi do sistema foi <mark>${agora}</mark>`
}