
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Factory,
  Truck,
  Store,
  Sparkles,
} from "lucide-react";

import "./ContactForm.css";

const WHATSAPP_NUMBER = "919876543210"; // Replace with your actual WhatsApp number

const contactBenefits = [
  "Discuss your business goals",
  "Explore the right business model",
  "Understand your next steps",
];

const businessOptions = [
  "Manufacturing",
  "Distribution",
  "Retail Business",
  "Franchise",
  "Private Label",
  "Business Planning",
  "Other",
];

function ContactForm() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessModel: "",
    investmentRange: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    const message = [
      "Hello Mr. Pandurangan!",
      "",
      "I would like to enquire about Goli Soda Business Consultancy.",
      "",
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Email: ${formData.email.trim() || "Not provided"}`,
      `Business Model: ${formData.businessModel || "Not selected"}`,
      `Investment Range: ${formData.investmentRange || "Not specified"}`,
      `Requirements: ${formData.message.trim() || "Not specified"}`,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section" id="contact">
      {/* Decorative background */}
      <div className="contact-background" aria-hidden="true">
        <span className="contact-orb contact-orb-one" />
        <span className="contact-orb contact-orb-two" />
        <span className="contact-bubble contact-bubble-one" />
        <span className="contact-bubble contact-bubble-two" />
      </div>

      <div className="contact-container">
        {/* LEFT: Contact information */}
        <motion.div
          className="contact-copy"
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -30,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot" />
            LET'S CONNECT
          </span>

          <h2>
            Let's Discuss
            <br />
            <span>Your Business Idea.</span>
          </h2>

          <div className="contact-heading-underline" />

          <p className="contact-description">
            Have a vision for a Goli Soda manufacturing unit, distribution
            business, retail outlet, or franchise? Tell us about your plans.
            Let's explore the right opportunity for you.
          </p>

          {/* Benefits */}
          <div className="contact-benefits">
            {contactBenefits.map((benefit, index) => (
              <motion.div
                className="contact-benefit"
                key={benefit}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : -12,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
              >
                <span className="contact-benefit-icon">
                  <CheckCircle2 size={17} />
                </span>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Business model highlights */}
          <div className="contact-models">
            <div className="contact-model">
              <span><Factory size={20} /></span>
              <small>Manufacturing</small>
            </div>

            <div className="contact-model">
              <span><Truck size={20} /></span>
              <small>Distribution</small>
            </div>

            <div className="contact-model">
              <span><Store size={20} /></span>
              <small>Retail & Franchise</small>
            </div>
          </div>

          {/* Contact details */}
          <div className="contact-details">
            <a
              className="contact-detail"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-detail-icon">
                <MessageCircle size={21} />
              </span>

              <span className="contact-detail-text">
                <small>WHATSAPP ENQUIRY</small>
                <strong>Start a Conversation</strong>
              </span>

              <ArrowUpRight className="contact-detail-arrow" size={19} />
            </a>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <Phone size={21} />
              </span>

              <span className="contact-detail-text">
                <small>CONSULTANCY</small>
                <strong>Connect with Mr. Pandurangan</strong>
              </span>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={21} />
              </span>

              <span className="contact-detail-text">
                <small>BUSINESS FOCUS</small>
                <strong>Goli Soda Industry</strong>
              </span>
            </div>
          </div>

          <div className="contact-trust-note">
            <Sparkles size={16} />
            Every successful business starts with a conversation.
          </div>
        </motion.div>

        {/* RIGHT: Enquiry form */}
        <motion.div
          className="contact-form-wrapper"
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 30,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="contact-form-top">
            <div className="contact-form-heading">
              <span className="contact-form-icon">
                <Send size={22} />
              </span>

              <div>
                <span className="contact-form-kicker">
                  LET'S TALK BUSINESS
                </span>
                <h3>Business Enquiry</h3>
                <p>Tell us what you're planning to build.</p>
              </div>
            </div>

            <span className="contact-form-step">01 / 01</span>
          </div>

          <div className="contact-form-divider" />

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">
                Full Name <span>*</span>
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-phone">
                  Phone Number <span>*</span>
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Your mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-model">Business Interest</label>

              <select
                id="contact-model"
                name="businessModel"
                value={formData.businessModel}
                onChange={handleChange}
              >
                <option value="">Select your business model</option>

                {businessOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-investment">
                Approximate Investment Range
              </label>

              <select
                id="contact-investment"
                name="investmentRange"
                value={formData.investmentRange}
                onChange={handleChange}
              >
                <option value="">Select if known (optional)</option>
                <option value="Below ₹2 lakh">Below ₹2 lakh</option>
                <option value="₹2 lakh – ₹5 lakh">₹2 lakh – ₹5 lakh</option>
                <option value="₹5 lakh – ₹10 lakh">₹5 lakh – ₹10 lakh</option>
                <option value="₹10 lakh – ₹25 lakh">₹10 lakh – ₹25 lakh</option>
                <option value="Above ₹25 lakh">Above ₹25 lakh</option>
                <option value="Need guidance">Need guidance</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Tell Us About Your Idea</label>

              <textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder="Share your location, business idea, or goals..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p className="contact-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="contact-submit">
              <span>Send Enquiry via WhatsApp</span>
              <span className="contact-submit-icon">
                <ArrowUpRight size={20} />
              </span>
            </button>

            <p className="contact-form-note">
              <MessageCircle size={14} />
              Your details will be added to a WhatsApp message for you to
              review and send.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;
