const button = document.getElementById('button')

// const click = require('click')
import click from './game'

button.addEventListener('click', function(event) {
  click();
})
