import React from 'react';

function GenerateQuote ({selectQuote}) {
    return (
        <div>
            <button onClick={selectQuote}>Get quote</button>
        </div>
    );
};

export default GenerateQuote;