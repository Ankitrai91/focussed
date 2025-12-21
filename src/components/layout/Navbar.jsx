import logo from "../../assets/focussed.jpeg";

const menuItems = [
  "Home",
  "Company Profile",
  "Services Offered",
  "Products",
  "Blog",
  "Contact Us",
];

export default function Navbar({ activePage, onMenuClick }) {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <img src={logo} alt="Focussed Solutions" className="site-logo" />

        <ul className="nav-list">
          {menuItems.map(item => (
            <li
              key={item}
              className={activePage === item ? "nav-active" : ""}
              onClick={() => onMenuClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
