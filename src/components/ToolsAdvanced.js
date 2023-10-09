import {useRef, useState} from "react";


function ToolsAdvanced({ onChangeMode, autoScroll }) {
    const contentDiv= useRef()
    const [opened, setOpened] = useState(false)

    function handleClick() {
        if (!contentDiv.current) return;

        if (contentDiv.current.style.maxHeight) {
            contentDiv.current.style.maxHeight = null;
            setOpened(false)
        } else {                                                            // IMPORTANT!
            const maxWidth = 84;                                    // MANUALNE NASTAVIT VYSKU
            contentDiv.current.style.maxHeight = maxWidth + "px";
            setOpened(true)
        }
    }

    function handleSelect(e) {
        onChangeMode(e)
    }

    const icon = opened ? "\uD83E\uDC15" : "\uD83E\uDC17";
    return (
        <div className="advanced">
            <button onClick={handleClick}>{icon}&nbsp;ROZŠÍŘENÉ NASTAVENÍ&nbsp;{icon}</button>
            <div className="content" ref={contentDiv}>
                <div className="label select">
                    <span>AUT. PŘESUNOUT NA DALŠÍ MODLITBU</span>
                    <select value={autoScroll} onChange={handleSelect} data-purpose="autoScroll">
                      <option value="noscroll">NEPŘESOUVAT</option>
                      <option value="start">NAHORU</option>
                      <option value="center">DOPROSTŘED</option>
                      <option value="end">DOLŮ</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ToolsAdvanced;