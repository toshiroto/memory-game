const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipcard() {
  this.classList.toggle('flip');
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();

  function checkForMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }
    unflipCards();
  }
  function disableCards() {
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip')
    }, 1500);
  }
}

cards.forEach(card => card.addEventListener('click', flipcard));
