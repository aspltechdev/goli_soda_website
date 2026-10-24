
// // import { motion } from "framer-motion";
// // import {
// //   ArrowUpRight,
// //   CheckCircle2,
// //   Factory,
// //   Target,
// //   TrendingUp,
// // } from "lucide-react";

// // import "./About.css";

// // function About() {
// //   const highlights = [
// //     "Business planning and strategic direction",
// //     "Manufacturing setup and operational guidance",
// //     "Distribution, franchise, and business expansion",
// //   ];

// //   return (
// //     <section className="about-section" id="about">
// //       <div className="about-container">
// //         {/* Visual */}
// //         <motion.div
// //           className="about-visual"
// //           initial={{ opacity: 0, x: -35 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true, amount: 0.2 }}
// //           transition={{ duration: 0.7 }}
// //         >
// //           <div className="about-image-frame">
// //             <img
// //               src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=85"
// //               alt="Refreshing beverages and business opportunities"
// //               className="about-image"
// //               loading="lazy"
// //             />

// //             <div className="about-image-overlay" />

// //             <div className="about-image-caption">
// //               <Factory size={23} />
// //               <div>
// //                 <strong>Tradition Meets Opportunity</strong>
// //                 <span>Building the next generation of beverage businesses</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="about-floating-card">
// //             <Target size={24} />
// //             <div>
// //               <strong>Strategy to Execution</strong>
// //               <span>Practical business guidance</span>
// //             </div>
// //           </div>

// //           <div className="about-accent-shape" />
// //         </motion.div>

// //         {/* Content */}
// //         <motion.div
// //           className="about-copy"
// //           initial={{ opacity: 0, x: 35 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true, amount: 0.2 }}
// //           transition={{ duration: 0.7 }}
// //         >
// //           <span className="about-section-tag">
// //             <span />
// //             ABOUT THE CONSULTANCY
// //           </span>

// //           <h2>
// //             From Business
// //             <span> Vision to </span>
// //             Market Reality.
// //           </h2>

// //           <p className="about-intro">
// //             The Goli Soda industry offers opportunities for entrepreneurs
// //             looking to build beverage brands, establish manufacturing
// //             operations, and develop strong distribution networks.
// //           </p>

// //           <p className="about-description">
// //             Led by Mr. Pandurangan, associated with Asoka Ice Creams, this
// //             consultancy focuses on helping aspiring entrepreneurs understand
// //             business models, plan operations, and explore structured growth
// //             opportunities in the beverage industry.
// //           </p>

// //           <div className="about-highlights">
// //             {highlights.map((item) => (
// //               <div className="about-highlight" key={item}>
// //                 <CheckCircle2 size={19} />
// //                 <span>{item}</span>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="about-values">
// //             <div className="about-value">
// //               <span className="about-value-icon">
// //                 <Factory size={21} />
// //               </span>
// //               <div>
// //                 <strong>Build</strong>
// //                 <span>Plan your business foundation</span>
// //               </div>
// //             </div>

// //             <div className="about-value">
// //               <span className="about-value-icon">
// //                 <TrendingUp size={21} />
// //               </span>
// //               <div>
// //                 <strong>Grow</strong>
// //                 <span>Develop a scalable model</span>
// //               </div>
// //             </div>
// //           </div>

// //           <a href="#services" className="about-link">
// //             Explore Our Services
// //             <ArrowUpRight size={18} />
// //           </a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default About;



// import { motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowUpRight,
//   CheckCircle2,
//   Factory,
//   Target,
//   TrendingUp,
//   Sparkles,
// } from "lucide-react";

// import "./About.css";
// import aboutImage from "../assets/aboutimage.png";

// const highlights = [
//   "Business planning and strategic direction",
//   "Manufacturing setup and operational guidance",
//   "Distribution, franchise, and business expansion",
// ];

// function About() {
//   const reduceMotion = useReducedMotion();

//   const revealLeft = {
//     hidden: { opacity: 0, x: reduceMotion ? 0 : -35 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const revealRight = {
//     hidden: { opacity: 0, x: reduceMotion ? 0 : 35 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//     <section className="about-section" id="about">
//       {/* Decorative background */}
//       <div className="about-bg-glow" aria-hidden="true" />
//       <div className="about-bg-watermark" aria-hidden="true">
//         ASOKA
//       </div>

//       <div className="about-container">
//         {/* Left: Product collage */}
//         <motion.div
//           className="about-visual"
//           variants={revealLeft}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.75, ease: "easeOut" }}
//         >
//           <div className="about-red-orbit" />

//           <div className="about-image-frame">
//             <img
//               src={aboutImage}
//               alt="Traditional Goli Soda bottles with refreshing splashes"
//               className="about-image"
//               loading="lazy"
//             />
//             <div className="about-image-shade" />
//           </div>

//           {/* Floating strategy card */}
//           <motion.div
//             className="about-floating-card about-card-top"
//             animate={reduceMotion ? {} : { y: [0, -7, 0] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <span className="about-card-icon">
//               <Target size={22} />
//             </span>
//             <span className="about-card-copy">
//               <small>STRATEGY TO EXECUTION</small>
//               <strong>Practical Business Guidance</strong>
//             </span>
//           </motion.div>

//           {/* Floating opportunity card */}
//           <motion.div
//             className="about-floating-card about-card-bottom"
//             animate={reduceMotion ? {} : { y: [0, 7, 0] }}
//             transition={{
//               duration: 4.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 0.3,
//             }}
//           >
//             <span className="about-card-icon about-card-icon-large">
//               <Factory size={27} />
//             </span>
//             <span className="about-card-copy">
//               <strong>Tradition Meets Opportunity</strong>
//               <small>Building the next generation of beverage businesses</small>
//             </span>
//           </motion.div>

//           {/* Decorative bubbles */}
//           <span className="about-bubble about-bubble-one" />
//           <span className="about-bubble about-bubble-two" />
//           <span className="about-bubble about-bubble-three" />
//           <span className="about-bubble about-bubble-four" />

//           <span className="about-sparkle about-sparkle-one">
//             <Sparkles size={20} />
//           </span>
//         </motion.div>

//         {/* Right: Consultancy content */}
//         <motion.div
//           className="about-copy"
//           variants={revealRight}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.75, ease: "easeOut" }}
//         >
//           <div className="about-section-tag">
//             <span className="about-tag-dot" />
//             ABOUT THE CONSULTANCY
//           </div>

//           <h2>
//             From Business
//             <br />
//             <span>Vision to</span>
//             <br />
//             Market Reality.
//           </h2>

//           <div className="about-title-underline" />

//           <p className="about-intro">
//             The Goli Soda industry offers opportunities for entrepreneurs
//             looking to build beverage brands, establish manufacturing
//             operations, and develop strong distribution networks.
//           </p>

//           <p className="about-description">
//             Led by Mr. Pandurangan, associated with Asoka Ice Creams,
//             this consultancy helps aspiring entrepreneurs understand
//             business models, plan operations, and explore structured
//             growth opportunities in the beverage industry.
//           </p>

//           {/* Highlights */}
//           <div className="about-highlights">
//             {highlights.map((item, index) => (
//               <motion.div
//                 className="about-highlight"
//                 key={item}
//                 initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.4,
//                   delay: reduceMotion ? 0 : index * 0.12,
//                 }}
//               >
//                 <span className="about-check-icon">
//                   <CheckCircle2 size={15} strokeWidth={2.5} />
//                 </span>
//                 <span>{item}</span>
//               </motion.div>
//             ))}
//           </div>

//           {/* Build and grow */}
//           <div className="about-values">
//             <div className="about-value">
//               <span className="about-value-icon">
//                 <Factory size={23} />
//               </span>
//               <div>
//                 <strong>Build</strong>
//                 <span>Plan your business foundation</span>
//               </div>
//             </div>

//             <div className="about-value-divider" />

//             <div className="about-value">
//               <span className="about-value-icon">
//                 <TrendingUp size={23} />
//               </span>
//               <div>
//                 <strong>Grow</strong>
//                 <span>Develop a scalable model</span>
//               </div>
//             </div>
//           </div>

//           <a href="#services" className="about-link">
//             Explore Our Services
//             <span className="about-link-icon">
//               <ArrowUpRight size={19} />
//             </span>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default About;


import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import "./About.css";
import aboutImage from "../assets/aboutimage.png";
import aboutBg from "../assets/aboutbg.png";

function About() {
  const reduceMotion = useReducedMotion();

  const highlights = [
    "Business planning and strategic direction",
    "Manufacturing setup and operational guidance",
    "Distribution, franchise, and business expansion",
  ];

  return (
    <section
      className="about-section"
      id="about"
      style={{ "--about-bg-image": `url(${aboutBg})` }}
    >
      {/* Separate background image */}
      <div className="about-background" aria-hidden="true" />
      <div className="about-background-overlay" aria-hidden="true" />

      <div className="about-container">
        {/* Left: Product visual */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: reduceMotion ? 0 : -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-red-orbit" />

          <div className="about-image-frame">
            <img
              src={aboutImage}
              alt="Traditional Goli Soda bottles and refreshing splashes"
              className="about-image"
              loading="lazy"
            />
            <div className="about-image-shade" />
          </div>

          <motion.div
            className="about-floating-card about-card-top"
            animate={reduceMotion ? {} : { y: [0, -7, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="about-card-icon">
              <Target size={22} />
            </span>
            <span className="about-card-copy">
              <small>STRATEGY TO EXECUTION</small>
              <strong>Practical Business Guidance</strong>
            </span>
          </motion.div>

          <motion.div
            className="about-floating-card about-card-bottom"
            animate={reduceMotion ? {} : { y: [0, 7, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <span className="about-card-icon about-card-icon-large">
              <Factory size={27} />
            </span>
            <span className="about-card-copy">
              <strong>Tradition Meets Opportunity</strong>
              <small>
                Building the next generation of beverage businesses
              </small>
            </span>
          </motion.div>

          {/* Decorative bubbles */}
          <span className="about-bubble about-bubble-one" />
          <span className="about-bubble about-bubble-two" />
          <span className="about-bubble about-bubble-three" />
          <span className="about-bubble about-bubble-four" />

          <span className="about-sparkle about-sparkle-one">
            <Sparkles size={20} />
          </span>
        </motion.div>

        {/* Right: Consultancy content */}
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-section-tag">
            <span className="about-tag-dot" />
            ABOUT THE CONSULTANCY
          </div>

          <h2>
            From Business
            <br />
            <span>Vision to</span>
            <br />
            Market Reality.
          </h2>

          <div className="about-title-underline" />

          <p className="about-intro">
            The Goli Soda industry offers opportunities for entrepreneurs
            looking to build beverage brands, establish manufacturing
            operations, and develop strong distribution networks.
          </p>

          <p className="about-description">
            Led by Mr. Pandurangan, associated with Asoka Ice Creams,
            this consultancy helps aspiring entrepreneurs understand
            business models, plan operations, and explore structured
            growth opportunities in the beverage industry.
          </p>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div className="about-highlight" key={item}>
                <span className="about-check-icon">
                  <CheckCircle2 size={15} strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="about-values">
            <div className="about-value">
              <span className="about-value-icon">
                <Factory size={23} />
              </span>
              <div>
                <strong>Build</strong>
                <span>Plan your business foundation</span>
              </div>
            </div>

            <div className="about-value-divider" />

            <div className="about-value">
              <span className="about-value-icon">
                <TrendingUp size={23} />
              </span>
              <div>
                <strong>Grow</strong>
                <span>Develop a scalable model</span>
              </div>
            </div>
          </div>

          <a href="#services" className="about-link">
            Explore Our Services
            <span className="about-link-icon">
              <ArrowUpRight size={19} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;