import data from "../texts.json"
import {TODAYS} from "../pages/RosaryPage";
import {getTodaysRosary} from "../pages/RosaryPage";

function Title({rosary}) {
    const showTodays = rosary === TODAYS
    let title;

    if (rosary) {
        if (!showTodays) {
            title = <h2>RŮŽENEC <b>{data[rosary].adjective}</b></h2>
        } else {
            const adj = <span className="adjective">{data[getTodaysRosary()].adjective}</span>
            title = <h2>{data.today}<br /><b>{adj}</b></h2>
        }
    }

    return (
        rosary &&
        <div className="title">
            {title}
        </div>
    )
}

export default Title;