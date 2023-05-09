//retornando a hora
let horas = new Date()
document.write(horas.getHours());


//retornando os minutos
let minutes = new Date()
document.write(minutes.getMinutes());
document.write("<br></br>")


//retornando os segundos
let segundos = new Date()
document.write(segundos.getSeconds());
document.write("<br></br>")

//alterando data
let horas1 = new Date()
horas1.setHours(horas1.getHours()+3)
document.write(horas1.getHours());

//alterando minutos
let minutos1 = new Date()
minutos1.setMinutes(minutos1.getMinutes()+3);
document.write(minutos1.getMinutes());
document.write("<br></br>")

//usando o setTimeout

function BemVindo(){
  alert("ola seja bem vindo")
}    
setTimeout(BemVindo,1000)