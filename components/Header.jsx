import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-start px-5 py-9">
        <a href="/">
          <Image
            src="/assets/icons/logo.svg"
            width={61}
            height={33}
            alt="CarpTravel logo"
          />
        </a>

        <button
          type="button"
          className="text-white text-sm leading-tight font-normal tracking-[1.4px]"
        >
          MENU
        </button>
      </nav>
    </header>
  );
};

export default Header;
