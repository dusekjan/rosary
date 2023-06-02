import {Link, useLocation, useNavigate} from "react-router-dom";

function Navigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "Domov", path: "/" },
    { label: "Dary", path: "/donations" }
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
      NAVIGACE
    </nav>
  );
}

export default Navigation;
