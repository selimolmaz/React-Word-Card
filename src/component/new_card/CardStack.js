import React, { useState } from 'react';
import './CardStack.css';
import CardView from './card_view/card_view';

function CardStack({ data }) {
  const [cards, setCards] = useState(data);

  const moveToBack = () => {
    const firstCard = cards[0];
    const newCards = [...cards.slice(1), firstCard];
    setCards(newCards);
  
    // Update transform property for the first card (being moved back)
    const firstCardElement = document.querySelector('.card:first-child');
    firstCardElement.style.transform = 'translateY(-10px)'; // Move up 20px
  };
  
  const moveToFront = () => {
    const lastCard = cards[cards.length - 1];
    const newCards = [lastCard, ...cards.slice(0, cards.length - 1)];
    setCards(newCards);
  
    // Update transform property for the last card (being moved front)
    const lastCardElement = document.querySelector('.card:last-child');
    lastCardElement.style.transform = 'translateY(10px)'; // Move down 20px
  };

  return (
    <div className='card-stack-body'> 
      <button className='button' onClick={moveToBack}>🔼</button>
      <button className='button' onClick={moveToFront}>🔽</button>
      <div className='card-stack-container'>
      
        {cards.map((cardData, index) => (
          <div key={cardData.id || index} className='card' style={{
              top: `${(index * 5) + 40}px`,  // Yukarıdan kaydırma miktarı
              left: `${(index * -10) + 200}px`, // Soldan kaydırma miktarı
            }}>
            <CardView data = {cardData} />
          </div>
        ))}
        
      </div>
      
    </div>
  );
}

export default CardStack;
