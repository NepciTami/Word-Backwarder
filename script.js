let element = document.querySelector('p')
let letters = []
let input = document.querySelector('textarea').value
let start
let count = 0

function checkInp() {
  input = document.querySelector('textarea').value
}
setInterval(checkInp, 1000)

function go(event) {
  letters = input.split('')
  let i = letters.length
//  letters.push(input.substring(letters.length))
  console.log(letters)
  let output = ''
  while(i >=0) {
    letter = letters[i]
    output = output + letter
    i--
  }

    element.innerHTML = output
//  console.log(element.innerHTML)
/*  if (count === 0) {
    count++
    start = input
  }
  if (count === 1) {
    count--
  }  */
}