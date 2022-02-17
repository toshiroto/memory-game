const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipcard() {
  this.classList.toggle('flip');
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  }
}

cards.forEach(card => card.addEventListener('click', flipcard));
