import data from "../texts.json"
import {Link, useLocation, useNavigate} from "react-router-dom";

function Navigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: data.today, path: "/" },
    { label: data.joyful.title, path: "/radostny" },
    { label: data.sorrowful.title, path: "/bolestny" },
    { label: data.glorious.title, path: "/slavny" },
    { label: data.luminous.title, path: "/svetla" }
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
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
