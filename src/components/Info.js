import React, {useContext} from 'react';
import { BsInfoCircle } from "react-icons/bs"
import { TbSquareLetterN, TbSquareArrowRight } from "react-icons/tb"
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
                ? <>
                    <span><BsInfoCircle />klikněte na odmodlenou část</span>
                    <span>nebo stiskněte klávesu <TbSquareLetterN /> či <TbSquareArrowRight /></span>
                  </>
                : <span>
                        <button onClick={handleClick}>ZAČÍT ZNOVU</button>
                  </span>
            }
        </div>
    );
}

export default Info;