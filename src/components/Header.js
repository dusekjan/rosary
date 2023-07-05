import data from "../texts.json"

function Header() {
    return (
        <header>
            <h1><span>{data.rosary}</span></h1>
        </header>
    );
}

export default Header;