import Prayer from "./Prayer";
import data from "../texts.json"

function Beginning() {

    return (
        <>
            <Prayer prayer="signOfTheCrossFirst" />
            <Prayer prayer="apostlesCreed" />
            <Prayer prayer="ourFather" />
            <Prayer prayer="hailMary" mystery={data.firstMysteries[0]} />
            <Prayer prayer="hailMary" mystery={data.firstMysteries[1]} />
            <Prayer prayer="hailMary" mystery={data.firstMysteries[2]} />
        </>
    );
}

export default Beginning;