import React, {useContext} from 'react';
import { BsInfoSquare } from "react-icons/bs"
import DoneCounterContext from "../context/doneCounter";

function Info() {
    const { counter, setCounter } = useContext(DoneCounterContext)

    const handleClick = (e) => {
        Array.from(document.querySelectorAll(".prayer.grey")).forEach((prayer) => {
            prayer.classList.remove("grey")
        });
        setCounter(0)
    }

    return (
        <div className="info">
            {
                counter === 0
                ? <span><BsInfoSquare />klikněte na odmodlenou část</span>
                : <span><button onClick={handleClick}>Začít znovu</button></span>
            }
        </div>
    );
}

export default Info;