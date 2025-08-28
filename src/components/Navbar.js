import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuopen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-[#43cea2] to-[#185a9d] shadow-lg fixed z-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            {/* LOGO AND links */}
            <div className="flex items-center space-x-2">
              <div className="">
                <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg ">
                  ES
                </span>
              </div>
              <div className="">
                <span className="text-white font-semibold text-lg px-2 ">
                  Ebaad Syed
                </span>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:block">
              <ul className="flex space-x-8 list-none ">
                <li>
                  <a
                    href="#"
                    className="text-white hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium scroll-mt-20"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-white hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium scroll-mt-20"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a className="text-white hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                    Project
                  </a>
                </li>
                <li>
                  <a className="text-white hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuopen)}
                className="text-white hover:opacity-80 focus:outline-none transition-color duration-200"
              >
                {isMenuopen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuopen && (
          <div className="lg:hidden bg-gradient-to-r from-[#43cea2] to-[#185a9d]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex justify-center flex-col items-center">
              <a
                href="#"
                className=" text-white px-3 py-2 rounded-md hover:opacity-80 transition-color duration-200 block scroll-mt-20"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-white px-3 py-2 rounded-md hover:opacity-80 transition-color duration-200 block scroll-mt-20"
              >
                Skills
              </a>
              <a className="text-white px-3 py-2 rounded-md hover:opacity-80 transition-color duration-200 block scroll-mt-20">
                Projects
              </a>
              <a className="text-white px-3 py-2 rounded-md hover:opacity-80 transition-color duration-200 block">
                Contacts
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
