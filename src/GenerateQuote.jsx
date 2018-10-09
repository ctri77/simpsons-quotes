import React from 'react';

const GenerateQuote = ({selectQuote}) => {
    return (
        <div>
            <button onClick={selectQuote}>Get quote</button>
        </div>
    );
};

export default GenerateQuote;