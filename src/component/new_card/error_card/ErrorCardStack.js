import React from 'react';
import './ErrorCardStack.css';
import ErrorCard from './ErrorCard';

function ErrorCardStack() {


    return (
        <div className='card-stack-body'>
            <button className='button'>🔼</button>
            <button className='button'>🔽</button>
            <div className='card-stack-container'>
                <div className='card' style={{
                    top: '40px',  // Yukarıdan kaydırma miktarı
                    left: '200px', // Soldan kaydırma miktarı
                }}>
                    <ErrorCard></ErrorCard>
                </div>
                
            </div>

        </div>
    );
}

export default ErrorCardStack;
