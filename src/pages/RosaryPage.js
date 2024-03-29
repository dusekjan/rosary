import {useOutletContext} from "react-router-dom";
import {useContext, useEffect} from "react";
import Beginning from "../components/Beginning";
import Decade from "../components/Decade";
import data from "../texts.json"
import Ending from "../components/Ending";
import Mysteries from "../components/Mysteries";
import ModeContext from "../context/mode";
import DoneCounterContext from "../context/doneCounter";

export const TODAYS = "todays"
export const JOYFUL = "joyful"
export const SORROWFUL = "sorrowful"
export const GLORIOUS = "glorious"
export const LUMINOUS = "luminous"

function RosaryPage({rosaryType}) {
    const [rosary, setRosary] = useOutletContext()
    const { counter, incrementCounter } = useContext(DoneCounterContext)
    const { secrets, SECRETS, autoScroll, NOSCROLL } = useContext(ModeContext)
    const showTodays = rosary === TODAYS

    useEffect(() => {
        setRosary(rosaryType)
    }, [rosaryType])

    useEffect(() => {
        window.onkeyup = (e) => {
            /*
            * Funkce najde poslední odmodlenou modlitbu. Bezprostředně následující modlitbu označí za odmodlenou.
            * Nakonec se pokusí posunout na další modlitbu po právě odmodlené.
            * */

            if (e.key !== "ArrowRight" && e.key !== "n" && e.key !== "N") return;
            if (autoScroll === NOSCROLL || !CSS.supports("scroll-behavior", "smooth")) return;

            // najdeme posledni odmodlenou modlitbu
            let last = [...document.querySelectorAll(".prayer.grey")].at(-1)
            let current;
            if(!last) { // pokud nejsou odmodleny zádné modlitby, začneme od začátku
                current = document.querySelector(".prayer")
            } else {
                current = last.nextElementSibling || last.parentElement.nextElementSibling;
            }
            if (!current) return;

            // označíme právě odmodlenou modlitbu
            if (current.classList.contains("prayer")){
                current.classList.add("grey")
                incrementCounter()
            } else if (current.classList.contains("decade")) {  // prave odmodlena modlitba je zacatek desatku
                current = current.querySelector(".prayer")
                current.classList.add("grey")
                incrementCounter()
            }

            // posuneme se na dalsi modlitbu
            let next = current.nextElementSibling || current.parentElement.nextElementSibling;
            if (!next) return;
            if (next.classList.contains("prayer")) {
                next.scrollIntoView({behavior: "smooth", block: autoScroll})
            } else if (next.classList.contains("decade")) {
                next.querySelector(".prayer").scrollIntoView({behavior: "smooth", block: autoScroll})
            }
        };
    }, [autoScroll, NOSCROLL, counter]);

    let mysteries;
    if (rosary) {
        if (showTodays) {
            mysteries = data[getTodaysRosary()].mysteries
        } else {
            mysteries = data[rosary].mysteries
        }
    }

    const content = () => {
        if (mysteries && (secrets === SECRETS)) {
            return <Mysteries mysteries={mysteries} />
        } else if (mysteries) {
            function mapDecades(mystery, index) {
                return index === 0 ?
                    <Decade mystery={mystery} fatima={false} key={mystery}/> :
                    <Decade mystery={mystery} key={mystery}/>
            }

            return (
                <>
                    <Beginning/>
                    {mysteries.map(mapDecades)}
                    <Ending />
                </>
            )
        }
    }

    return (
        rosary &&
        <main>
            { content() }
        </main>
    );
}

export function getTodaysRosary() {
    const now = new Date()

    switch (now.getDay()) {
        case 0:
        case 3:
            return GLORIOUS
        case 1:
        case 6:
            return JOYFUL
        case 2:
        case 5:
            return SORROWFUL
        case 4:
            return LUMINOUS
    }
}

export default RosaryPage;