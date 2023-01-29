const cardArray = [
  {
    name: 'arbre_nelbi',
    img: 'images/Arbre_nelbi.png'
  },
  {
    name: 'AutoCAD',
    img: 'images/AutoCAD.png'
  },
  {
    name: 'Banjo',
    img: 'images/Banjo.png'
  },
  {
    name: 'dessin_bureau',
    img: 'images/dessin_bureau.png'
  },
  {
    name: 'Empathie',
    img: 'images/Empathie.png'
  },
  {
    name: 'Esprit_d_equipe',
    img: 'images/Esprit_d_equipe.png'
  },
  {
    name: 'LAD',
    img: 'images/LAD.png'
  },
  {
    name: 'Montagne',
    img: 'images/Montagne.png'
  },
  {
    name: 'Perseverance',
    img: 'images/Perseverance.png'
  },
  {
    name: 'Plongee',
    img: 'images/Plongee.png'
  },
  {
    name: 'Porte_bijoux',
    img: 'images/Porte_bijoux.png'
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
    name: 'Soudure',
    img: 'images/Soudure.png'
  },
  {
    name: 'Squelette_de_baleine',
    img: 'images/Squelette_baleine.png'
  },
  {
    name: 'Vallee_des_temples',
    img: 'images/Vallee_des_temples.png'
  },
  {
    name: 'Velo',
    img: 'images/Velo.png'
  },
  {
    name: 'Yoga',
    img: 'images/Yoga.png'
  },
  {
    name: 'Humour',
    img: 'images/Humour.png'
  },
  {
    name: 'Aïnu',
    img: 'images/ainu.png'
  },
  {
    name: 'arbre_nelbi',
    img: 'images/Arbre_nelbi.png'
  },
  {
    name: 'AutoCAD',
    img: 'images/AutoCAD.png'
  },
  {
    name: 'Banjo',
    img: 'images/Banjo.png'
  },
  {
    name: 'dessin_bureau',
    img: 'images/dessin_bureau.png'
  },
  {
    name: 'Empathie',
    img: 'images/Empathie.png'
  },
  {
    name: 'Esprit_d_equipe',
    img: 'images/Esprit_d_equipe.png'
  },
  {
    name: 'LAD',
    img: 'images/LAD.png'
  },
  {
    name: 'Montagne',
    img: 'images/Montagne.png'
  },
  {
    name: 'Perseverance',
    img: 'images/Perseverance.png'
  },
  {
    name: 'Plongee',
    img: 'images/Plongee.png'
  },
  {
    name: 'Porte_bijoux',
    img: 'images/Porte_bijoux.png'
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
    name: 'Soudure',
    img: 'images/Soudure.png'
  },
  {
    name: 'Squelette_baleine',
    img: 'images/Squelette_baleine.png'
  },
  {
    name: 'Vallee_des_temples',
    img: 'images/Vallee_des_temples.png'
  },
  {
    name: 'Velo',
    img: 'images/Velo.png'
  },
  {
    name: 'Yoga',
    img: 'images/Yoga.png'
  },
  {
    name: 'Humour',
    img: 'images/Humour.png'
  },
  {
    name: 'Aïnu',
    img: 'images/ainu.png'
  }
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

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

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

function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

  console.log('checkForMatch !')
  if (optionOneId == optionTwoId) {
    alert('Vous avez cliqué sur la même carte !')
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert('Vous avez trouvé une paire !')
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
