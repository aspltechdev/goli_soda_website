
import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  Search,
  ClipboardList,
  Factory,
  TrendingUp,
  ArrowUpRight,
  Rocket,
} from "lucide-react";

import "./Process.css";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Initial Discussion",
    description:
      "Share your business idea, goals, budget considerations, and vision for entering the Goli Soda industry.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85",
    label: "SHARE YOUR VISION",
  },
  {
    number: "02",
    icon: Search,
    title: "Opportunity Assessment",
    description:
      "Explore suitable business models, target markets, operational requirements, and potential challenges.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=85",
    label: "EXPLORE THE MARKET",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Business Planning",
    description:
      "Outline your business structure, resource requirements, distribution approach, and implementation priorities.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=85",
    label: "CREATE YOUR ROADMAP",
  },
  {
    number: "04",
    icon: Factory,
    title: "Setup Guidance",
    description:
      "Review practical considerations for manufacturing, retail operations, distribution, or franchise development.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=700&q=85",
    label: "BUILD YOUR BUSINESS",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Identify next steps for market development, business improvement, and potential expansion.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=85",
    label: "PLAN YOUR NEXT STAGE",
  },
];

function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="process-section" id="process">
      {/* Decorative background */}
      <div className="process-background" aria-hidden="true">
        <span className="process-bubble process-bubble-one" />
        <span className="process-bubble process-bubble-two" />
        <span className="process-bubble process-bubble-three" />
        <span className="process-background-orb" />
      </div>

      <div className="process-container">
        {/* Section heading */}
        <motion.div
          className="process-heading"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="process-eyebrow">
            <span className="process-eyebrow-dot" />
            OUR CONSULTANCY APPROACH
          </span>

          <h2>
            From Idea to
            <br />
            <span>Business Roadmap.</span>
          </h2>

          <div className="process-heading-underline" />

          <p>
            A structured approach to understanding your goals, evaluating
            opportunities, and planning your next steps in the Goli Soda
            business.
          </p>
        </motion.div>

        {/* Five-step journey */}
        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className="process-card"
                key={step.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
              >
                <div className="process-card-visual">
                  <img
                    className="process-card-image"
                    src={step.image}
                    alt=""
                    loading="lazy"
                  />

                  <div className="process-card-image-overlay" />

                  <span className="process-card-number">
                    {step.number}
                  </span>

                  <span className="process-icon">
                    <Icon size={24} strokeWidth={1.9} />
                  </span>
                </div>

                <div className="process-card-content">
                  <span className="process-card-label">
                    {step.label}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <a
                    href="#contact"
                    className="process-card-link"
                    aria-label={`Discuss ${step.title}`}
                  >
                    Learn More
                    <ArrowUpRight size={17} />
                  </a>
                </div>

                {index < steps.length - 1 && (
                  <span className="process-card-connector">
                    <ArrowUpRight size={19} />
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          className="process-bottom"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="process-bottom-icon">
            <Rocket size={29} strokeWidth={1.8} />
          </div>

          <div className="process-bottom-content">
            <span>YOUR BUSINESS JOURNEY STARTS HERE</span>
            <h3>Have an idea? Let's plan your next move.</h3>
          </div>

          <a href="#contact" className="process-cta">
            Start a Conversation
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
