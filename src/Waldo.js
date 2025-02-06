class Waldo {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'waldo');
    this.node.setAttribute('src', 'assets/Waldo.png');
    this.node.style.mixBlendMode = 'multiply';
    this.node.style.filter = 'contrast(120%) brightness(110%) sharpen(1px)';
    const button = document.getElementById('button');
    button.appendChild(this.node);
    el.appendChild(this.node);
    this.generateWaldo();
  }
  generateWaldo() {
    let waldoLeft = Math.floor(Math.random() * 700);
    let waldoTop = Math.floor(Math.random() * 700);
    this.node.style.left = `${waldoLeft}px`;
    this.node.style.top = `${waldoTop}px`;
    button.style.left = `${waldoLeft + 9}px`;
    button.style.top = `${waldoTop + 9}px`;
  }
}
class Pikachu {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'pikachu');
    this.node.setAttribute('src', 'assets/Pikachu.png');
    this.node.style.mixBlendMode = 'multiply';
    this.node.style.filter = 'contrast(120%) brightness(110%) sharpen(1px)';
    const button2 = document.getElementById('button2');
    button2.appendChild(this.node);
    el.appendChild(this.node);
    this.generatePikachu();
  }
  generatePikachu() {
    let pikaLeft = Math.floor(Math.random() * 700);
    let pikaTop = Math.floor(Math.random() * 700);
    this.node.style.left = `${pikaLeft}px`;
    this.node.style.top = `${pikaTop}px`;
    button2.style.left = `${pikaLeft + 9}px`;
    button2.style.top = `${pikaTop + 9}px`;
  }
}
class Link {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'link');
    this.node.setAttribute('src', 'assets/Link.png');
    this.node.style.mixBlendMode = 'multiply';
    this.node.style.filter = 'contrast(120%) brightness(110%) sharpen(1px)';
    const button3 = document.getElementById('button3');
    button3.appendChild(this.node);
    el.appendChild(this.node);
    this.generateLink();
  }
  generateLink() {
    let linkLeft = Math.floor(Math.random() * 700);
    let linkTop = Math.floor(Math.random() * 700);
    this.node.style.left = `${linkLeft}px`;
    this.node.style.top = `${linkTop}px`;
    button3.style.left = `${linkLeft + 9}px`;
    button3.style.top = `${linkTop + 9}px`;
  }
}
