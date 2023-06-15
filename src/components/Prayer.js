import data from "../texts.json"
import {useState, useContext, useEffect} from "react";
import ModeContext from "../context/mode";
import DoneCounterContext from "../context/doneCounter";

function Prayer({prayer, mystery}) {
    const [done, setDone] = useState(false)
    const { length, LONG, SHORT } = useContext(ModeContext)
    const { counter, incrementCounter, decrementCounter } = useContext(DoneCounterContext)

    console.log(counter, done)

    useEffect(() => {
        if (counter === 0 && done !== false) {
            setDone(false)
        }
    }, [counter, done, setDone])

    let key;
    if (length === LONG) {
        key = "prayers"
    } else if (length === SHORT) {
        key = "prayersShort"
    }

    let text;
    if (mystery && prayer === "hailMary") { // so hailMary
        if (length === SHORT) { mystery = `\n...${mystery.slice(3, -3)}...` }
        text = data[key].hailMary1 + mystery + data[key].hailMary2
    } else if (mystery && (prayer === "mystery" || "mysteryFirst") ) {  // so "showSecrets" option
        text = mystery
    } else {
        text = data[key][prayer]
    }

    let shape;
    switch (prayer) {
        case "signOfTheCrossFirst":
        case "mysteryFirst":
            shape = "cross"
        break;
        case "ourFather":
            shape = "bigCircle"
        break;
        case "gloryBe":
        case "fatimaPrayer":
        case "apostlesCreed":
        case "signOfTheCrossSecond":
        case "hailHolyQueen":
        case "rosaryPrayer":
        case "mystery": // only mystery, technically not prayer
            shape = ""
        break;
        default:
            shape = "circle"
    }

    const handleClickDone = () => {
        const newValue = !done

        if (newValue) {
            incrementCounter()
        } else {
            decrementCounter()
        }
        setDone(newValue)
    }

    return (
        <div className={`prayer ${done ? "grey" : ""}`}>
            <div className="left">
                <span className={shape}></span>
            </div>
            <div
                className="right"
                onClick={handleClickDone}>
                <p className={prayer + " " + length}>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default Prayer;