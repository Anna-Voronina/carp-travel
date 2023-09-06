import { navLinks } from "@data";
import { Link } from "react-scroll";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleMenuClose = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={`md:hidden ${
        menuOpen ? "visible opacity-100" : "invisible opacity-0"
      } absolute top-0 left-0 min-h-screen min-w-full z-50 px-5 pt-[170px] pb-5 backdrop-blur-[25px] bg-menuBg transition-all duration-300`}
    >
      <button
        type="button"
        className="absolute top-[43px] right-5 text-white text-sm font-normal tracking-[1.4px]"
        onClick={handleMenuClose}
      >
        CLOSE
      </button>
      <nav>
        <ul className="flex flex-col gap-y-12 justify-center items-center text-white text-lg font-normal tracking-[1.8px] leading-tight">
          {navLinks.map(({ link, label }) => (
            <li key={label}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                className="link"
                onClick={handleMenuClose}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
