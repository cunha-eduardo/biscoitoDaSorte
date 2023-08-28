//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const opnCookie = document.querySelector("#opnCookie")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)

//Eventos
opnCookie.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)


function handleClick() {
  if(randomNumber == 1) {

  } else if(randomNumber == 9){
    document.querySelector(".screen2 h2").innerText = "A vida trará coisas boas se tiver paciência."
  } else if(randomNumber== 2) {
    document.querySelector(".screen2 h2").innerText = "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."
  } else if(randomNumber== 3) {
    document.querySelector(".screen2 h2").innerText = "Não compense na ira o que lhe falta na razão."
  } else if(randomNumber== 4) {
    document.querySelector(".screen2 h2").innerText = "Defeitos e virtudes são apenas dois lados da mesma moeda."
  } else if(randomNumber== 5) {
    document.querySelector(".screen2 h2").innerText = "A maior de todas as torres começa no solo."
  } else if(randomNumber== 6) {
    document.querySelector(".screen2 h2").innerText = "Não há que ser forte. Há que ser flexível."
  } else if(randomNumber== 7) {
    document.querySelector(".screen2 h2").innerText = "Siga os bons e aprenda com eles."
  } else if(randomNumber== 8){
    document.querySelector(".screen2 h2").innerText = "Não importa o tamanho da montanha, ela não pode tapar o sol."
  } else {
    document.querySelector(".screen2 h2").innerText = "Quem quer colher rosas tem de estar preparado para suportar os espinhos."
  }
  toggleScreen()
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)

}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function pressEnter(e) {
  if(e.key == 'Enter') {
    handleResetClick()
  }
}