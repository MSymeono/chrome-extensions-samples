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
let pikachuCounter = 0;
let linkCounter = 0;
let waldoCounter = 0;
let clickCounters = 0;

button2.addEventListener('click', () => {
  pikachu.generatePikachu();
  pikachuCounter++;
  if (pikachuCounter === 1) {
    alert(
      `Congratulations, you've clicked Pikachu ${pikachuCounter} time! Total Click(s): ${clickCounters}`
    );
  } else {
    alert(
      `Congratulations, you've clicked Pikachu ${pikachuCounter} times! Total Click(s): ${clickCounters}`
    );
  }
});
button3.addEventListener('click', () => {
  link.generateLink();
  linkCounter++;
  if (linkCounter === 1) {
    alert(
      `Congratulations, you've clicked Link ${linkCounter} time! Total Click(s): ${clickCounters}`
    );
  } else {
    alert(
      `Congratulations, you've clicked Link ${linkCounter} times! Total Click(s): ${clickCounters}`
    );
  }
});
button.addEventListener('click', () => {
  waldo.generateWaldo();
  waldoCounter++;
  if (waldoCounter === 1) {
    alert(
      `Congratulations, you've clicked Waldo ${waldoCounter} time! Total Click(s): ${clickCounters}`
    );
  } else {
    alert(
      `Congratulations, you've clicked Waldo ${waldoCounter} times! Total Click(s): ${clickCounters}`
    );
  }
});
board.addEventListener('click', () => {
  clickCounters++;
});
waldo();
