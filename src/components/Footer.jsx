
// // // import { ArrowUpRight, ArrowUp, MessageCircle } from "lucide-react";
// // // import "./Footer.css";

// // // const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

// // // function Footer() {
// // //   const currentYear = new Date().getFullYear();

// // //   return (
// // //     <footer className="footer">
// // //       <div className="footer-container">
// // //         <div className="footer-main">
// // //           <div className="footer-brand">
// // //             <a href="#home" className="footer-logo">
// // //               <span className="footer-logo-mark">G</span>
// // //               <span className="footer-logo-text">
// // //                 <strong>GOLI SODA</strong>
// // //                 <small>BUSINESS CONSULTANCY</small>
// // //               </span>
// // //             </a>

// // //             <p>
// // //               Turning Goli Soda business opportunities into structured,
// // //               scalable, and sustainable businesses.
// // //             </p>

// // //             <a
// // //               className="footer-whatsapp"
// // //               href={`https://wa.me/${WHATSAPP_NUMBER}`}
// // //               target="_blank"
// // //               rel="noreferrer"
// // //             >
// // //               <MessageCircle size={18} />
// // //               Connect on WhatsApp
// // //               <ArrowUpRight size={16} />
// // //             </a>
// // //           </div>

// // //           <div className="footer-links">
// // //             <h4>Quick Links</h4>
// // //             <a href="#home">Home</a>
// // //             <a href="#about">About Us</a>
// // //             <a href="#services">Our Services</a>
// // //             <a href="#models">Business Models</a>
// // //             <a href="#contact">Contact Us</a>
// // //           </div>

// // //           <div className="footer-links">
// // //             <h4>Business Solutions</h4>
// // //             <a href="#services">Business Planning</a>
// // //             <a href="#models">Manufacturing Setup</a>
// // //             <a href="#models">Distribution Network</a>
// // //             <a href="#models">Retail Business</a>
// // //             <a href="#models">Franchise & Private Label</a>
// // //           </div>

// // //           <div className="footer-contact">
// // //             <h4>Let's Build Together</h4>
// // //             <p>
// // //               Have a business idea or looking to grow your existing
// // //               Goli Soda business?
// // //             </p>
// // //             <a href="#contact" className="footer-contact-link">
// // //               Discuss Your Business
// // //               <ArrowUpRight size={17} />
// // //             </a>
// // //           </div>
// // //         </div>

// // //         <div className="footer-bottom">
// // //           <p>
// // //             © {currentYear} Goli Soda Business Consultancy.
// // //             All rights reserved.
// // //           </p>

// // //           <a href="#home" className="footer-back-top">
// // //             Back to top
// // //             <span>
// // //               <ArrowUp size={16} />
// // //             </span>
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // }

// // // export default Footer;



// // import {
// //   ArrowUpRight,
// //   ArrowUp,
// //   MessageCircle,
// //   Factory,
// //   Truck,
// //   Store,
// //   Sparkles,
// //   MapPin,
// // } from "lucide-react";

// // import "./Footer.css";

// // const WHATSAPP_NUMBER = "919876543210"; // Replace with actual WhatsApp number

// // const quickLinks = [
// //   { label: "Home", href: "#home" },
// //   { label: "About Consultancy", href: "#about" },
// //   { label: "Our Services", href: "#services" },
// //   { label: "Business Models", href: "#models" },
// //   { label: "Our Approach", href: "#process" },
// //   { label: "Contact Us", href: "#contact" },
// // ];

// // const businessSolutions = [
// //   { label: "Business Planning", href: "#services", icon: Sparkles },
// //   { label: "Manufacturing Setup", href: "#models", icon: Factory },
// //   { label: "Distribution Network", href: "#models", icon: Truck },
// //   { label: "Retail Business", href: "#models", icon: Store },
// //   { label: "Franchise & Private Label", href: "#models", icon: ArrowUpRight },
// // ];

// // function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   return (
// //     <footer className="footer">
// //       {/* Decorative background */}
// //       <div className="footer-background" aria-hidden="true">
// //         <span className="footer-orb footer-orb-one" />
// //         <span className="footer-orb footer-orb-two" />
// //       </div>

// //       <div className="footer-container">
// //         {/* Large CTA banner */}
// //         <div className="footer-cta">
// //           <div className="footer-cta-decoration" aria-hidden="true">
// //             <span />
// //             <span />
// //             <span />
// //           </div>

// //           <div className="footer-cta-content">
// //             <span className="footer-cta-eyebrow">
// //               <span className="footer-cta-dot" />
// //               YOUR NEXT BUSINESS CHAPTER STARTS HERE
// //             </span>

// //             <h2>
// //               Think Big.
// //               <br />
// //               <span>Build Something Refreshing.</span>
// //             </h2>

// //             <p>
// //               Explore opportunities across the Goli Soda industry
// //               with a clear business plan and strategic guidance.
// //             </p>
// //           </div>

// //           <a href="#contact" className="footer-cta-button">
// //             Let's Discuss
// //             <span>
// //               <ArrowUpRight size={21} />
// //             </span>
// //           </a>
// //         </div>

// //         {/* Main footer columns */}
// //         <div className="footer-main">
// //           {/* Brand */}
// //           <div className="footer-brand">
// //             <a href="#home" className="footer-logo" aria-label="Goli Soda Business Consultancy home">
// //               <span className="footer-logo-mark">
// //                 <Factory size={27} strokeWidth={1.8} />
// //               </span>

// //               <span className="footer-logo-text">
// //                 <strong>
// //                   GOLI <span>SODA</span>
// //                 </strong>
// //                 <small>BUSINESS CONSULTANCY</small>
// //               </span>
// //             </a>

// //             <p className="footer-brand-description">
// //               Helping entrepreneurs explore, plan, and develop
// //               business opportunities across the Goli Soda industry.
// //             </p>

// //             <a
// //               className="footer-whatsapp"
// //               href={`https://wa.me/${WHATSAPP_NUMBER}`}
// //               target="_blank"
// //               rel="noreferrer"
// //             >
// //               <MessageCircle size={19} />
// //               <span>Connect on WhatsApp</span>
// //               <ArrowUpRight size={17} />
// //             </a>

// //             <div className="footer-location">
// //               <MapPin size={16} />
// //               <span>Goli Soda Business Consultancy</span>
// //             </div>
// //           </div>

// //           {/* Quick navigation */}
// //           <nav className="footer-links" aria-label="Quick links">
// //             <h3>Explore</h3>
// //             <span className="footer-link-underline" />

// //             {quickLinks.map((link) => (
// //               <a href={link.href} key={link.label}>
// //                 <span className="footer-link-arrow">
// //                   <ArrowUpRight size={13} />
// //                 </span>
// //                 {link.label}
// //               </a>
// //             ))}
// //           </nav>

// //           {/* Solutions */}
// //           <nav className="footer-links footer-solutions" aria-label="Business solutions">
// //             <h3>What We Do</h3>
// //             <span className="footer-link-underline" />

// //             {businessSolutions.map(({ label, href, icon: Icon }) => (
// //               <a href={href} key={label}>
// //                 <Icon size={16} className="footer-solution-icon" />
// //                 <span>{label}</span>
// //               </a>
// //             ))}
// //           </nav>

// //           {/* Contact card */}
// //           <div className="footer-contact">
// //             <span className="footer-contact-icon">
// //               <MessageCircle size={23} />
// //             </span>

// //             <span className="footer-contact-label">
// //               HAVE A BUSINESS IDEA?
// //             </span>

// //             <h3>
// //               Let's turn your
// //               <span> vision into a plan.</span>
// //             </h3>

// //             <p>
// //               Tell us what you want to build. Let's explore
// //               the possibilities together.
// //             </p>

// //             <a href="#contact" className="footer-contact-link">
// //               Discuss Your Business
// //               <ArrowUpRight size={17} />
// //             </a>
// //           </div>
// //         </div>

// //         {/* Bottom strip */}
// //         <div className="footer-bottom">
// //           <p>
// //             © {currentYear} <strong>Goli Soda Business Consultancy.</strong>
// //             {" "}All rights reserved.
// //           </p>

// //           <span className="footer-bottom-tagline">
// //             <span />
// //             PLAN. BUILD. GROW.
// //           </span>

// //           <a href="#home" className="footer-back-top">
// //             Back to top
// //             <span>
// //               <ArrowUp size={16} />
// //             </span>
// //           </a>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;



// import {
//   ArrowRight,
//   ArrowUpRight,
//   MessageCircle,
//   MapPin,
//   Phone,
//   Mail,
// } from "lucide-react";

// import "./Footer.css";

// const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

// const quickLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About Us", href: "#about" },
//   { label: "Our Services", href: "#services" },
//   { label: "Business Models", href: "#models" },
//   { label: "Our Process", href: "#process" },
//   { label: "Contact", href: "#contact" },
// ];

// const solutions = [
//   "Business Planning",
//   "Manufacturing Setup",
//   "Distribution Strategy",
//   "Retail & Franchise",
//   "Private Label Consulting",
// ];

// function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="professional-footer" id="footer">
//       {/* Main footer */}
//       <div className="pf-container">
//         <div className="pf-main">
//           {/* Brand */}
//           <div className="pf-brand">
//             <a href="#home" className="pf-logo">
//               <span className="pf-logo-symbol">G</span>

//               <span className="pf-logo-copy">
//                 <strong>GOLI SODA</strong>
//                 <small>BUSINESS CONSULTANCY</small>
//               </span>
//             </a>

//             <p className="pf-description">
//               Strategic guidance for entrepreneurs looking to
//               explore, establish, and grow opportunities in the
//               Goli Soda business industry.
//             </p>

//             <a
//               className="pf-whatsapp"
//               href={`https://wa.me/${WHATSAPP_NUMBER}`}
//               target="_blank"
//               rel="noreferrer"
//             >
//               <MessageCircle size={18} />
//               <span>Connect with our team</span>
//               <ArrowUpRight size={16} />
//             </a>
//           </div>

//           {/* Navigation */}
//           <nav className="pf-column" aria-label="Quick links">
//             <h3>Quick Links</h3>

//             {quickLinks.map((link) => (
//               <a key={link.label} href={link.href}>
//                 {link.label}
//               </a>
//             ))}
//           </nav>

//           {/* Solutions */}
//           <div className="pf-column">
//             <h3>Our Expertise</h3>

//             {solutions.map((solution) => (
//               <a key={solution} href="#services">
//                 {solution}
//               </a>
//             ))}
//           </div>

//           {/* Contact */}
//           <div className="pf-contact">
//             <h3>Let's Talk Business</h3>

//             <p>
//               Have a business idea? Let's discuss the right
//               approach for your next venture.
//             </p>

//             <a className="pf-contact-button" href="#contact">
//               Discuss Your Idea
//               <ArrowRight size={17} />
//             </a>

//             <div className="pf-contact-detail">
//               <MapPin size={17} />
//               <span>Goli Soda Business Consultancy</span>
//             </div>

//             <a
//               className="pf-contact-detail"
//               href={`https://wa.me/${WHATSAPP_NUMBER}`}
//               target="_blank"
//               rel="noreferrer"
//             >
//               <Phone size={17} />
//               <span>Connect on WhatsApp</span>
//             </a>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="pf-bottom">
//           <p>
//             © {year} Goli Soda Business Consultancy.
//             All rights reserved.
//           </p>

//           <span className="pf-bottom-tagline">
//             BUSINESS GUIDANCE. BUILT ON CLARITY.
//           </span>

//           <a href="#home" className="pf-back-top">
//             Back to top <ArrowUpRight size={15} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Phone,
} from "lucide-react";

import logo from "../assets/logo.png";
import "./Footer.css";

const WHATSAPP_NUMBER = "919876543210"; // Replace with your actual number

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Business Models", href: "#models" },
  { label: "Our Process", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

const solutions = [
  { label: "Business Planning", href: "#services" },
  { label: "Manufacturing Setup", href: "#models" },
  { label: "Distribution Strategy", href: "#models" },
  { label: "Retail & Franchise", href: "#models" },
  { label: "Private Label Consulting", href: "#services" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="professional-footer" id="footer">
      <div className="pf-container">
        {/* Main Footer */}
        <div className="pf-main">

          {/* Brand & Logo */}
          <div className="pf-brand">
            <a
              href="#home"
              className="pf-logo"
              aria-label="Goli Soda Business Consultancy - Home"
            >
              <img
                src={logo}
                alt="Goli Soda Business Consultancy"
                className="pf-logo-image"
              />
            </a>

            <h2 className="pf-brand-name">
              Goli Soda <span>Business Consultancy</span>
            </h2>

            <p className="pf-description">
              Helping entrepreneurs explore, plan, and build
              sustainable business opportunities in the Goli Soda
              industry through strategic guidance and business
              development support.
            </p>

            <a
              className="pf-whatsapp"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              <span>Connect with our team</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <nav className="pf-column" aria-label="Quick links">
            <h3>Quick Links</h3>

            {quickLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Business Solutions */}
          <nav className="pf-column" aria-label="Business solutions">
            <h3>Our Expertise</h3>

            {solutions.map((solution) => (
              <a href={solution.href} key={solution.label}>
                {solution.label}
              </a>
            ))}
          </nav>

          {/* Contact Section */}
          <div className="pf-contact">
            <h3>Let's Talk Business</h3>

            <p>
              Have a business idea? Let's discuss the right
              strategy to turn your vision into an actionable plan.
            </p>

            <a href="#contact" className="pf-contact-button">
              Discuss Your Idea
              <ArrowRight size={17} />
            </a>

            <div className="pf-contact-detail">
              <MapPin size={17} />
              <span>Goli Soda Business Consultancy</span>
            </div>

            <a
              className="pf-contact-detail"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={17} />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pf-bottom">
          <p>
            © {currentYear}{" "}
            <strong>Goli Soda Business Consultancy.</strong>{" "}
            All rights reserved.
          </p>

          <span className="pf-bottom-tagline">
            PLAN. BUILD. GROW.
          </span>

          <a href="#home" className="pf-back-top">
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
