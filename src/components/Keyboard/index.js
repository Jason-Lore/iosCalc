import React from "react";

import '../../styles/index.css'; // Import global CSS

const symbols = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']

let Keyboard = () => {
    return (
        <section className="numbers">
                {symbols.map((symbol, i) =>(
                    <p className="item" key={i}>{symbol}</p>
                ))}
        </section>
    )
}

export default Keyboard