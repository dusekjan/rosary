import data from "../texts.json"
import { RxExternalLink } from "react-icons/rx"

function Header() {
    return (
        <header>
            <h1><span>{data.rosary}</span></h1>
            <a className="logo" href="https://brigitaonline.cz/" target="_blank">Pobožnost sv. Brigity <RxExternalLink /></a>
        </header>
    );
}

export default Header;