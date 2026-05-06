import SamahLogo from "../assets/images/samah-wellness-logo.svg";
import { Link } from "react-router-dom";
import { ChevronDown, UserRound, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header border-b border-[#3A391B80] p-2 relative z-50 bg-white font-montserrat font-medium">
      <nav className="container flex items-center mx-auto py-3 font-montserrat font-medium">

        {/* Logo */}
        <Link to="/" className="mr-8">
          <img src={SamahLogo} alt="Samah Wellness" width={120} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-5 text-[#323C26]">
          <li><Link>About</Link></li>
          <li>
            <Link className="flex items-center gap-1">
              Offerings <ChevronDown size={18} />
            </Link>
          </li>
          <li><Link>Memberships</Link></li>
          <li><Link>Pathways</Link></li>
          <li><Link>Blog</Link></li>
          <li><Link>Contact Us</Link></li>
        </ul>

        {/* Desktop Right */}
        <ul className="hidden lg:flex items-center gap-5 ml-auto text-[#323C26]">
          <li>
            <Link className="flex items-center gap-1 py-2 px-4 border border-[#3A391B] rounded-full">
              <UserRound fill="#3A391B" stroke={0} />
              Log In
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1 bg-[#BF7F81] rounded-full text-white py-2 px-4">
              <UserRound fill="#FFFFFF" stroke={0} />
              Book a Consultation
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-[#323C26] ml-auto"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full bg-white z-40
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between p-4 border-b border-[#eee]">
          <img src={SamahLogo} alt="logo" width={100} />
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Menu items */}
        <div className="flex flex-col items-start gap-6 p-6 text-lg text-[#323C26]">
          <Link onClick={() => setOpen(false)}>About</Link>
          <Link onClick={() => setOpen(false)} className="flex items-center gap-1">
            Offerings <ChevronDown size={18} />
          </Link>
          <Link onClick={() => setOpen(false)}>Memberships</Link>
          <Link onClick={() => setOpen(false)}>Pathways</Link>
          <Link onClick={() => setOpen(false)}>Blog</Link>
          <Link onClick={() => setOpen(false)}>Contact Us</Link>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full mt-4">
            <Link className="flex justify-center items-center gap-2 py-3 border border-[#3A391B] rounded-full">
              <UserRound fill="#3A391B" stroke={0} />
              Log In
            </Link>
            <Link className="flex justify-center items-center gap-2 py-3 bg-[#BF7F81] text-white rounded-full">
              <UserRound fill="#fff" stroke={0} />
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}