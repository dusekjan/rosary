import {useOutletContext} from "react-router-dom";
import {useContext, useEffect} from "react";
import Beginning from "../components/Beginning";
import Decade from "../components/Decade";
import data from "../texts.json"
import Ending from "../components/Ending";
import ModeContext from "../context/mode";
import Mysteries from "../components/Mysteries";

export const TODAYS = "todays"
export const JOYFUL = "joyful"
export const SORROWFUL = "sorrowful"
export const GLORIOUS = "glorious"
export const LUMINOUS = "luminous"

function RosaryPage({rosaryType}) {
    const [rosary, setRosary] = useOutletContext()
    const { secrets, SECRETS } = useContext(ModeContext)

    const showTodays = rosary === TODAYS

    useEffect(() => {
        setRosary(rosaryType)
    }, [rosaryType])

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