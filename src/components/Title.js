import data from "../texts.json"
import {TODAYS} from "../pages/RosaryPage";
import {getTodaysRosary} from "../pages/RosaryPage";

function Title({rosary}) {
    const showTodays = rosary === TODAYS
    let title;

    if (rosary) {
        if (!showTodays) {
            title = data[rosary].title
        } else {
            const adj = <span className="adjective">{data[getTodaysRosary()].adjective}</span>
            title = <>{data.today}<br />{adj}</>
        }
    }

    return (
        rosary &&
        <div className="title">
            <span>{title}</span>
        </div>
    )
}

export default Title;