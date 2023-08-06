import { useState, useRef } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActivePath(path);
  };

  return (
    <header className="header flex items-center py-6 px-4">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Menu */}
          <nav className="navigation">
            <ul className="menu flex items-center gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    exact // Only apply the active class for exact matches
                    to={link.path}
                    activeClassName="text-black font-semibold" // Black color for active link
                    className={`text-lg ${
                      activePath === link.path
                        ? "text-black" // Black color for active link
                        : "text-pink-500 hover:text-red-500 hover:scale-110" // Yellow color and hover effect for inactive links
                    }`}
                    onClick={() => handleLinkClick(link.path)} // Handle link click
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="hover:scale-110">ndjjdwojd</div>
    </header>
  );
};

export default Header;
