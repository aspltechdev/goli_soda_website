
// import { useState } from "react";
// import { Menu, X, ArrowUpRight, Factory } from "lucide-react";
// import "./Navbar.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Services", href: "#services" },
//     { label: "Business Models", href: "#models" },
//     { label: "Contact", href: "#contact" },
//   ];

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         {/* Brand Logo */}
//         <a href="#home" className="navbar-brand" onClick={closeMenu}>
//           <span className="navbar-brand-icon">
//             <Factory size={25} strokeWidth={1.8} />
//           </span>

//           <span className="navbar-brand-text">
//             <strong>GOLI SODA</strong>
//             <small>BUSINESS CONSULTANCY</small>
//           </span>
//         </a>

//         {/* Mobile Menu Toggle */}
//         <button
//           type="button"
//           className="navbar-menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
//           aria-expanded={menuOpen}
//           aria-controls="navbar-navigation"
//         >
//           {menuOpen ? <X size={25} /> : <Menu size={25} />}
//         </button>

//         {/* Navigation Links */}
//         <nav
//           id="navbar-navigation"
//           className={`navbar-navigation ${menuOpen ? "active" : ""}`}
//           aria-label="Main navigation"
//         >
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="navbar-link"
//               onClick={closeMenu}
//             >
//               {link.label}
//             </a>
//           ))}

//           <a
//             href="#contact"
//             className="navbar-cta"
//             onClick={closeMenu}
//           >
//             Let's Talk
//             <ArrowUpRight size={17} />
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;


// import { useState } from "react";
// import { Menu, X, ArrowUpRight, Factory } from "lucide-react";
// import "./Navbar.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Services", href: "#services" },
//     { label: "Business Models", href: "#models" },
//     { label: "Contact", href: "#contact" },
//   ];

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         <a
//           href="#home"
//           className="navbar-brand"
//           onClick={closeMenu}
//           aria-label="Goli Soda Business Consultancy Home"
//         >
//           <span className="navbar-brand-icon">
//             <Factory size={25} strokeWidth={2} />
//           </span>

//           <span className="navbar-brand-text">
//             <strong>GOLI <span>SODA</span></strong>
//             <small>BUSINESS CONSULTANCY</small>
//           </span>
//         </a>

//         <button
//           type="button"
//           className="navbar-menu-toggle"
//           onClick={() => setMenuOpen((open) => !open)}
//           aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
//           aria-expanded={menuOpen}
//           aria-controls="navbar-navigation"
//         >
//           {menuOpen ? <X size={25} /> : <Menu size={25} />}
//         </button>

//         <nav
//           id="navbar-navigation"
//           className={`navbar-navigation ${menuOpen ? "active" : ""}`}
//           aria-label="Main navigation"
//         >
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="navbar-link"
//               onClick={closeMenu}
//             >
//               {link.label}
//             </a>
//           ))}

//           <a
//             href="#contact"
//             className="navbar-cta"
//             onClick={closeMenu}
//           >
//             Let's Talk
//             <ArrowUpRight size={18} />
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;



import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Business Models", href: "#models" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Goli Soda Business Consultancy Home"
        >
          <img
            src={logo}
            alt="Goli Soda Business Consultancy"
            className="navbar-logo-image"
          />

          <span className="navbar-brand-text">
            <strong>
              GOLI <span>SODA</span>
            </strong>
            <small>BUSINESS CONSULTANCY</small>
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="navbar-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="navbar-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav
          id="navbar-navigation"
          className={`navbar-navigation ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="navbar-cta"
            onClick={closeMenu}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
