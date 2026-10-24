

// // import { motion, useReducedMotion } from "framer-motion";
// // import {
// //   ArrowRight,
// //   CheckCircle2,
// //   Factory,
// //   TrendingUp,
// //   Sparkles,
// // } from "lucide-react";
// // import "./Hero.css";
// // import heroimg from "../assets/heroimage.png";

// // const benefits = [
// //   { icon: Factory, label: "Manufacturing Guidance" },
// //   { icon: CheckCircle2, label: "Business Planning" },
// //   { icon: TrendingUp, label: "Growth Strategy" },
// // ];

// // function Hero() {
// //   const reduceMotion = useReducedMotion();

// //   const reveal = {
// //     hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
// //     visible: { opacity: 1, y: 0 },
// //   };

// //   return (
// //     <section className="hero" id="home">
// //       <div className="hero-background-shape" />
// //       <div className="hero-background-glow" />

// //       <div className="hero-container">
// //         {/* Left: Hero content */}
// //         <motion.div
// //           className="hero-copy"
// //           initial="hidden"
// //           animate="visible"
// //           variants={{
// //             hidden: {},
// //             visible: {
// //               transition: { staggerChildren: reduceMotion ? 0 : 0.13 },
// //             },
// //           }}
// //         >
// //           <motion.div className="hero-eyebrow" variants={reveal}>
// //             <span className="hero-eyebrow-dot" />
// //             BUSINESS CONSULTANCY FOR THE GOLI SODA INDUSTRY
// //           </motion.div>

// //           <motion.h1 variants={reveal}>
// //             Reviving the
// //             <br />
// //             <span className="hero-red-text">Goli Soda</span> Industry.
// //             <br />
// //             Building Businesses
// //             <br />
// //             <span className="hero-red-text hero-underline">
// //               That Grow.
// //             </span>
// //           </motion.h1>

// //           <motion.p className="hero-description" variants={reveal}>
// //             Turn your business vision into a scalable opportunity. Get
// //             expert guidance on manufacturing setup, distribution networks,
// //             franchise development, and brand growth from Mr. Pandurangan.
// //           </motion.p>

// //           <motion.div className="hero-actions" variants={reveal}>
// //             <a href="#contact" className="hero-btn hero-btn-primary">
// //               Explore Business Opportunities
// //               <ArrowRight size={19} />
// //             </a>

// //             <a href="#services" className="hero-btn hero-btn-secondary">
// //               Discover Our Services
// //             </a>
// //           </motion.div>

// //           <motion.div className="hero-benefits" variants={reveal}>
// //             {benefits.map(({ icon: Icon, label }) => (
// //               <div className="hero-benefit" key={label}>
// //                 <span className="hero-benefit-icon">
// //                   <Icon size={20} strokeWidth={1.9} />
// //                 </span>
// //                 <span>{label}</span>
// //               </div>
// //             ))}
// //           </motion.div>

// //         </motion.div>

// //         {/* Right: Cinematic soda visual */}
// //         <motion.div
// //           className="hero-visual"
// //           initial={{
// //             opacity: 0,
// //             x: reduceMotion ? 0 : 35,
// //             scale: reduceMotion ? 1 : 0.94,
// //           }}
// //           animate={{ opacity: 1, x: 0, scale: 1 }}
// //           transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
// //         >
// //           <div className="hero-red-orbit" />
// //           <div className="hero-image-halo" />

// //           <motion.div
// //             className="hero-product-image"
// //             animate={
// //               reduceMotion
// //                 ? {}
// //                 : { y: [0, -10, 0], rotate: [0, 1, 0] }
// //             }
// //             transition={{
// //               duration: 5,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //             }}
// //           >
// //             <img
// //               src={heroimg}
// //               alt="Goli Soda bottle with a refreshing splash"
// //             />
// //           </motion.div>

// //           {/* Floating bubbles */}
// //           <span className="hero-bubble hero-bubble-one" />
// //           <span className="hero-bubble hero-bubble-two" />
// //           <span className="hero-bubble hero-bubble-three" />
// //           <span className="hero-bubble hero-bubble-four" />

// //           {/* Floating business cards */}
// //           <motion.div
// //             className="hero-floating-card hero-card-manufacturing"
// //             animate={reduceMotion ? {} : { y: [0, -7, 0] }}
// //             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// //           >
// //             <span className="hero-card-icon">
// //               <Factory size={22} />
// //             </span>
// //             <span>
// //               <small>FROM IDEA TO</small>
// //               <strong>Manufacturing Setup</strong>
// //             </span>
// //           </motion.div>

// //           <motion.div
// //             className="hero-floating-card hero-card-growth"
// //             animate={reduceMotion ? {} : { y: [0, 7, 0] }}
// //             transition={{
// //               duration: 4.5,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //               delay: 0.3,
// //             }}
// //           >
// //             <span className="hero-card-icon">
// //               <TrendingUp size={22} />
// //             </span>
// //             <span>
// //               <small>BUILT FOR</small>
// //               <strong>Market Growth</strong>
// //             </span>
// //           </motion.div>

         
// //         </motion.div>
// //       </div>

 
// //     </section>
// //   );
// // }

// // export default Hero;

// import { motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Factory,
//   TrendingUp,
// } from "lucide-react";
// import "./Hero.css";

// import heroimg from "../assets/heroimage.png";
// import heroBg from "../assets/herobg.png";

// const benefits = [
//   { icon: Factory, label: "Manufacturing Guidance" },
//   { icon: CheckCircle2, label: "Business Planning" },
//   { icon: TrendingUp, label: "Growth Strategy" },
// ];

// function Hero() {
//   const reduceMotion = useReducedMotion();

//   const reveal = {
//     hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section
//       className="hero"
//       id="home"
//       style={{ "--hero-bg-image": `url(${heroBg})` }}
//     >
//       <div className="hero-background" aria-hidden="true" />
//       <div className="hero-background-tint" aria-hidden="true" />

//       <div className="hero-container">
//         <motion.div
//           className="hero-copy"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: reduceMotion ? 0 : 0.12,
//               },
//             },
//           }}
//         >
//           <motion.div className="hero-eyebrow" variants={reveal}>
//             <span className="hero-eyebrow-dot" />
//             BUSINESS CONSULTANCY FOR THE GOLI SODA INDUSTRY
//           </motion.div>

//           <motion.h1 variants={reveal}>
//             Reviving the
//             <br />
//             <span className="hero-red-text">Goli Soda</span> Industry.
//             <br />
//             Building Businesses
//             <br />
//             <span className="hero-red-text hero-underline">
//               That Grow.
//             </span>
//           </motion.h1>

//           <motion.p className="hero-description" variants={reveal}>
//             Turn your business vision into a scalable opportunity. Get
//             expert guidance on manufacturing setup, distribution networks,
//             franchise development, and brand growth from Mr. Pandurangan.
//           </motion.p>

//           <motion.div className="hero-actions" variants={reveal}>
//             <a href="#contact" className="hero-btn hero-btn-primary">
//               Explore Business Opportunities
//               <ArrowRight size={19} />
//             </a>

//             <a href="#services" className="hero-btn hero-btn-secondary">
//               Discover Our Services
//             </a>
//           </motion.div>

//           <motion.div className="hero-benefits" variants={reveal}>
//             {benefits.map(({ icon: Icon, label }) => (
//               <div className="hero-benefit" key={label}>
//                 <span className="hero-benefit-icon">
//                   <Icon size={20} strokeWidth={1.9} />
//                 </span>
//                 <span>{label}</span>
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="hero-visual"
//           initial={{
//             opacity: 0,
//             x: reduceMotion ? 0 : 35,
//             scale: reduceMotion ? 1 : 0.96,
//           }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//         >
//           <div className="hero-red-orbit" aria-hidden="true" />
//           <div className="hero-image-halo" aria-hidden="true" />

//           <motion.div
//             className="hero-product-image"
//             animate={
//               reduceMotion
//                 ? {}
//                 : {
//                     y: [0, -12, 0],
//                     rotate: [0, 1.2, 0],
//                   }
//             }
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <img
//               src={heroimg}
//               alt="Refreshing Goli Soda bottle with water splashes"
//             />
//           </motion.div>

//           <span
//             className="hero-bubble hero-bubble-one"
//             aria-hidden="true"
//           />
//           <span
//             className="hero-bubble hero-bubble-two"
//             aria-hidden="true"
//           />
//           <span
//             className="hero-bubble hero-bubble-three"
//             aria-hidden="true"
//           />
//           <span
//             className="hero-bubble hero-bubble-four"
//             aria-hidden="true"
//           />

//           <motion.div
//             className="hero-floating-card hero-card-manufacturing"
//             animate={reduceMotion ? {} : { y: [0, -7, 0] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <span className="hero-card-icon">
//               <Factory size={22} />
//             </span>
//             <span>
//               <small>FROM IDEA TO</small>
//               <strong>Manufacturing Setup</strong>
//             </span>
//           </motion.div>

//           <motion.div
//             className="hero-floating-card hero-card-growth"
//             animate={reduceMotion ? {} : { y: [0, 7, 0] }}
//             transition={{
//               duration: 4.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 0.3,
//             }}
//           >
//             <span className="hero-card-icon">
//               <TrendingUp size={22} />
//             </span>
//             <span>
//               <small>BUILT FOR</small>
//               <strong>Market Growth</strong>
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>

//       <a href="#about" className="hero-scroll">
//         <span className="hero-scroll-line" />
//         Discover Our Approach
//         <ArrowRight size={15} />
//       </a>
//     </section>
//   );
// }

// export default Hero;



import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  TrendingUp,
} from "lucide-react";

import "./Hero.css";
import heroimg from "../assets/heroimage.png";
import heroBg from "../assets/herobg.png";

const benefits = [
  { icon: Factory, label: "Manufacturing Guidance" },
  { icon: CheckCircle2, label: "Business Planning" },
  { icon: TrendingUp, label: "Growth Strategy" },
];

function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className="hero"
      id="home"
      style={{ "--hero-bg-image": `url(${heroBg})` }}
    >
      {/* Separate background image */}
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-background-tint" aria-hidden="true" />

      <div className="hero-container">
        {/* Left: Hero content */}
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
        >
          <motion.div className="hero-eyebrow" variants={reveal}>
            <span className="hero-eyebrow-dot" />
            BUSINESS CONSULTANCY FOR THE GOLI SODA INDUSTRY
          </motion.div>

          <motion.h1 variants={reveal}>
            Reviving the
            <br />
            <span className="hero-red-text">Goli Soda</span> Industry.
            <br />
            Building Businesses
            <br />
            <span className="hero-red-text hero-underline">
              That Grow.
            </span>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={reveal}
          >
            Turn your business vision into a scalable opportunity.
            Get expert guidance on manufacturing setup, distribution
            networks, franchise development, and brand growth from
            Mr. Pandurangan.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="hero-actions"
            variants={reveal}
          >
            <a href="#contact" className="hero-btn hero-btn-primary">
              Explore Business Opportunities
              <ArrowRight size={19} />
            </a>

            <a href="#services" className="hero-btn hero-btn-secondary">
              Discover Our Services
            </a>
          </motion.div>

          {/* Business benefits */}
          <motion.div
            className="hero-benefits"
            variants={reveal}
          >
            {benefits.map(({ icon: Icon, label }) => (
              <div className="hero-benefit" key={label}>
                <span className="hero-benefit-icon">
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Cinematic product visual */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 35,
            scale: reduceMotion ? 1 : 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          {/* Decorative red circle behind the bottle */}
          <div className="hero-red-orbit" aria-hidden="true" />
          <div className="hero-image-halo" aria-hidden="true" />

          {/* Animated soda bottle */}
          <motion.div
            className="hero-product-image"
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -12, 0],
                    rotate: [0, 1.2, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={heroimg}
              alt="Goli Soda glass bottle with refreshing soda splashes"
              fetchPriority="high"
            />
          </motion.div>

          {/* Floating soda bubbles */}
          <span
            className="hero-bubble hero-bubble-one"
            aria-hidden="true"
          />
          <span
            className="hero-bubble hero-bubble-two"
            aria-hidden="true"
          />
          <span
            className="hero-bubble hero-bubble-three"
            aria-hidden="true"
          />
          <span
            className="hero-bubble hero-bubble-four"
            aria-hidden="true"
          />

          {/* Manufacturing information card */}
          <motion.div
            className="hero-floating-card hero-card-manufacturing"
            animate={
              reduceMotion ? {} : { y: [0, -7, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="hero-card-icon">
              <Factory size={22} />
            </span>

            <span>
              <small>FROM IDEA TO</small>
              <strong>Manufacturing Setup</strong>
            </span>
          </motion.div>

          {/* Growth information card */}
          <motion.div
            className="hero-floating-card hero-card-growth"
            animate={
              reduceMotion ? {} : { y: [0, 7, 0] }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <span className="hero-card-icon">
              <TrendingUp size={22} />
            </span>

            <span>
              <small>BUILT FOR</small>
              <strong>Market Growth</strong>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll">
        <span className="hero-scroll-line" />
        Discover Our Approach
        <ArrowRight size={15} />
      </a>
    </section>
  );
}

export default Hero;
