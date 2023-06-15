import Prayer from "./Prayer";

function Decade({mystery, fatima = true}) {
    const keys = Array.from(Array(10).keys())
    const renderedHailMarys = keys.map((key) => {
        return <Prayer key={key} prayer="hailMary" mystery={mystery} />
    })

    return (
        <div className="decade">
            <Prayer prayer="gloryBe" />
            { fatima && <Prayer prayer="fatimaPrayer" /> }
            <Prayer prayer="ourFather" />
            {renderedHailMarys}
        </div>
    );
}

export default Decade;