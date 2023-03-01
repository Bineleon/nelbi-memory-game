const bonus = [
{
  name: 'arbre_nelbi',
  img: 'images/Arbre_nelbi.png',
  bigImg: 'big_images/14.png'
}
]
const cardArray = [

  {
    name: 'Esprit_d_equipe',
    img: 'images/Esprit_d_equipe.png'

  },
  {
    name: 'Perseverance',
    img: 'images/Perseverance.png'
  },
  {
    name: 'Plongee',
    img: 'images/Plongee.png',
    bigImg: 'images/big_plongée.jpg'
  },
  {
    name: 'Porte_bijoux',
    img: 'images/Porte_bijoux.png',
    bigImg: 'big_images/15.png'
  },
  {
    name: 'Resolution_de_probleme',
    img: 'images/Resolution_de_probleme.png'
  },
  {
    name: 'Sens_de_loptimisation',
    img: 'images/Sens_de_loptimisation.png'
  },
  {
    name: 'Squelette_de_baleine',
    img: 'images/Squelette_baleine.png',
    bigImg: 'big_images/10.png'
  },
  {
    name: 'Velo',
    img: 'images/Velo.png',
    bigImg: 'big_images/19.png'
  },
  {
    name: 'Yoga',
    img: 'images/Yoga.png',
    bigImg: 'big_images/8.png'
  },
  {
    name: 'Humour',
    img: 'images/Humour.png'
  },
  {
    name: 'Esprit_d_equipe',
    img: 'images/Esprit_d_equipe.png'

  },
  {
    name: 'Perseverance',
    img: 'images/Perseverance.png'
  },
  {
    name: 'Plongee',
    img: 'images/Plongee.png',
    bigImg: 'images/big_plongée.jpg'
  },
  {
    name: 'Porte_bijoux',
    img: 'images/Porte_bijoux.png',
    bigImg: 'big_images/15.png'
  },
  {
    name: 'Resolution_de_probleme',
    img: 'images/Resolution_de_probleme.png'
  },
  {
    name: 'Sens_de_loptimisation',
    img: 'images/Sens_de_loptimisation.png'
  },
  {
    name: 'Squelette_de_baleine',
    img: 'images/Squelette_baleine.png',
    bigImg: 'big_images/10.png'
  },
  {
    name: 'Velo',
    img: 'images/Velo.png',
    bigImg: 'big_images/19.png'
  },
  {
    name: 'Yoga',
    img: 'images/Yoga.png',
    bigImg: 'big_images/8.png'
  },
  {
    name: 'Humour',
    img: 'images/Humour.png'
  }
  // {
  //   name: 'LAD',
  //   img: 'images/LAD.png'
  // },
  // {
  //   name: 'Montagne',
  //   img: 'images/Montagne.png'
  // },
  // {
  //   name: 'Soudure',
  //   img: 'images/Soudure.png'
  // },

  // {
  //   name: 'Vallee_des_temples',
  //   img: 'images/Vallee_des_temples.png'
  // },
  // {
  //   name: 'Aïnu',
  //   img: 'images/ainu.png'
  // },
  // {
  //   name: 'AutoCAD',
  //   img: 'images/AutoCAD.png'
  // },
  // {
  //   name: 'Banjo',
  //   img: 'images/Banjo.png'
  // },
  // {
  //   name: 'dessin_bureau',
  //   img: 'images/dessin_bureau.png'
  // },
  // {
  //   name: 'Empathie',
  //   img: 'images/Empathie.png'
  // },

  // {
  //   name: 'LAD',
  //   img: 'images/LAD.png'
  // },
  // {
  //   name: 'Montagne',
  //   img: 'images/Montagne.png'
  // },
]

// {
//   name: 'Back',
//   img: 'images/Back.png'
// },
// {
//   name: 'Back_2',
//   img: 'images/19.png'
// }

cardArray.sort(() => 0.5 - Math.random())

const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal-img');
const description = document.querySelector('#description');
const closeBtn = document.querySelector('#close-btn');
const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

closeBtn.addEventListener('click', function() {
  modal.classList.remove('open');
});

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/Back.png')
    card.setAttribute('data-id', i)
    gridDisplay.appendChild(card)
    card.addEventListener('click', flipCard)
  }
}

createBoard()

function foundPair() {
  const cardId = this.getAttribute('data-id')
  alert(cardArray[cardId].bigImg)
}

function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

  console.log('checkForMatch !')
  if (optionOneId == optionTwoId) {
    alert('Vous avez cliqué sur la même carte !')
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    modalImg.src = cardArray[optionOneId].bigImg;
    modal.classList.add('open');

    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  }
  else {
    cards[optionOneId].setAttribute('src', 'images/back.png')
    cards[optionTwoId].setAttribute('src', 'images/back.png')
  }
  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length == cardArray.length / 2) {
    alert('Bravo ! Vous avez gagné !')
    modalImg.src = bonus[0].bigImg;
    modal.classList.add('open');
  }
}

function flipCard () {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 1500)
  }
}
