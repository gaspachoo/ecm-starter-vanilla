function changeColor() {
  const title = document.querySelector('h1');
  if (!title) {
    console.error('Title is not defined');
  }
  const randomHexaColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
  title.style.color = randomHexaColor;
}

let visibleCards = [];

function changeCardState(card) {
  const compt = visibleCards.length;
  if (compt == 2) {
    let cardA = visibleCards[0];
    let cardB = visibleCards[1]
    if (cardA.innerHTML == cardB.innerHTML) {
      console.log("This is a pair !!");
      cardA.style.visibility = 'hidden';
      cardB.style.visibility = 'hidden';
    }
  }

  if (compt >= 2) {
    visibleCards.forEach((c) => {
      c.style.contentVisibility = "hidden";
    });
    visibleCards = [];
  }
  visibleCards.push(card);
  card.style.contentVisibility = "visible";
}
