// Ici vous pouvez écrire votre javascript

let compt = 0;

function changeColor() {
  const title = document.querySelector('h1');
  if (!title) {
    console.error('Title is not defined');
  }
  const randomHexaColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
  title.style.color = randomHexaColor;
}

function changeCardColor(card) {

  if (compt >= 2) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((c) => {
      c.style.contentVisibility = "hidden";
    });
    compt = 0;
  }
  compt += 1;
  card.style.contentVisibility = "visible";
}
