import React, {useContext, useState} from 'react';
import ModeContext from "../context/mode";
import DoneCounterContext from "../context/doneCounter";

function Tools() {
    const {length, secrets, setAndSaveMode, LONG, SHORT, SECRETS, NOSECRETS} = useContext(ModeContext)
    const { counter, setCounter } = useContext(DoneCounterContext)

    const handleChange = (e) => {
        const checked = e.target.checked

        switch (e.target.dataset.purpose) {
            case "length":
                setAndSaveMode(!checked ? SHORT : LONG)
            break;
            case "showSecrets":
                setAndSaveMode(!checked ? SECRETS : NOSECRETS);
                (counter && !checked) && setCounter(0)
            break;
        }
    }

    const lengthCheckedShort = length !== SHORT
    const secretsChecked = secrets !== SECRETS
    const lengthDisabled = !secretsChecked

    return (
        <div className="tools">
            <label className={lengthDisabled ? "disabled" : ""}>
                <span>KRÁTKÁ VERZE</span>
                <div className={`switch${lengthDisabled ? " disabled" : ""}`}>
                    <input type="checkbox"
                           className="checkbox"
                           onChange={handleChange}
                           checked={lengthCheckedShort}
                           disabled={lengthDisabled}
                           data-purpose="length" />
                    <div className="knobs"></div>
                    <div className="layer"></div>
                </div>
            </label>
            <label className="switch">
                <span>POUZE TAJEMSTVÍ</span>
                <div className="switch">
                    <input type="checkbox"
                           className="checkbox"
                           onChange={handleChange}
                           checked={secretsChecked}
                           data-purpose="showSecrets" />
                    <div className="knobs"></div>
                    <div className="layer"></div>
                </div>
            </label>
        </div>
    );
}

export default Tools;