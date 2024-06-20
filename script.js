const form = document.querySelector('form')
const inputWeight = document.querySelector('#wheight')
const inputHeight = document.querySelector('#height')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalTitle = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')


form.onsubmit = (event) => {
  event.preventDefault()

  const wheight = Number(inputWeight.value)
  const height = Number(inputHeight.value)
  
  const result = printIMC(wheight, height)
  const message= `seu imc é igual a ${result}`
  modalTitle.innerText = message
  modalWrapper.classList.add('open')
}

modalBtnClose.onclick = () =>  {
  modalWrapper.classList.remove('open')
}

function printIMC(wheight, height){
  return (wheight / (height ** 2)).toFixed(2)
}
