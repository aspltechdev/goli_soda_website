import { motion, useReducedMotion } from "framer-motion";
import {
  Lightbulb,
  Factory,
  Truck,
  Store,
  Handshake,
  ArrowUpRight,
  Target,
} from "lucide-react";

import "./Audience.css";
import audienceBg from "../assets/audiencebg.png";

// Business opportunities - UPDATED WITH YOUR NEW ENHANCED GOLI SODA IMAGES
const opportunities = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Aspiring Entrepreneurs",
    label: "START YOUR JOURNEY",
    description:
      "Turn your business idea into a practical plan and explore opportunities in the traditional beverage industry.",
    image: "/1.jpg",
  },
  {
    number: "02",
    icon: Factory,
    title: "Manufacturing Investors",
    label: "BUILD YOUR FOUNDATION",
    description:
      "Explore production facilities, bottling equipment, packaging, and manufacturing operations.",
    image: "/2.jpg",
  },
  {
    number: "03",
    icon: Truck,
    title: "Distributors & Stockists",
    label: "REACH MORE MARKETS",
    description:
      "Develop retailer relationships, plan territories, and explore new distribution markets.",
    image: "/3.jpg",
  },
  {
    number: "04",
    icon: Store,
    title: "Retail Business Owners",
    label: "CONNECT WITH CUSTOMERS",
    description:
      "Explore product availability, stock planning, and business opportunities in your local market.",
    image: "/4.jpg",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Existing Business Owners",
    label: "EXPLORE EXPANSION",
    description:
      "Evaluate partnerships, private-label possibilities, beverage brands, and business expansion.",
    image: "/5.jpg",
  },
];

function Audience() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className="audience-section"
      id="audience"
      style={{
        "--audience-bg-image": `url("${audienceBg}")`,
      }}
    >
      {/* Decorative section background */}
      <div className="audience-background" aria-hidden="true" />
      <div className="audience-background-overlay" aria-hidden="true" />

      <div className="audience-container">
        {/* Hero heading and floating bottle artwork */}
        <div className="audience-hero">
          <motion.div
            className="audience-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.12,
                },
              },
            }}
          >
            <motion.span
              className="audience-eyebrow"
              variants={reveal}
            >
              <span className="audience-eyebrow-dot" />
              WHO CAN BENEFIT
            </motion.span>

            <motion.h2 variants={reveal}>
              One Industry.
              <br />
              <span>Five Ways to Grow.</span>
            </motion.h2>

            <motion.div
              className="audience-underline"
              variants={reveal}
            />

            <motion.p variants={reveal}>
              From starting your first venture to expanding an established
              business, discover the opportunities waiting across the
              Goli Soda industry.
            </motion.p>

            <motion.a
              href="#contact"
              className="audience-hero-cta"
              variants={reveal}
            >
              Find Your Business Opportunity
              <ArrowUpRight size={19} />
            </motion.a>
          </motion.div>

          {/* Floating product artwork — no rectangular image card */}
          <motion.div
            className="audience-product-scene"
            aria-hidden="true"
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            <div className="audience-scene-glow" />
          </motion.div>
        </div>

        {/* Business opportunity cards */}
        <div className="audience-grid">
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="audience-card"
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={reveal}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="audience-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <span className="audience-card-number">
                    {item.number}
                  </span>

                  <span className="audience-card-icon">
                    <Icon size={24} strokeWidth={1.9} />
                  </span>
                </div>

                <div className="audience-card-content">
                  <span className="audience-card-label">
                    {item.label}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a
                    href="#contact"
                    className="audience-card-link"
                    aria-label={`Discuss opportunities for ${item.title}`}
                  >
                    Discuss This Opportunity
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom enquiry banner */}
        <motion.div
          className="audience-bottom-cta"
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="audience-cta-icon">
            <Target size={27} />
          </div>

          <div className="audience-cta-copy">
            <span>READY TO TAKE THE NEXT STEP?</span>

            <h3>
              Let's build your Goli Soda business journey.
            </h3>
          </div>

          <a
            href="#contact"
            className="audience-bottom-button"
          >
            Talk to Mr. Pandurangan
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Audience;