import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useDarkMode } from "../../context/DarkModeContext";
import Button from "../Elements/Button/Button";

const Navbar = (props) => {
  const { variant = "" } = props;
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const [isOpen, setIsOpen] = useState(false);

  const hoverTextColor = isDarkMode
    ? "hover:text-red-500"
    : "hover:text-red-600";
  return (
    <nav className={`w-full sticky top-0 ${variant} z-10`}>
      <div className=" flex justify-between w-full px-4 py-3 items-center">
        {/* LEFT SECTION */}
        <div className="hidden md:flex gap-4 w-1/3 ">
          <Link to="/" className={hoverTextColor}>
            Home
          </Link>
          <Link to="/popular" className={hoverTextColor}>
            Popular
          </Link>
          <Link to="/" className={hoverTextColor}>
            Trending
          </Link>
        </div>

        {/* BRAND LOGO*/}
        <Link
          to="/"
          className={`${hoverTextColor} hover:scale-125  block ease-in-out transition-transform  duration-300 text-xxl font-bold`}
        >
          YUKA MOVIES
        </Link>

        {/* === Right Section (Button & Mobile Menu) === */}
        <div className={`flex justify-end w-1/3`}>
          <Button
            variant={`${
              isDarkMode ? "bg-slate-200 text-black" : "bg-slate-800 text-white"
            } rounded-md transition ease-in-out duration-300 hover:shadow-red-500/70 hover:shadow-lg`}
            onClick={toggleDarkMode}
          >
            <img
              src={`/assets/images/theme/${
                isDarkMode ? "light_mode.png" : "dark_mode.png"
              }`}
              className={`${
                isDarkMode ? "rotate-180" : "invert rotate-0"
              } transition-transform duration-300 w-6 h-6`}
              alt=""
            />
          </Button>

          {/* Mobile Menu Toggle  */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="md:hidden ml-4 p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobille menu (hidden on Larger screen) */}

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-slate-700 text-white text-center py-3`}
      >
        <Link
          to="/"
          className="block py-2 hover:bg-slate-600"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/popular"
          className="block py-2 hover:bg-slate-600"
          onClick={() => setIsOpen(false)}
        >
          Popular
        </Link>
        <Link
          to="/trending"
          className="block py-2 hover:bg-slate-600"
          onClick={() => setIsOpen(false)}
        >
          Trending
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
