import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardStack from './new_card/CardStack';

function Card() {
  const [wordCards, setWordCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/word');
        setWordCards(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {wordCards.length > 0 ? (<CardStack data={wordCards}/>) : (<p>No word cards found.</p>)}
    </div>
  );
}

export default Card;
