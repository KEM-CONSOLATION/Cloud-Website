import { useEffect, useState } from "react";
import Logo from "../assets/Cloud_Integrated_Logo.svg";
import Logo2 from "../assets/Logo2.svg";
import { CloseLineIcon, Menu1LineIcon } from "../assets/icons";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  // const [scrollingUp, setScrollingUp] = useState(false);
  // const [scrolledPastInitial, setScrolledPastInitial] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setScrollingUp(currentScrollY < scrollY);
  //     setScrollY(currentScrollY);
  //     setScrolledPastInitial(currentScrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div
      className={`py-2  z-50 top-0 transition-all duration-300 ease-in-out font-Manrope ${
        !open
          ? "h-screen bg-white"
          : // : !scrollingUp || scrolledPastInitial
            // ? pathName === "/about" ||
            //   pathName === "/careers" ||
            //   pathName === "/contact"
            //   ? "bg-[#F1EDE8]"
            //   : pathName === "/partners"
            //   ? "bg-[#020406]"
            //   : "bg-gradient-to-r from-[#071A45] to-[#13594F]"
            "bg-transparent"
      }`}
    >
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40">
        <div className=" flex flex-col md:flex md:flex-row justify-between md:items-center">
          <div className="w-[150px] md:w-[200px] mt-5 mb-[32px] md:mb-0 md:mt-0">
            <Link to="/">
              <img
                src={
                  pathName === "/about" ||
                  pathName === "/careers" ||
                  pathName === "/terms" ||
                  pathName === "/privacy" ||
                  pathName === "/contact" ||
                  !open
                    ? Logo2
                    : Logo
                }
                alt="Logo"
              />
            </Link>
          </div>
          <div
            className={`   md:flex md:items-center ${
              pathName === "/about" ||
              pathName === "/careers" ||
              pathName === "/terms" ||
              pathName === "/privacy" ||
              pathName === "/contact"
                ? "text-[#061C60]"
                : !open
                ? "text-[#061C60]"
                : "text-white"
            } font-[400] ${!open ? "block h-full" : "hidden md:block"}`}
          >
            <ul className="grid  md:flex gap-5 my-5 md:gap-10 list-none text-[14px] lg:text-[16px] mt-[32px] font-SatoshiMedium">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[16px] text-[#667085] font-[700]"
                    : isActive
                    ? "text-[14px] lg:text-[16px] text-[#66E6C1] font-[700]"
                    : ""
                }
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[16px] text-[#667085] font-[700]"
                    : isActive
                    ? "text-[14px] lg:text-[16px] text-[#66E6C1] font-[700]"
                    : ""
                }
              >
                <li>Services</li>
              </NavLink>
              <NavLink
                to="/partners"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[16px] text-[#667085] font-[700]"
                    : isActive
                    ? "text-[14px] lg:text-[16px] text-[#66E6C1] font-[700]"
                    : ""
                }
              >
                <li>Partners</li>
              </NavLink>
              <NavLink
                to="/careers"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[16px] text-[#667085] font-[700]"
                    : isActive
                    ? "text-[14px] lg:text-[16px] text-[#66E6C1] font-[700]"
                    : ""
                }
              >
                <li>Careers</li>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[16px] text-[#667085] font-[700]"
                    : isActive
                    ? "text-[14px] lg:text-[16px] text-[#66E6C1] font-[700]"
                    : ""
                }
              >
                <li>Contact Us</li>
              </NavLink>
            </ul>
          </div>
          {open === true ? (
            <div
              className={`absolute top-[25px] right-4 md:hidden cursor-pointer ${
                pathName === "/about" ||
                pathName === "/careers" ||
                pathName === "/contact" ||
                !open
                  ? "text-[#061C60]"
                  : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              <Menu1LineIcon />
            </div>
          ) : (
            <div
              className={`absolute top-[25px] right-4 md:hidden cursor-pointer ${
                pathName === "/about" ||
                pathName === "/careers" ||
                pathName === "/contact" ||
                !open
                  ? "text-[#061C60]"
                  : "text-white"
              }`}
              onClick={() => setOpen(true)}
            >
              <CloseLineIcon />
            </div>
          )}

          {open === false && (
            <Link to="/contact">
              <p className=" w-full  md:hidden text-center mt-[24px] px-[28px] py-[16px] rounded-[8px] bg-[#0E42E4] text-[#ffffff] md:text-[#141414] font-IBM text-[18px] font-[500]">
                Partner with us
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
