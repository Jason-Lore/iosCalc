import React from "react";

let OtherSymbols = () => {
    const otherSymbols = ['AC','+/-','%']
    return(
        <section className="symbol">
            {otherSymbols.map((symbols, i) => (
                <p key={i} className="symbolitem">{symbols}</p>
            ))}
        </section>
    )
}

export default OtherSymbols