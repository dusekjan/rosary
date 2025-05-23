import data from "../texts.json"
import { RxExternalLink } from "react-icons/rx"

function Header() {
    return (
        <header>
            <h1><span>{data.rosary}</span></h1>
            <a className="logo" href="https://www.eracz.cz/2023/09/21/ruzenec-online/" target="_blank">ERA Česká republika<RxExternalLink /></a>
        </header>
    );
}

export default Header;