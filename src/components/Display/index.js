import React from 'react'

let Display = ({ displayNum }) => {
    return (
        <section>
            <div className="display">
                {displayNum}
            </div>
        </section>
    )
}

export default Display