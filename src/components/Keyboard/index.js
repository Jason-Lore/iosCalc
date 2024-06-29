import React from "react";

let Keyboard = ({ style, symbol, direction, incomingSymbol }) => {
    const handleClick = (inSym) => {
        incomingSymbol(inSym);
    };

    return (
        <div className={`flex ${direction}`}>
            {symbol.map((symbols, i) => (
                <div>
                    <div key={`${symbols}${i}`} className={`${style}`}>
                        <a className="item" key={`${symbols}${i}`} onClick={() => handleClick(symbols)}>{symbols}</a>
                    </div>
                </div>
            ))}
            <br />
        </div>
    )
}

export default Keyboard