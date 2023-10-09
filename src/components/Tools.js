import React, {useContext} from 'react';
import ModeContext from "../context/mode";
import DoneCounterContext from "../context/doneCounter";
import ToolsAdvanced from "./ToolsAdvanced";

function Tools() {
    const {
        length,
        secrets,
        nightMode,
        autoScroll,
        setAndSaveMode,
        LONG,
        SHORT,
        SECRETS,
        NOSECRETS,
        NIGHTMODE,
        NONIGHTMODE} = useContext(ModeContext)
    const { counter, setCounter } = useContext(DoneCounterContext)

    const handleChangeMode = (e) => {
        const checked = e.target.checked

        switch (e.target.dataset.purpose) {
            case "length":
                setAndSaveMode(!checked ? SHORT : LONG)
            break;
            case "showSecrets":
                setAndSaveMode(!checked ? SECRETS : NOSECRETS);
                (counter && !checked) && setCounter(0)
            break;
            case "nightmode":
                setAndSaveMode(!checked ? NIGHTMODE : NONIGHTMODE);
            break;
            case "autoScroll":
                setAndSaveMode(e.target.value);
            break;
        }
    }

    const lengthCheckedShort = length !== SHORT
    const secretsChecked = secrets !== SECRETS
    const lengthDisabled = !secretsChecked

    return (
        <>
            <div className="tools">
                <label className={lengthDisabled ? "disabled" : ""}>
                    <span>KRÁTKÁ VERZE</span>
                    <div className={`switch${lengthDisabled ? " disabled" : ""}`}>
                        <input type="checkbox"
                               className="checkbox"
                               onChange={handleChangeMode}
                               checked={lengthCheckedShort}
                               disabled={lengthDisabled}
                               data-purpose="length" />
                        <div className="knobs"></div>
                        <div className="layer"></div>
                    </div>
                </label>
                <label>
                    <span>POUZE TAJEMSTVÍ</span>
                    <div className="switch">
                        <input type="checkbox"
                               className="checkbox"
                               onChange={handleChangeMode}
                               checked={secretsChecked}
                               data-purpose="showSecrets" />
                        <div className="knobs"></div>
                        <div className="layer"></div>
                    </div>
                </label>
                <label>
                    <span>TMAVÝ REŽIM</span>
                    <div className="switch">
                        <input type="checkbox"
                               className="checkbox"
                               onChange={handleChangeMode}
                               checked={nightMode === NONIGHTMODE}
                               data-purpose="nightmode" />
                        <div className="knobs"></div>
                        <div className="layer"></div>
                    </div>
                </label>
            </div>
            <ToolsAdvanced onChangeMode={handleChangeMode} autoScroll={autoScroll} />
        </>
    );
}

export default Tools;