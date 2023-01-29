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
    name: 'Squellette_de_baleine',
    img: 'images/Squellette_de_baleine.png'
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
    name: 'Back',
    img: 'images/Back.png'
  },
  {
    name: 'Back_2',
    img: 'images/19.png'
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
    name: 'Squellette_de_baleine',
    img: 'images/Squellette_de_baleine.png'
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
const cardsChosen = []

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

  console.log('checkForMatch !')
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
  }
}

function flipCard () {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}
