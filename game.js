let numTimesClicked = 0

const reset = () => {
  numTimesClicked = 0
}

const win = () => {
  alert('You win!!! YAA');
  reset();
}

const click = () => {
  numTimesClicked++
  if(numTimesClicked === 5) win();
}
