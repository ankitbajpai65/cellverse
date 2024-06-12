import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavbtnClick = (text) => {
    if (text === "home") navigate("/");
    else navigate(`/${text}`);
    setIsMenuOpen(false);
  };

  return (
    <section
      className="py-6 px-4 sm:px-8 sticky top-0 z-50"
      style={{
        background:
          location.pathname === "/"
            ? "linear-gradient(90deg, rgba(13,30,36,1) 0%, rgba(60,75,85,1) 50%)"
            : "#E5E5E5",
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <img
            src={`${
              location.pathname === "/" ? "/logo.svg" : "/logo_black.svg"
            }`}
            alt="cellverse_logo"
            className="w-32"
          />
        </div>
        <div className="hidden md:flex w-1/2 justify-around">
          <ul
            className={`flex list-none gap-6 lg:gap-12 ${
              location.pathname === "/" ? "text-white" : "text-black"
            }`}
          >
            <li
              className="text-md cursor-pointer"
              onClick={() => handleNavbtnClick("home")}
              // onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="text-md cursor-pointer"
              onClick={() => handleNavbtnClick("about")}
            >
              About
            </li>
            <li
              className="text-md cursor-pointer"
              onClick={() => handleNavbtnClick("people")}
            >
              People
            </li>
            <li
              className="text-md cursor-pointer"
              onClick={() => handleNavbtnClick("product")}
            >
              Product
            </li>
            <li
              className="text-md cursor-pointer"
              onClick={() => handleNavbtnClick("innovation")}
            >
              Innovation
            </li>
          </ul>
        </div>
        <div className="">
          <button
            className={`px-5 py-1 text-md border border-button rounded-md ${
              location.pathname === "/" ? "text-button" : "text-white"
            } ${location.pathname !== "/" && "bg-button"}`}
          >
            Hiring
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`${
              location.pathname === "/" ? "text-white" : "text-black"
            } focus:outline-none`}
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
          <ul
            className={`flex flex-col gap-4 list-none items-center ${
              location.pathname === "/" ? "text-white" : "text-black"
            }`}
          >
            <li className="text-md" onClick={() => handleNavbtnClick("home")}>
              Home
            </li>
            <li className="text-md" onClick={() => handleNavbtnClick("about")}>
              About
            </li>
            <li className="text-md" onClick={() => handleNavbtnClick("people")}>
              People
            </li>
            <li
              className="text-md"
              onClick={() => handleNavbtnClick("product")}
            >
              Product
            </li>
            <li
              className="text-md"
              onClick={() => handleNavbtnClick("innovation")}
            >
              Innovation
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
