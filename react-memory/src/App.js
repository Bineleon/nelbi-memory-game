import React, {useState, useEffect} from 'react'
import Card from './components/Card';

let cards = [
  'https://fakeimg.pl/300/ff0000',
  'https://fakeimg.pl/300/00ff00',
  'https://fakeimg.pl/300/0000ff',
  'https://fakeimg.pl/300/fff00f',
  'https://fakeimg.pl/300/000ff0',
  'https://fakeimg.pl/300/0ffff0',
]

cards = [...cards, ...cards]
cards = cards.sort(() => 0.5 - Math.random())

function App() {
  let [chosenCards, setChosenCards] = useState([])
  const [cardsWon, setCardsWon] = useState([])
  useEffect(() => {
    console.log(chosenCards,cardsWon )
    if (chosenCards.length === 2) {
      if (chosenCards[0] === chosenCards[1]) {
        setCardsWon([chosenCards[0]])
      }
    }
    // if (!back) {
    //   setTimeout(() => {
    //     setBack(true)
    //     props.toggleChosenCard(props.img)
    //   }, 1000);
    // }

  }, [chosenCards, setCardsWon, cardsWon])

  return (
    <div className="App">
      {cards.map(img =>
        <Card
          img={img}
          toggleChosenCard={(card) => {
            setChosenCards(prevChosenCards => {
              if (prevChosenCards.includes(card)) {
                return prevChosenCards.filter(chosenCard => chosenCard !== card)
              }else{
                return [...prevChosenCards, card]
              }
            })
          }}
          cardWon={(cardsWon.includes(img))}
        />
      )}
    </div>
  );
}

export default App;
