import React, {useRef, useState} from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs"


function ToolsAdvanced({ onChangeMode, autoScroll, withIndexChecked }) {
    const contentDiv= useRef()
    const [opened, setOpened] = useState(false)

    function handleClick() {
        if (!contentDiv.current) return;

        if (contentDiv.current.style.maxHeight) {
            contentDiv.current.style.maxHeight = null;
            setOpened(false)
        } else {                                                    // IMPORTANT!
            const maxWidth = 132;                           // MANUALNE NASTAVIT VYSKU - DLE CSS
            contentDiv.current.style.maxHeight = maxWidth + "px";
            setOpened(true)
        }
    }

    function handleChange(e) {
        onChangeMode(e)
    }

    const icon = opened ? <BsArrowUp /> : <BsArrowDown />;
    return (
        <div className="advanced">
            <button onClick={handleClick}>{icon}&nbsp;ROZŠÍŘENÉ NASTAVENÍ&nbsp;{icon}</button>
            <div className="content" ref={contentDiv}>
                <div className="label select">
                    <span>AUT. PŘESUNOUT NA DALŠÍ MODLITBU</span>
                    <select value={autoScroll} onChange={handleChange} data-purpose="autoScroll">
                      <option value="noscroll">NEPŘESOUVAT</option>
                      <option value="start">NAHORU</option>
                      <option value="center">DOPROSTŘED</option>
                      <option value="end">DOLŮ</option>
                    </select>
                </div>
                <label>
                    <span>ČISLOVÁNÍ V DESÁTCÍCH</span>
                    <div className="switch">
                        <input type="checkbox"
                               className="checkbox"
                               onChange={handleChange}
                               checked={withIndexChecked}
                               data-purpose="withIndex" />
                        <div className="knobs"></div>
                        <div className="layer"></div>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default ToolsAdvanced;