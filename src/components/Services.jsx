
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Factory,
//   ClipboardList,
//   Truck,
//   Store,
//   Handshake,
//   TrendingUp,
// } from "lucide-react";

// import "./Services.css";

// const services = [
//   {
//     number: "01",
//     icon: ClipboardList,
//     title: "Business Planning",
//     description:
//       "Develop a clear business roadmap with planning, investment considerations, operational priorities, and growth objectives.",
//     tag: "START WITH A PLAN",
//   },
//   {
//     number: "02",
//     icon: Factory,
//     title: "Manufacturing Setup",
//     description:
//       "Understand production requirements, facility planning, equipment needs, and operational workflows for a Goli Soda business.",
//     tag: "BUILD YOUR FOUNDATION",
//   },
//   {
//     number: "03",
//     icon: Truck,
//     title: "Distribution Network",
//     description:
//       "Plan a structured supply chain connecting manufacturers, super stockists, distributors, retailers, and customers.",
//     tag: "REACH MORE MARKETS",
//   },
//   {
//     number: "04",
//     icon: Store,
//     title: "Retail Business Strategy",
//     description:
//       "Explore retail opportunities, outlet planning, product availability, and local market development.",
//     tag: "CONNECT WITH CUSTOMERS",
//   },
//   {
//     number: "05",
//     icon: Handshake,
//     title: "Franchise Development",
//     description:
//       "Explore franchise structures, partner responsibilities, operating standards, and expansion opportunities.",
//     tag: "GROW THROUGH PARTNERS",
//   },
//   {
//     number: "06",
//     icon: TrendingUp,
//     title: "Brand & Business Growth",
//     description:
//       "Develop strategies for brand positioning, private-label opportunities, market entry, and sustainable business expansion.",
//     tag: "PLAN YOUR NEXT STAGE",
//   },
// ];

// function Services() {
//   return (
//     <section className="services-section" id="services">
//       <div className="services-container">
//         {/* Section Heading */}
//         <motion.div
//           className="services-heading"
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="services-eyebrow">
//             <span />
//             WHAT WE HELP YOU BUILD
//           </span>

//           <h2>
//             Business Solutions for
//             <br />
//             <span>Every Stage of Growth.</span>
//           </h2>

//           <p>
//             From your first business idea to building a distribution
//             network, explore consultancy services designed around the
//             opportunities in the Goli Soda industry.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="services-grid">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <motion.article
//                 className="service-card"
//                 key={service.number}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.08,
//                 }}
//               >
//                 <div className="service-card-top">
//                   <span className="service-icon">
//                     <Icon size={25} strokeWidth={1.8} />
//                   </span>

//                   <span className="service-number">
//                     {service.number}
//                   </span>
//                 </div>

//                 <span className="service-tag">{service.tag}</span>

//                 <h3>{service.title}</h3>

//                 <p>{service.description}</p>

//                 <a
//                   href="#contact"
//                   className="service-link"
//                   aria-label={`Enquire about ${service.title}`}
//                 >
//                   Discuss This Service
//                   <ArrowUpRight size={17} />
//                 </a>
//               </motion.article>
//             );
//           })}
//         </div>

//         {/* Bottom Note */}
//         <motion.div
//           className="services-bottom"
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="services-bottom-icon">
//             <Handshake size={22} />
//           </span>

//           <p>
//             Have a specific business idea?
//             <span> Let's discuss the right model for your goals.</span>
//           </p>

//           <a href="#contact">
//             Talk to Us <ArrowUpRight size={17} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Services;



import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ClipboardList,
  Factory,
  Truck,
  Store,
  Handshake,
  TrendingUp,
} from "lucide-react";

import "./Services.css";
import servicesBg from "../assets/servicesbg.png";
import ser1 from "../assets/businness.png";
import ser2 from "../assets/manufacture.png";
import ser3 from "../assets/distribution.png";
import ser4 from "../assets/ser4.png";
import ser5 from "../assets/ser5.png";
import ser6 from "../assets/ser6.png";

const services = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Business Planning",
    description:
      "Develop a clear business roadmap with planning, investment considerations, operational priorities, and growth objectives.",
    tag: "START WITH A PLAN",
    image:
      ser1,
  },
  {
    number: "02",
    icon: Factory,
    title: "Manufacturing Setup",
    description:
      "Understand production requirements, facility planning, equipment needs, and operational workflows for a Goli Soda business.",
    tag: "BUILD YOUR FOUNDATION",
    image:
      ser2,
  },
  {
    number: "03",
    icon: Truck,
    title: "Distribution Network",
    description:
      "Plan a structured supply chain connecting manufacturers, super stockists, distributors, retailers, and customers.",
    tag: "REACH MORE MARKETS",
    image:
      ser3,
  },
  {
    number: "04",
    icon: Store,
    title: "Retail Business Strategy",
    description:
      "Explore retail opportunities, outlet planning, product availability, and local market development.",
    tag: "CONNECT WITH CUSTOMERS",
    image:
     ser4,
  },
  {
    number: "05",
    icon: Handshake,
    title: "Franchise Development",
    description:
      "Explore franchise structures, partner responsibilities, operating standards, and expansion opportunities.",
    tag: "GROW THROUGH PARTNERS",
    image:
      ser5,
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Brand & Business Growth",
    description:
      "Develop strategies for brand positioning, private-label opportunities, market entry, and sustainable business expansion.",
    tag: "PLAN YOUR NEXT STAGE",
    image:
      ser6,
  },
];

function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="services-section"
      id="services"
      style={{ "--services-bg-image": `url(${servicesBg})` }}
    >
      {/* Background artwork */}
      <div className="services-background" aria-hidden="true" />
      <div className="services-background-overlay" aria-hidden="true" />

      <div className="services-container">
        {/* Section heading */}
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <span className="services-eyebrow">
            <span className="services-eyebrow-dot" />
            WHAT WE HELP YOU BUILD
          </span>

          <h2>
            Business Solutions for
            <br />
            <span>Every Stage of Growth.</span>
          </h2>

          <div className="services-title-underline" />

          <p>
            From your first business idea to building a distribution
            network, explore consultancy services designed around the
            opportunities in the Goli Soda industry.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 25,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
              >
                {/* Decorative image on the right */}
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                  />
                </div>

                <div className="service-card-content">
                  <div className="service-card-top">
                    <span className="service-icon">
                      <Icon size={24} strokeWidth={1.9} />
                    </span>

                    <span className="service-number">
                      {service.number}
                    </span>
                  </div>

                  <span className="service-tag">{service.tag}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href="#contact"
                    className="service-link"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Discuss This Service
                    <span className="service-link-icon">
                      <ArrowUpRight size={17} />
                    </span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="services-bottom"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="services-bottom-icon">
            <Handshake size={24} />
          </span>

          <div className="services-bottom-copy">
            <span>Have a specific business idea?</span>
            <strong>
              Let's discuss the right model for your goals.
            </strong>
          </div>

          <a href="#contact" className="services-bottom-link">
            Talk to Us
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
