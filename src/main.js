const board = document.querySelector('#board');
// const board2 = document.querySelector('#board2')
// const board3 = document.querySelector('#board3')
const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const waldo = new Waldo(board);
const pikachu = new Pikachu(board);
const link = new Link(board);
document.body.appendChild(button);
document.body.appendChild(button2);
document.body.appendChild(button3);
let counter = 0;
button2.addEventListener('click', () => {
  pikachu.generatePikachu();
  counter++;
  if (counter === 1) {
    alert(`Congratulations, you've clicked me ${counter} time!`);
  } else {
    alert(`Congratulations, you've clicked me ${counter} times!`);
  }
});
button3.addEventListener('click', () => {
  link.generateLink();
  counter++;
  if (counter === 1) {
    alert(`Congratulations, you've clicked me ${counter} time!`);
  } else {
    alert(`Congratulations, you've clicked me ${counter} times!`);
  }
});
button.addEventListener('click', () => {
  waldo.generateWaldo();
  counter++;
  if (counter === 1) {
    alert(`Congratulations, you've clicked me ${counter} time!`);
  } else {
    alert(`Congratulations, you've clicked me ${counter} times!`);
  }
});
waldo();
