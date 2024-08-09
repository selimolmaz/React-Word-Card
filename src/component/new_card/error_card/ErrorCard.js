import React  from 'react';
import './ErrorCard.css';

function ErrorCardView() {
  
  return (
    <div className="Card-Body">
      <p className='symbol'>🙊</p>
      <p className='Eng-Word'>CARD NOT FOUND</p>
      <p className='Tr-Word'>KART BULUNAMADI</p>
    </div>
  );
}

export default ErrorCardView;
