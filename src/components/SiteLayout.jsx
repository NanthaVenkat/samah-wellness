import { Link, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, User } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "./Button";

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
    <Link
      to="/home"
      className="flex flex-col gap-0.5"
      aria-label="Samah Wellness House home"
    >
      <span className="text-[clamp(2rem,3.2vw,3rem)] tracking-[0.16em] lowercase text-[#7b4316] leading-[0.95] font-outfit">
        samah
      </span>
      <span className="font-sans text-[0.58rem] tracking-[0.28em] text-[rgba(123,67,22,0.76)] uppercase">
        WELLNESS HOUSE
      </span>
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // scrolling up > 40px OR near top
      else if (lastScrollY - currentScrollY > 40 || currentScrollY < 10) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const headerVisible = isVisible || open;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-30
        backdrop-blur-md bg-[rgba(248,244,233,0.88)] border-b border-[rgba(61,64,25,0.12)]
        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${headerVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="shell flex items-center justify-between gap-4 min-h-[5rem]">
        <BrandMark />

        <button
          className="md:hidden text-olive"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <Menu size={22} />
        </button>

        <div
          className={`
          fixed inset-0 top-[5rem] bg-bg-soft flex flex-col p-8 gap-8 transition-transform duration-500 md:static md:flex md:flex-row md:items-center md:justify-end md:p-0 md:bg-transparent md:translate-x-0
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-[1.35rem]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-[0.22rem] font-sans text-[0.95rem] text-muted hover:text-olive transition-colors"
              >
                {link.label}
                {link.hasChevron ? <ChevronDown size={14} /> : null}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-[0.75rem]">
            <Button
              text="Log In"
              href="#login"
              iconPrefix={User}
              outline
              rounded
            />
            <Button
              text="Book a Consultation"
              href="#contact"
              brownishPink
              rounded
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-[clamp(4rem,9vw,7.5rem)] bg-bg" id="contact">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between pb-8 border-b border-line">
        <BrandMark />
        <div className="flex flex-wrap gap-6 font-sans">
          <a
            href="/home#stories"
            className="hover:text-olive transition-colors"
          >
            Blog
          </a>
          <a href="/offerings" className="hover:text-olive transition-colors">
            Offerings
          </a>
          <a href="/memberships" className="hover:text-olive transition-colors">
            Memberships
          </a>
        </div>
      </div>

      <div className="shell grid gap-12 pt-12 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-outfit text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] text-[#7b4316] balance">
            Samah is virtual care. Nationwide.
          </h2>
          <div className="flex gap-4">
            {["Fb", "Ig", "In", "Yt"].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center font-sans text-sm hover:bg-olive hover:text-brand-white transition-all"
              >
                {social}
              </a>
            ))}
          </div>
          <div className="flex flex-col w-full max-w-md gap-4">
            <label className="flex flex-col gap-2">
              <span className="font-sans text-xs uppercase tracking-widest text-muted">
                Email Address
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3.5 rounded-xl border border-[rgba(72,51,20,0.3)] bg-[rgba(255,252,244,0.65)]"
              />
            </label>
            <Button
              text="Subscribe"
              iconSuffix={ArrowRight}
              secondary
              rounded
              fullWidth
            />
          </div>
          <p className="font-sans leading-relaxed text-muted max-w-md">
            Here, body work, nervous system support, emotional wellbeing and
            community are woven together into one thoughtful ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h3 className="font-outfit text-lg">Explore</h3>
            <div className="flex flex-col gap-2 font-sans text-muted">
              <a href="/home#about" className="hover:text-olive">
                Our philosophy
              </a>
              <a href="/home#events" className="hover:text-olive">
                Events
              </a>
              <a href="/home#community" className="hover:text-olive">
                Community
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-outfit text-lg">Programs</h3>
            <div className="flex flex-col gap-2 font-sans text-muted">
              <a href="/offerings" className="hover:text-olive">
                Structured offerings
              </a>
              <a href="/memberships" className="hover:text-olive">
                Membership paths
              </a>
              <a href="/home#pathways" className="hover:text-olive">
                Pathways
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-outfit text-lg">Support</h3>
            <div className="flex flex-col gap-2 font-sans text-muted">
              <a href="/home#contact" className="hover:text-olive">
                Speak to our team
              </a>
              <a href="#privacy" className="hover:text-olive">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-olive">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="shell flex flex-col gap-4 items-center justify-between pt-12 mt-12 border-t border-line md:flex-row font-sans text-sm text-muted">
        <span>(c) 2026 Samah Wellness. All Rights Reserved.</span>
        <div className="flex gap-6">
          <a href="#terms" className="hover:text-olive">
            Terms of Service
          </a>
          <a href="#privacy" className="hover:text-olive">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  const location = useLocation();

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex-grow pt-20"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
