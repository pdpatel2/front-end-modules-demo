let numTimesClicked = 0

const reset = () => {
  numTimesClicked = 0
}

const win = () => {
  alert('You win!!! WOW');
  reset();
}

const click = () => {
  numTimesClicked++
  if(numTimesClicked === 5) win();
}

// module.export = click
export default click

