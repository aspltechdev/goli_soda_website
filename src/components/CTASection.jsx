
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   MessageCircle,
//   CheckCircle2,
//   Sparkles,
// } from "lucide-react";

// import "./CTASection.css";

// const benefits = [
//   "Discuss your business goals",
//   "Explore suitable business models",
//   "Plan your next steps",
// ];

// function CTASection() {
//   return (
//     <section className="cta-section" id="business-enquiry">
//       {/* Background Effects */}
//       <div className="cta-orb cta-orb-one" />
//       <div className="cta-orb cta-orb-two" />
//       <div className="cta-grid" />

//       <div className="cta-container">
//         <motion.div
//           className="cta-content"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="cta-eyebrow">
//             <Sparkles size={15} />
//             YOUR BUSINESS JOURNEY STARTS HERE
//           </span>

//           <h2>
//             Have a Vision?
//             <br />
//             <span>Let's Build Your Business.</span>
//           </h2>

//           <p className="cta-description">
//             Whether you want to start manufacturing, develop a distribution
//             network, explore a franchise, or launch a beverage brand,
//             let's discuss your goals and identify the right next steps.
//           </p>

//           <div className="cta-benefits">
//             {benefits.map((benefit) => (
//               <div className="cta-benefit" key={benefit}>
//                 <CheckCircle2 size={18} />
//                 <span>{benefit}</span>
//               </div>
//             ))}
//           </div>

//           <div className="cta-actions">
//             <a href="#contact" className="cta-primary">
//               Discuss Your Opportunity
//               <ArrowRight size={19} />
//             </a>

//             <a href="#contact" className="cta-secondary">
//               <MessageCircle size={18} />
//               Get in Touch
//               <ArrowUpRight size={16} />
//             </a>
//           </div>

//           <div className="cta-note">
//             <span className="cta-note-dot" />
//             Every business journey begins with a conversation.
//           </div>
//         </motion.div>

//         {/* Right Visual Card */}
//         <motion.div
//           className="cta-visual"
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//         >
//           <div className="cta-visual-card">
//             <div className="cta-visual-top">
//               <span className="cta-visual-icon">
//                 <MessageCircle size={24} />
//               </span>

//               <span className="cta-visual-status">
//                 BUSINESS CONSULTANCY
//               </span>
//             </div>

//             <span className="cta-visual-label">LET'S TALK BUSINESS</span>

//             <h3>
//               Your Idea.
//               <br />
//               Your Market.
//               <br />
//               <span>Your Next Chapter.</span>
//             </h3>

//             <div className="cta-visual-divider" />

//             <div className="cta-visual-footer">
//               <div>
//                 <span>CONSULTANCY FOCUS</span>
//                 <strong>Plan. Build. Grow.</strong>
//               </div>

//               <ArrowUpRight size={25} />
//             </div>
//           </div>

//           <span className="cta-decoration cta-decoration-one" />
//           <span className="cta-decoration cta-decoration-two" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default CTASection;



import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import "./CTASection.css";
import ctaBg from "../assets/herobg.png";

const benefits = [
  "Discuss your business goals",
  "Explore suitable business models",
  "Plan your next steps",
];

function CTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="cta-section"
      id="business-enquiry"
      style={{
        "--cta-bg-image": `url("${ctaBg}")`,
      }}
    >
      {/* Background layers */}
      <div className="cta-background" aria-hidden="true" />
      <div className="cta-background-overlay" aria-hidden="true" />

      <div className="cta-container">
        {/* Left content */}
        <motion.div
          className="cta-content"
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -30,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="cta-eyebrow">
            <span className="cta-eyebrow-icon">
              <Sparkles size={15} />
            </span>
            YOUR BUSINESS JOURNEY STARTS HERE
          </span>

          <h2>
            Have a Vision?
            <br />
            <span>Let's Build Your Business.</span>
          </h2>

          <div className="cta-heading-underline" />

          <p className="cta-description">
            Whether you want to start manufacturing, develop a distribution
            network, explore a franchise, or launch a beverage brand,
            let's discuss your goals and identify the right next steps.
          </p>

          <div className="cta-benefits">
            {benefits.map((benefit, index) => (
              <motion.div
                className="cta-benefit"
                key={benefit}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 12,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
              >
                <span className="cta-benefit-icon">
                  <CheckCircle2 size={17} />
                </span>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="cta-actions">
            <a href="#contact" className="cta-primary">
              Discuss Your Opportunity
              <ArrowUpRight size={19} />
            </a>

            <a href="#contact" className="cta-secondary">
              <MessageCircle size={18} />
              Get in Touch
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="cta-note">
            <span className="cta-note-dot" />
            Every business journey begins with a conversation.
          </div>
        </motion.div>

        {/* Right-side cinematic product visual */}
        <motion.div
          className="cta-visual"
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 30,
            scale: reduceMotion ? 1 : 0.96,
          }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="cta-visual-glow" />

          <motion.div
            className="cta-product-art"
            animate={
              reduceMotion
                ? {}
                : { y: [0, -9, 0], rotate: [0, 0.5, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={ctaBg} alt="" />
          </motion.div>

          {/* Glass consultancy card */}
          <motion.div
            className="cta-visual-card"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="cta-visual-top">
              <span className="cta-visual-icon">
                <MessageCircle size={23} />
              </span>

              <span className="cta-visual-status">
                BUSINESS CONSULTANCY
              </span>
            </div>

            <span className="cta-visual-label">
              LET'S TALK BUSINESS
            </span>

            <h3>
              Your Idea.
              <br />
              Your Market.
              <br />
              <span>Your Next Chapter.</span>
            </h3>

            <div className="cta-visual-divider" />

            <div className="cta-visual-footer">
              <div>
                <span>CONSULTANCY FOCUS</span>
                <strong>Plan. Build. Grow.</strong>
              </div>

              <span className="cta-visual-arrow">
                <ArrowUpRight size={24} />
              </span>
            </div>
          </motion.div>

          <span className="cta-decoration cta-decoration-one" />
          <span className="cta-decoration cta-decoration-two" />
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
