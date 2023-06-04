import data from "../texts.json"

function Prayer({prayer, mystery}) {

    let text;
    if (mystery) {
        text = data.prayers.hailMary1 + mystery + data.prayers.hailMary2
    } else {
        text = data.prayers[prayer]
    }

    let shape;
    switch (prayer) {
        case "signOfTheCrossFirst":
            shape = "cross"
        break;
        case "ourFather":
            shape = "bigCircle"
        break;
        case "gloryBe":
        case "fatimaPrayer":
        case "apostlesCreed":
        case "signOfTheCrossSecond":
        case "hailHolyQueen":
        case "rosaryPrayer":
            shape = ""
        break;
        default:
            shape = "circle"
    }

    return (
        <div className="prayer">
            <div className="left">
                <span className={shape}></span>
            </div>
            <div
                className="right"
                dangerouslySetInnerHTML={{__html: text}}>
            </div>
        </div>
    );
}

export default Prayer;