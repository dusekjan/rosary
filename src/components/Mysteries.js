import React from 'react';
import Prayer from "./Prayer";

function Mysteries({mysteries}) {

    const renderedMysteries = mysteries.map((mystery, index) => {
        const prayer = index === 0 ? "mysteryFirst" : "mystery";

        mystery = `${index + 1}. ${mystery.slice(3, -3)}`
        return <Prayer key={index} prayer={prayer} mystery={mystery} />
    });

    return (
        <div className="mysteries">
            { renderedMysteries }
        </div>
    );
}

export default Mysteries;