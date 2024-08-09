import React, { useState } from 'react';
import './card_view.css';

function CardView({ data }) {
  const [meaningOpacity, setMeaningOpacity] = useState(0);
  const [isKnown, setIsKnown] = useState(data.known);

  const showMeaning = () => {
    setMeaningOpacity(meaningOpacity === 0 ? 1 : 0);
  };

  const setKnownWord = async () => {
    const newKnownStatus = !isKnown;
    setIsKnown(newKnownStatus);

    try {
      console.log({ englishWord: data.englishWord, meaning: data.meaning, isKnown: newKnownStatus });

      const response = await fetch('http://localhost:8080/word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: data.id, englishWord: data.englishWord, meaning: data.meaning, known: newKnownStatus }),
      });

      if (response.ok) {
        console.log('Word status updated successfully, word:', data.englishWord);
      } else {
        console.error('Failed to update word status, word:', data.englishWord);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Card-Body">
      {isKnown ? (
        <p className='symbol' onClick={setKnownWord}>✔</p>
      ) : (
        <p className='symbol' onClick={setKnownWord}>🆕</p>
      )}
      <p className='Eng-Word' onClick={showMeaning}>{data.englishWord}</p>
      <p className='Tr-Word' style={{ opacity: meaningOpacity }}>{data.meaning}</p>
    </div>
  );
}

export default CardView;
