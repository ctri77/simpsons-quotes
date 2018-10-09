import React from 'react';

const DisplayQuote = ({quote}) => {
    return (
        <div>
            <p>{quote.character}</p>
            <img src={quote.image} alt={quote.character} />
            <p>{quote.quote}</p>
        
        </div>
    );
};

export default DisplayQuote;