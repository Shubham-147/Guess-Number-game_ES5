let min = 50,
    max = 100,
    winningNum = Math.floor(Math.random() * (max-min+1) +min ),
    guessesLeft = 3
    
const game = document.querySelector('.game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('.guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')

     
minNum.textContent = min
maxNum.textContent = max

guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value)
  if(isNaN(guess) || guess < min || guess > max ) {
    setMessage(`Please Enter a Number bwteen ${min} and ${max} `,'red')
  }

  if(guess === winningNum) {
    gameover(true,`${winningNum} is correct `,'green')
  }
  else {
    guessesLeft -= 1
    if(guessesLeft === 0 ){
      setMessage(`Game Over, You Lost !! The Correct Number was  ${winningNum}  `,'red')
      gameover(false,`Game Over, You Lost !! The Correct Number was  ${winningNum}  `,'red')
    }
    else {
      guessInput.value = ''
      setMessage(`${guess} is Not Correct !! No of Guesses Left  ${guessesLeft}  `,'red')
    }
  }
})

game.addEventListener('mousedown',function (event) {
  if(event.target.className === 'play-again') {
    window.location.reload();
  } 
})

function gameover(won, message) {
  guessInput.disabled = true
  let color = won ? 'green':'red'
  setMessage(message,color)
  guessBtn.value = 'Play Again'
  guessBtn.className = 'play-again'
}

function setMessage(msg, color) {
  message.textContent = msg
  message.style.color = color
  guessInput.style.borderColor =color ;
}