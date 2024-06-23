import React from "react";

let Operations = () => {
    const operandSymbols = ['÷','x','-','+','=']
    return(
        <aside className="operations">
            {operandSymbols.map((symbols, i) => (
                <p key={i} className="operationSymbols">{symbols}</p>
            ))}
        </aside>
    )
}

export default Operations