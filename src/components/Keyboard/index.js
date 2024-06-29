import React from "react";

let Keyboard = ({ style, symbol, direction, incomingSymbol }) => {
    const handleClick = (inSym) => {
        incomingSymbol(inSym);
    };

    return (
        <div className={`flex ${direction}`}>
            {symbol.map((symbols, i) => (
                <div onClick={() => handleClick(symbols)}>
                    <div key={`${symbols}${i}`} className={`${style} border ${symbols === 0 ? 'zero' : ''}`}>
                        <a className="item" key={`${symbols}${i}`}>{symbols}</a>
                    </div>
                </div>
            ))}
            <br />
        </div>
    )
}

export default Keyboard