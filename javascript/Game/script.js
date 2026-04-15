let playerScore = 0
let computerScore = 0
let totalRun = 0
let isPlayerBatting = true
let balls = []

let toss = document.getElementById('toss')
let tossResult = Math.random() < 0.5 ? 'Heads' : 'Tails'
toss.innerText = `Toss Result: ${tossResult}`
let Choice = true
if ((toss = tossResult)) {
  alert('Player won the toss and choose to:')
}

function processInput() {
  let inputBox = document.getElementById('input')
  let inp = parseInt(inputBox.value)

  if (isNaN(inp)) return

  if (inp < 1 || inp > 6) {
    alert('Enter number between 1 and 6')
    inputBox.value = ''
    return
  }

  let bot = Math.floor(Math.random() * 6) + 1
  document.getElementById('botInput').innerText = bot
  if (isPlayerBatting) {
    if (bot === inp) {
      document.getElementById('umpire').innerText = 'OUT'

      playerScore = totalRun
      alert(`Player OUT! Score = ${playerScore}`)

      document.getElementById('runrequired').innerText = playerScore + 1
      isPlayerBatting = false
      totalRun = 0
      balls = []

      document.getElementById('totalRuns').innerText = 0
      document.getElementById('previousBalls').innerText = ''
    } else {
      document.getElementById('umpire').innerText = bot
      totalRun += inp
      document.getElementById('totalRuns').innerText = totalRun
    }
  } else {
    if (bot === inp) {
      document.getElementById('umpire').innerText = 'COMPUTER OUT'

      computerScore = totalRun

      if (computerScore > playerScore) {
        alert(`Computer Wins (${computerScore}/${playerScore})`)
      } else if (computerScore < playerScore) {
        alert(`Player Wins  (${playerScore}/${computerScore})`)
      } else {
        alert(`Match Draw (${playerScore}/${computerScore})`)
      }

      resetGame()
    } else {
      document.getElementById('umpire').innerText = bot

      totalRun += bot
      document.getElementById('totalRuns').innerText = totalRun

      let runsNeeded = playerScore + 1 - totalRun
      document.getElementById('runrequired').innerText =
        runsNeeded > 0 ? runsNeeded : 0

      if (totalRun > playerScore) {
        alert(`Computer Wins (Chased ${playerScore})`)
        resetGame()
        return
      }
    }
  }

  balls.push(inp)
  // if (balls.length > 6) balls.shift()

  document.getElementById('previousBalls').innerText = balls.join(' , ')
  setTimeout(() => {
    inputBox.value = ''
  }, 400)
}
function resetGame() {
  playerScore = 0
  computerScore = 0
  totalRun = 0
  isPlayerBatting = true
  balls = []

  document.getElementById('totalRuns').innerText = 0
  document.getElementById('previousBalls').innerText = ''
  document.getElementById('umpire').innerText = ''
  document.getElementById('botInput').innerText = ''
  document.getElementById('runrequired').innerText = ''
}
