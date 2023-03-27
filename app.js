const bonus = [
  {
    name: 'BONUS, vous avez trouvé toute les pairs',
    img: 'blue_images/Arbre_nelbi.png',
    bigImg: 'big_images/14.png',
    description: 'D\'où vient le prénom Nelbi ? C\'est à l\'origine le nom d\'un arbre sacré pour une tribu (les Peuls) au Mali. Il y a trois sortes de Nelbi : le Nelbi d\'eau, le Nelbi de terre et le Nelbi de nulle part 🤓'
  }
  ]
let cardArray = [
  {
    name: 'Esprit d\'equipe',
    img: 'blue_images/Esprit_d_equipe.png',
    bigImg: 'big_images/1.png',
    description: '\'Il y a plus d\'idées dans deux têtes que dans une\'\n\n~ Jaques Chirac'
  },
  {
    name: 'Perseverance',
    img: 'blue_images/Perseverance.png',
    bigImg: 'big_images/5.png',
    description: 'En persévérant on arrive à tout.'
  },
  {
    name: 'Plongée',
    img: 'blue_images/Plongee.png',
    bigImg: 'big_images/9.png',
    description: '📸 prise à Hawaii lors d\'un séjour plongée.\nTitulaire du PADI Open Water, pratique la plongée depuis plusieurs années. 🐳'
  },
  {
    name: 'Porte bijoux',
    img: 'blue_images/Porte_bijoux.png',
    bigImg: 'big_images/15.png',
    description: 'Porte-bijou en laiton conçu dans la tête, et fabriqué, à la main 🤌'
  },
  {
    name: 'Resolution de probleme',
    img: 'blue_images/Resolution_de_probleme.png',
    bigImg: 'big_images/2.png',
    description: 'Recherche de solutions innovantes et efficaces pour la résolution de problèmes.'
  },
  {
    name: 'Polyglotte',
    img: 'blue_images/polyglotte.png',
    bigImg: 'big_images/polyglotte.png',
    description: '\'Un esprit enfermé dans la langue est en prison.\'\n\n~ Simone Weil'
  },
  {
    name: 'Squelette de baleine',
    img: 'blue_images/Squelette_baleine.png',
    bigImg: 'big_images/10.png',
    description: '📸 prise lors du soclage d\'un squelette de baleine (actuellement exposé au Musée des Confluences, à Lyon)'
  },
  {
    name: 'Vélo',
    img: 'blue_images/Velo.png',
    bigImg: 'big_images/19.png',
    description: 'Le vélo, c\'est tout les jours, qu\'il vente ou qu\'il pleuve, court trajet, long trajet .\n🚴🏼‍♀️'
  },
  {
    name: 'Yoga',
    img: 'blue_images/Yoga.png',
    bigImg: 'big_images/8.png',
    description: 'Titulaire d\'un Teacher Training de 75H et pratique le yoga plusieurs fois par semaine 🧘‍♀️🤸‍♀️'
  },
  {
    name: 'Humour & 2nd degré',
    img: 'blue_images/Humour.png',
    bigImg: 'big_images/6.png',
    description: 'ERREUR 500'
  },
]

let listArray = [
    {
      name: 'Esprit d\'équipe',
      bigImg: 'big_images/1.png',
      description: '\'Il y a plus d\'idées dans deux têtes que dans une\'\n\n~ Jaques Chirac'
    },
    {
      name: 'Perseverance',
      bigImg: 'big_images/5.png',
      description: 'En persévérant on arrive à tout.'
    },
    {
      name: 'Plongée',
      bigImg: 'big_images/9.png',
      description: '📸 prise à Hawaii lors d\'un séjour plongée.\nTitulaire du PADI Open Water, pratique la plongée depuis plusieurs années. 🐳'
    },
    {
      name: 'Porte bijoux',
      bigImg: 'big_images/15.png',
      description: 'Porte-bijou en laiton conçu dans la tête, et fabriqué, à la main 🤌'
    },
    {
      name: 'Résolution de problème',
      bigImg: 'big_images/2.png',
      description: 'Recherche de solutions innovantes et efficaces pour la résolution de problèmes.'
    },
    {
      name: 'Sens de l\'optimisation',
      bigImg: 'big_images/3.png',
      description: 'Intérêt marqué dans la recherche de moyens pour rendre les processus plus efficaces et performants.'
    },
    {
      name: 'Squelette de baleine',
      bigImg: 'big_images/10.png',
      description: '📸 prise lors du soclage d\'un squelette de baleine (actuellement exposé au Musée des Confluences, à Lyon)'
    },
    {
      name: 'Velo',
      bigImg: 'big_images/19.png',
      description: 'Le vélo, c\'est tout les jours, qu\'il vente ou qu\'il pleuve, court trajet, long trajet .\n🚴🏼‍♀️'
    },
    {
      name: 'Yoga',
      bigImg: 'big_images/8.png',
      description: 'Titulaire d\'un Teacher Training de 75H et pratique le yoga plusieurs fois par semaine 🧘‍♀️🤸‍♀️'
    },
    {
      name: 'Humour & 2nd degré',
      bigImg: 'big_images/6.png',
      description: 'ERREUR 500'
    },
    {
      name: 'Louvre Abu Dhabi',
      bigImg: 'big_images/13.png',
      description: '📸 du musée du Louvre Abu Dhabi prise lors d\'un chantier de soclage pour l\'exposition \'Dragons et phéonix\''
    },
    {
      name: 'Montagne',
      bigImg: 'big_images/17.png',
      description: '📸 prise en randonnée dans les Pyrénées Oriantales.\nLa montagne, ça vous gagne 🤓'
    },
    {
      name: 'Soudure',
      bigImg: 'big_images/soudure.png',
      description: 'Soudure de précision au PUK pour la fabrication de petit soclage'
    },

    {
      name: 'Aventure & Voyages',
      bigImg: 'big_images/18.png',
      description: 'On aime l\'aventure et les voyages !\n📸prise à la vallée des temples en Sicile'
    },
    {
      name: 'Aïnu',
      bigImg: 'big_images/ainu.png',
      description: 'Article paru dans le magazine\'The Good Life magazine\', photo prise au Musée Carnavalet lors de l\’installation de la collection permanente.'
    },
    {
      name: 'AutoCAD',
      bigImg: 'big_images/16.png',
      description: 'Plan d\'un meuble à rideau coulissant dessiné sur le logiciel de CAO/DAO Autocad'
    },
    {
      name: 'Banjo',
      bigImg: 'big_images/12.png',
      description: 'Adore la musique (🎶électronique, rock, jazz,...🎶)'
    },
    {
      name: 'Dessin bureau Art Déco',
      bigImg: 'big_images/7.png',
      description: 'Apprentissage, pour les diplômes d\'ébenisterie, du dessin, peinture et perspective ainsi que l\'histoire de l\'art et des styles.\nDessin au feutre et aquarelle d\'un \'Bureau de dames\'\nstyle Art Déco.'
    },
    {
      name: 'Polyglotte',
      bigImg: 'big_images/polyglotte.png',
      description: '\'Un esprit enfermé dans la langue est en prison.\'\n\n~ Simone Weil'
    }
  ]

cardArray = [...cardArray, ...cardArray]

cardArray.sort(() => 0.5 - Math.random());

const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal-img');
const description = document.querySelector('#modal-description');
const closeBtn = document.querySelector('#close-btn');
const gridDisplay = document.querySelector('#memory-game');
const cardList = document.querySelector('.buttons');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

closeBtn.addEventListener('click', function () {
  modal.classList.remove('open');
});

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'blue_images/back.png');
    card.setAttribute('data-id', i);
    gridDisplay.appendChild(card);
    card.addEventListener('click', flipCard);
    {
      card.classList.toggle('is-flipped');
    };
  }
}

createBoard();

function checkForMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    alert('Vous avez cliqué sur la même carte !');
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    const card = cardArray[optionOneId];
    document.querySelector('#modal-title').textContent = card.name;
    document.querySelector('#modal-description').textContent = card.description;
    document.querySelector('#modal-img').src = card.bigImg;
    modalImg.src = card.bigImg;
    modal.classList.add('open');

    cards[optionOneId].setAttribute('src', 'blue_images/white.png');
    cards[optionTwoId].setAttribute('src', 'blue_images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'blue_images/back.png');
    cards[optionTwoId].setAttribute('src', 'blue_images/back.png');
  }
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    document.querySelector('#modal-title').textContent = bonus[0].name;
    document.querySelector('#modal-description').textContent = bonus[0].description;
    document.querySelector('#modal-img').src = bonus[0].bigImg;
    modalImg.src = bonus[0].bigImg;
    modal.classList.add('open');
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}

// Populate the card list with the "name:" values
listArray.forEach((card) => {
  const listItem = document.createElement('button');
  listItem.textContent = card.name;
  const buttons = cardList.appendChild(listItem);
  buttons.classList.add('button');

  // Add a click event listener to each list item to open the modal with the corresponding card
  listItem.addEventListener('click', () => {
    openModal(card.bigImg, card.name, card.description);
  });
});

// Function to open the modal with the specified card information
function openModal(imgSrc, title, description) {
  const modal = document.querySelector('#modal');
  const modalImg = document.querySelector('#modal-img');
  const modalTitle = document.querySelector('#modal-title');
  const modalDescription = document.querySelector('#modal-description');

  modalImg.src = imgSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  modal.classList.add('open');
}
