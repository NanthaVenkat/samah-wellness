import { Link, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, User } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/home#about" },
  { label: "Offerings", href: "/offerings", hasChevron: true },
  { label: "Memberships", href: "/memberships" },
  { label: "Pathways", href: "/home#pathways" },
  { label: "Blog", href: "/home#stories" },
  { label: "Contact Us", href: "/home#contact" },
];

function BrandMark() {
  return (
    <Link to="/home" className="brand-mark" aria-label="Samah Wellness House home">
      <span className="brand-mark__title">samah</span>
      <span className="brand-mark__subtitle">WELLNESS HOUSE</span>
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav shell">
        <BrandMark />

        <button className="mobile-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          <Menu size={22} />
        </button>

        <div className={`nav-cluster ${open ? "is-open" : ""}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
                {link.hasChevron ? <ChevronDown size={14} /> : null}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#login" className="button button--ghost">
              <User size={15} />
              Log In
            </motion.a>
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#contact" className="button button--blush">
              Book a Consultation
            </motion.a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell footer-top">
        <BrandMark />
        <div className="footer-links">
          <a href="/home#stories">Blog</a>
          <a href="/offerings">Offerings</a>
          <a href="/memberships">Memberships</a>
        </div>
      </div>

      <div className="shell footer-grid">
        <div className="footer-intro">
          <h2>Samah is virtual care. Nationwide.</h2>
          <div className="social-row">
            <a href="#facebook" aria-label="Facebook">Fb</a>
            <a href="#instagram" aria-label="Instagram">Ig</a>
            <a href="#linkedin" aria-label="LinkedIn">In</a>
            <a href="#youtube" aria-label="YouTube">Yt</a>
          </div>
          <label className="footer-subscribe">
            <span>Email Address</span>
            <input type="email" placeholder="Enter your email" />
          </label>
          <button className="button button--olive">
            Subscribe
            <ArrowRight size={16} />
          </button>
          <p>
            Here, body work, nervous system support, emotional wellbeing and community are woven
            together into one thoughtful ecosystem.
          </p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Explore</h3>
            <a href="/home#about">Our philosophy</a>
            <a href="/home#events">Events</a>
            <a href="/home#community">Community</a>
          </div>
          <div>
            <h3>Programs</h3>
            <a href="/offerings">Structured offerings</a>
            <a href="/memberships">Membership paths</a>
            <a href="/home#pathways">Pathways</a>
          </div>
          <div>
            <h3>Support</h3>
            <a href="/home#contact">Speak to our team</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>(c) 2026 Samah Wellness. All Rights Reserved.</span>
        <div>
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  const location = useLocation();

  return (
    <div className="site-shell">
      <Navbar key={location.pathname} />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
