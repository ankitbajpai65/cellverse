import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section
      className="bg-navbarBg py-6 px-4 sm:px-8 sticky top-0 z-50"
      style={{
        background:
          "linear-gradient(90deg, rgba(13,30,36,1) 0%, rgba(60,75,85,1) 50%)",
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <img src="/logo.svg" alt="cellverse_logo" className="w-32" />
        </div>
        <div className="hidden md:flex w-1/2 justify-around">
          <ul className="flex list-none gap-6 lg:gap-12">
            <li className="text-white text-sm">Home</li>
            <li className="text-white text-sm">About</li>
            <li className="text-white text-sm">People</li>
            <li className="text-white text-sm">Product</li>
            <li className="text-white text-sm">Innovation</li>
          </ul>
        </div>
        <div className="">
          <button className="px-5 py-1 text-button text-sm border border-button rounded-md">
            Hiring
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 list-none items-center">
            <li className="text-white text-sm">Home</li>
            <li className="text-white text-sm">About</li>
            <li className="text-white text-sm">People</li>
            <li className="text-white text-sm">Product</li>
            <li className="text-white text-sm">Innovation</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
