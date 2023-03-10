
function carregar(){
    const msg= document.getElementById('msg')
    const img= document.getElementById('imagem')
    let data= new Date()
    let hora= data.getHours()
    console.log(img);
    console.log(hora);
    msg.innerHTML= `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src= 'imagens/manha.jpg'
        document.body.style.backgroundColor= '#CBB790'
    }else if(hora >= 12 && hora <18){
        document.body.style.backgroundColor= '#FE8447'
        img.src= 'imagens/tarde.jpg'
    }else{
        document.body.style.backgroundColor= '#35184C'
        img.src= 'imagens/noite.jpg'
        }
}