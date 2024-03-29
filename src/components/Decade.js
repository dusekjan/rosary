import { useContext } from "react";
import Prayer from "./Prayer";
import ModeContext from "../context/mode";

function Decade({mystery, fatima = true}) {
    const { withIndex, NOINDEX } = useContext(ModeContext)
    const keys = Array.from(Array(10).keys())
    const renderedHailMarys = keys.map((key) => {
        return <Prayer key={key} prayer="hailMary" mystery={mystery} />
    })

    return (
        <div className={withIndex === NOINDEX ? "decade" : "decade indexes"}>
            <Prayer prayer="gloryBe" />
            { fatima && <Prayer prayer="fatimaPrayer" /> }
            <Prayer prayer="ourFather" />
            {renderedHailMarys}
        </div>
    );
}

export default Decade;