import data from "../texts.json"
import {Link} from "react-router-dom";
import {useContext} from "react";
import DoneCounterContext from "../context/doneCounter";
import { useLocation } from 'react-router-dom'

function Navigation() {
  const { counter, setCounter } = useContext(DoneCounterContext)
  const location = useLocation();

  const links = [
    { label: data.today, path: "/" },
    { label: data.joyful.title, path: "/radostny" },
    { label: data.sorrowful.title, path: "/bolestny" },
    { label: data.glorious.title, path: "/slavny" },
    { label: data.luminous.title, path: "/svetla" }
  ];

  const handleClick = () => {
    const doneInDecades = document.querySelectorAll(".decade .prayer.grey").length
    setCounter(counter - doneInDecades)
  }

  const renderedLinks = links.map((link, index) => {
    const active = location.pathname === link.path ? "active" : ""
    return (
      <Link className={active} key={link.label} onClick={handleClick} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return (
    <nav>
      <div className="links">{renderedLinks}</div>
    </nav>
  );
}

export default Navigation;
