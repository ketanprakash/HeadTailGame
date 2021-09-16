const startButton = document.querySelector('.start');
let win = 1;
let arr = [0, 0, 0];
const pointsTally = document.querySelector('.points');
const coins = document.querySelectorAll('.coin');
const result = document.querySelector('.result');
let points = 0;

startButton.addEventListener('click', (e) => {
  for (i = 0; i < 3; i++){
    const r = Math.floor(Math.random() * 2);
    arr[i] = r;
    if (r === 0) win = 0;
    coins[i].innerHTML = r ? 'H' : 'T';
  }
  result.innerHTML = win ? 'You Win!!' : 'You Lose!!';
  if (win === 1){
    points++;
  }
  pointsTally.innerHTML = `Points: ${points}`;
  win = 1;
})
