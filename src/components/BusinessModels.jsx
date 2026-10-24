
// // import { motion } from "framer-motion";
// // import {
// //   Factory,
// //   Truck,
// //   Store,
// //   Handshake,
// //   ArrowUpRight,
// //   CheckCircle2,
// // } from "lucide-react";

// // import "./BusinessModels.css";

// // const businessModels = [
// //   {
// //     number: "01",
// //     icon: Factory,
// //     title: "Manufacturing Business",
// //     subtitle: "BUILD YOUR OWN PRODUCTION UNIT",
// //     description:
// //       "Explore the requirements for establishing a Goli Soda manufacturing operation, from facility planning to production and packaging.",
// //     features: [
// //       "Manufacturing setup planning",
// //       "Equipment and facility requirements",
// //       "Production workflow guidance",
// //       "Packaging and quality considerations",
// //     ],
// //   },
// //   {
// //     number: "02",
// //     icon: Truck,
// //     title: "Distribution Business",
// //     subtitle: "BUILD YOUR MARKET NETWORK",
// //     description:
// //       "Explore opportunities to distribute Goli Soda products across local markets and develop relationships with retail partners.",
// //     features: [
// //       "Territory planning",
// //       "Retailer network development",
// //       "Supply chain coordination",
// //       "Market expansion strategy",
// //     ],
// //   },
// //   {
// //     number: "03",
// //     icon: Store,
// //     title: "Retail Business",
// //     subtitle: "CONNECT PRODUCTS WITH CUSTOMERS",
// //     description:
// //       "Understand how retail outlets can participate in the Goli Soda market through product selection and local customer reach.",
// //     features: [
// //       "Retail opportunity assessment",
// //       "Product and stock planning",
// //       "Local market positioning",
// //       "Customer reach strategy",
// //     ],
// //   },
// //   {
// //     number: "04",
// //     icon: Handshake,
// //     title: "Franchise & Private Label",
// //     subtitle: "EXPLORE EXPANSION OPPORTUNITIES",
// //     description:
// //       "Evaluate franchise partnerships or private-label possibilities based on your business goals, resources, and market plans.",
// //     features: [
// //       "Business model evaluation",
// //       "Partner role planning",
// //       "Branding opportunities",
// //       "Expansion strategy guidance",
// //     ],
// //   },
// // ];

// // function BusinessModels() {
// //   return (
// //     <section className="models-section" id="models">
// //       <div className="models-container">
// //         {/* Section Heading */}
// //         <motion.div
// //           className="models-heading"
// //           initial={{ opacity: 0, y: 25 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <span className="models-eyebrow">
// //             <span />
// //             FIND YOUR BUSINESS MODEL
// //           </span>

// //           <h2>
// //             One Industry.
// //             <br />
// //             <span>Multiple Opportunities.</span>
// //           </h2>

// //           <p>
// //             Whether you want to manufacture, distribute, sell, or build a
// //             brand, explore a business model aligned with your goals and
// //             resources.
// //           </p>
// //         </motion.div>

// //         {/* Business Model Cards */}
// //         <div className="models-grid">
// //           {businessModels.map((model, index) => {
// //             const Icon = model.icon;

// //             return (
// //               <motion.article
// //                 className="model-card"
// //                 key={model.number}
// //                 initial={{ opacity: 0, y: 25 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.15 }}
// //                 transition={{
// //                   duration: 0.5,
// //                   delay: index * 0.08,
// //                 }}
// //               >
// //                 <div className="model-card-top">
// //                   <span className="model-icon">
// //                     <Icon size={27} strokeWidth={1.8} />
// //                   </span>

// //                   <span className="model-number">{model.number}</span>
// //                 </div>

// //                 <span className="model-subtitle">{model.subtitle}</span>

// //                 <h3>{model.title}</h3>

// //                 <p className="model-description">{model.description}</p>

// //                 <div className="model-divider" />

// //                 <ul className="model-features">
// //                   {model.features.map((feature) => (
// //                     <li key={feature}>
// //                       <CheckCircle2 size={17} />
// //                       <span>{feature}</span>
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 <a
// //                   href="#contact"
// //                   className="model-link"
// //                   aria-label={`Discuss ${model.title}`}
// //                 >
// //                   Discuss This Model
// //                   <ArrowUpRight size={17} />
// //                 </a>
// //               </motion.article>
// //             );
// //           })}
// //         </div>

// //         {/* Bottom CTA */}
// //         <motion.div
// //           className="models-bottom"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <div>
// //             <span className="models-bottom-label">
// //               NOT SURE WHERE TO START?
// //             </span>

// //             <h3>Let's identify the right opportunity for you.</h3>

// //             <p>
// //               Discuss your business goals and explore the available options.
// //             </p>
// //           </div>

// //           <a href="#contact" className="models-cta">
// //             Explore Your Options
// //             <ArrowUpRight size={18} />
// //           </a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default BusinessModels;



// import { motion, useReducedMotion } from "framer-motion";
// import {
//   Factory,
//   Truck,
//   Store,
//   Handshake,
//   ArrowUpRight,
//   CheckCircle2,
//   Target,
// } from "lucide-react";

// import "./BusinessModels.css";

// import manufacturingImage from "../assets/ser4.png";
// import distributionImage from "../assets/ser5.png";
// import retailImage from "../assets/ser6.png";
// import franchiseImage from "../assets/ser4.png";

// const businessModels = [
//   {
//     number: "01",
//     icon: Factory,
//     title: "Manufacturing",
//     highlight: "Business",
//     subtitle: "BUILD YOUR OWN PRODUCTION UNIT",
//     description:
//       "Explore the requirements for establishing a Goli Soda manufacturing operation, from facility planning to production and packaging.",
//     image: manufacturingImage,
//     features: [
//       "Manufacturing setup planning",
//       "Equipment and facility requirements",
//       "Production workflow guidance",
//       "Packaging and quality considerations",
//     ],
//   },
//   {
//     number: "02",
//     icon: Truck,
//     title: "Distribution",
//     highlight: "Business",
//     subtitle: "BUILD YOUR MARKET NETWORK",
//     description:
//       "Explore opportunities to distribute Goli Soda products across local markets and develop relationships with retail partners.",
//     image: distributionImage,
//     features: [
//       "Territory planning",
//       "Retailer network development",
//       "Supply chain coordination",
//       "Market expansion strategy",
//     ],
//   },
//   {
//     number: "03",
//     icon: Store,
//     title: "Retail",
//     highlight: "Business",
//     subtitle: "CONNECT PRODUCTS WITH CUSTOMERS",
//     description:
//       "Understand how retail outlets can participate in the Goli Soda market through product selection and local customer reach.",
//     image: retailImage,
//     features: [
//       "Retail opportunity assessment",
//       "Product and stock planning",
//       "Local market positioning",
//       "Customer reach strategy",
//     ],
//   },
//   {
//     number: "04",
//     icon: Handshake,
//     title: "Franchise &",
//     highlight: "Private Label",
//     subtitle: "EXPLORE EXPANSION OPPORTUNITIES",
//     description:
//       "Evaluate franchise partnerships or private-label possibilities based on your business goals, resources, and market plans.",
//     image: franchiseImage,
//     features: [
//       "Business model evaluation",
//       "Partner role planning",
//       "Branding opportunities",
//       "Expansion strategy guidance",
//     ],
//   },
// ];

// function BusinessModels() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section className="models-section" id="models">
//       <div className="models-background-glow" aria-hidden="true" />
//       <div className="models-watermark" aria-hidden="true">
//         GOLI
//       </div>

//       <div className="models-container">
//         {/* Section introduction */}
//         <motion.div
//           className="models-heading"
//           initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.65 }}
//         >
//           <span className="models-eyebrow">
//             <span className="models-eyebrow-dot" />
//             FIND YOUR BUSINESS MODEL
//           </span>

//           <h2>
//             One Industry.
//             <br />
//             <span>Multiple Opportunities.</span>
//           </h2>

//           <div className="models-heading-underline" />

//           <p>
//             Whether you want to manufacture, distribute, sell, or build a
//             brand, explore a business model aligned with your goals and
//             resources.
//           </p>
//         </motion.div>

//         {/* Business model cards */}
//         <div className="models-grid">
//           {businessModels.map((model, index) => {
//             const Icon = model.icon;

//             return (
//               <motion.article
//                 className="model-card"
//                 key={model.number}
//                 initial={{
//                   opacity: 0,
//                   y: reduceMotion ? 0 : 30,
//                 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.12 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: reduceMotion ? 0 : index * 0.08,
//                 }}
//               >
//                 {/* Card image */}
//                 <div className="model-image">
//                   <img
//                     src={model.image}
//                     alt={`${model.title} ${model.highlight} opportunity`}
//                     loading="lazy"
//                   />
//                   <div className="model-image-overlay" />

//                   <span className="model-image-number">
//                     {model.number}
//                   </span>

//                   <span className="model-image-icon">
//                     <Icon size={25} strokeWidth={1.9} />
//                   </span>
//                 </div>

//                 {/* Card content */}
//                 <div className="model-content">
//                   <span className="model-subtitle">
//                     {model.subtitle}
//                   </span>

//                   <h3>
//                     {model.title}
//                     <br />
//                     <span>{model.highlight}</span>
//                   </h3>

//                   <p className="model-description">
//                     {model.description}
//                   </p>

//                   <div className="model-divider" />

//                   <ul className="model-features">
//                     {model.features.map((feature) => (
//                       <li key={feature}>
//                         <span className="model-feature-check">
//                           <CheckCircle2 size={13} strokeWidth={2.5} />
//                         </span>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <a
//                     href="#contact"
//                     className="model-link"
//                     aria-label={`Discuss ${model.title} ${model.highlight}`}
//                   >
//                     <span>Discuss This Model</span>
//                     <span className="model-link-icon">
//                       <ArrowUpRight size={18} />
//                     </span>
//                   </a>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>

//         {/* Bottom call to action */}
//         <motion.div
//           className="models-bottom"
//           initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55 }}
//         >
//           <div className="models-bottom-icon">
//             <Target size={30} strokeWidth={1.8} />
//           </div>

//           <div className="models-bottom-copy">
//             <span>NOT SURE WHERE TO START?</span>
//             <h3>
//               Let’s identify <span>the right opportunity for you.</span>
//             </h3>
//             <p>
//               Discuss your business goals and explore the available options.
//             </p>
//           </div>

//           <a href="#contact" className="models-cta">
//             Explore Your Options
//             <ArrowUpRight size={19} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default BusinessModels;




import { motion, useReducedMotion } from "framer-motion";
import {
  Factory,
  Truck,
  Store,
  Handshake,
  ArrowUpRight,
  CheckCircle2,
  Target,
} from "lucide-react";

import "./BusinessModels.css";

import modelsBg from "../assets/bbb.png";
import manufacturingImage from "../assets/ser4.png";
import distributionImage from "../assets/ser5.png";
import retailImage from "../assets/ser6.png";
import franchiseImage from "../assets/ser4.png";

const businessModels = [
  {
    number: "01",
    icon: Factory,
    title: "Manufacturing",
    highlight: "Business",
    subtitle: "BUILD YOUR OWN PRODUCTION UNIT",
    description:
      "Explore the requirements for establishing a Goli Soda manufacturing operation, from facility planning to production and packaging.",
    image: manufacturingImage,
    features: [
      "Manufacturing setup planning",
      "Equipment and facility requirements",
      "Production workflow guidance",
      "Packaging and quality considerations",
    ],
  },
  {
    number: "02",
    icon: Truck,
    title: "Distribution",
    highlight: "Business",
    subtitle: "BUILD YOUR MARKET NETWORK",
    description:
      "Explore opportunities to distribute Goli Soda products across local markets and develop relationships with retail partners.",
    image: distributionImage,
    features: [
      "Territory planning",
      "Retailer network development",
      "Supply chain coordination",
      "Market expansion strategy",
    ],
  },
  {
    number: "03",
    icon: Store,
    title: "Retail",
    highlight: "Business",
    subtitle: "CONNECT PRODUCTS WITH CUSTOMERS",
    description:
      "Understand how retail outlets can participate in the Goli Soda market through product selection and local customer reach.",
    image: retailImage,
    features: [
      "Retail opportunity assessment",
      "Product and stock planning",
      "Local market positioning",
      "Customer reach strategy",
    ],
  },
  {
    number: "04",
    icon: Handshake,
    title: "Franchise &",
    highlight: "Private Label",
    subtitle: "EXPLORE EXPANSION OPPORTUNITIES",
    description:
      "Evaluate franchise partnerships or private-label possibilities based on your business goals, resources, and market plans.",
    image: franchiseImage,
    features: [
      "Business model evaluation",
      "Partner role planning",
      "Branding opportunities",
      "Expansion strategy guidance",
    ],
  },
];

function BusinessModels() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="models-section"
      id="models"
      style={{ "--models-bg-image": `url(${modelsBg})` }}
    >
      {/* Separate background image */}
      <div className="models-background" aria-hidden="true" />
      <div className="models-background-overlay" aria-hidden="true" />

      {/* Decorative elements */}
      <div className="models-background-glow" aria-hidden="true" />
      <div className="models-watermark" aria-hidden="true">
        GOLI
      </div>

      <div className="models-container">
        {/* Section heading */}
        <motion.div
          className="models-heading"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <span className="models-eyebrow">
            <span className="models-eyebrow-dot" />
            FIND YOUR BUSINESS MODEL
          </span>

          <h2>
            One Industry.
            <br />
            <span>Multiple Opportunities.</span>
          </h2>

          <div className="models-heading-underline" />

          <p>
            Whether you want to manufacture, distribute, sell, or build a
            brand, explore a business model aligned with your goals and
            resources.
          </p>
        </motion.div>

        {/* Business model cards */}
        <div className="models-grid">
          {businessModels.map((model, index) => {
            const Icon = model.icon;

            return (
              <motion.article
                className="model-card"
                key={model.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 30,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
              >
                {/* Image and number */}
                <div className="model-image">
                  <img
                    src={model.image}
                    alt={`${model.title} ${model.highlight} opportunity`}
                    loading="lazy"
                  />

                  <div className="model-image-overlay" />

                  {/* <span className="model-image-number">
                    {model.number}
                  </span> */}

                  <span className="model-image-icon">
                    <Icon size={25} strokeWidth={1.9} />
                  </span>
                </div>

                {/* Card content */}
                <div className="model-content">
                  <span className="model-subtitle">
                    {model.subtitle}
                  </span>

                  <h3>
                    {model.title}
                    <br />
                    <span>{model.highlight}</span>
                  </h3>

                  <p className="model-description">
                    {model.description}
                  </p>

                  <div className="model-divider" />

                  <ul className="model-features">
                    {model.features.map((feature) => (
                      <li key={feature}>
                        <span className="model-feature-check">
                          <CheckCircle2
                            size={13}
                            strokeWidth={2.5}
                          />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="model-link"
                    aria-label={`Discuss ${model.title} ${model.highlight}`}
                  >
                    <span>Discuss This Model</span>

                    <span className="model-link-icon">
                      <ArrowUpRight size={18} />
                    </span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom call to action */}
        <motion.div
          className="models-bottom"
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="models-bottom-icon">
            <Target size={30} strokeWidth={1.8} />
          </div>

          <div className="models-bottom-copy">
            <span>NOT SURE WHERE TO START?</span>

            <h3>
              Let’s identify{" "}
              <span>the right opportunity for you.</span>
            </h3>

            <p>
              Discuss your business goals and explore the available options.
            </p>
          </div>

          <a href="#contact" className="models-cta">
            Explore Your Options
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default BusinessModels;
