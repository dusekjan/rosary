import data from "../texts.json"
import {useState, useContext, useEffect, useRef} from "react";
import ModeContext from "../context/mode";
import DoneCounterContext from "../context/doneCounter";

function Prayer({prayer, mystery}) {
    const [done, setDone] = useState(false)
    const { length, autoScroll, LONG, SHORT, NOSCROLL } = useContext(ModeContext)
    const { counter, incrementCounter, decrementCounter } = useContext(DoneCounterContext)
    const prayerDiv = useRef();

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
        if (length === SHORT) { mystery = `\n\n...${mystery.slice(3, -3)}...` }
        text = data[key].hailMary1 + mystery + data[key].hailMary2
    } else if (mystery && (prayer === "mystery" || prayer === "mysteryFirst") ) {  // so "showSecrets" option
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

    const handleClickDone = (e) => {
        const newValue = !done
        newValue ? incrementCounter() : decrementCounter()
        setDone(newValue)

        const nextSibling = prayerDiv.current && prayerDiv.current.nextElementSibling
        if (!nextSibling || newValue === false || autoScroll === NOSCROLL || !CSS.supports("scroll-behavior", "smooth")){
            return
        }

        if (nextSibling.classList.contains("prayer")){
            nextSibling.scrollIntoView({ behavior: "smooth", block: autoScroll})
        } else if (nextSibling.classList.contains("decade")) {
            nextSibling.querySelector(".prayer").scrollIntoView({ behavior: "smooth", block: autoScroll})
        }
    }

    return (
        <div className={`prayer ${done ? "grey" : ""}`} ref={prayerDiv}>
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