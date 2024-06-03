import { useEffect, useState } from "react";
import Logo from "../assets/Cloud_Integrated_Logo.svg";
import Logo2 from "../assets/Logo2.svg";
import { CloseLineIcon, Menu1LineIcon } from "../assets/icons";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [scrolledPastInitial, setScrolledPastInitial] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < scrollY);
      setScrollY(currentScrollY);
      setScrolledPastInitial(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  //   const location = useLocation();
  //   const routesToHide = [
  //     "/tenant-application",
  //     "/agent-application",
  //     "/landlord-application",
  //     "/tenant-payment",
  //   ];

  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div
      className={`py-2 sticky z-50 top-0 transition-all duration-300 ease-in-out font-Manrope ${
        !scrollingUp || scrolledPastInitial
          ? pathName === "/about" ||
            pathName === "/careers" ||
            pathName === "/contact"
            ? "bg-[#F1EDE8]"
            : pathName === "/partners"
            ? "bg-[#020406]"
            : "bg-[#071A45]"
          : "bg-transparent"
      }`}
    >
      <div className=" max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40">
        <div className="grid md:flex justify-between items-center">
          <div className="w-[150px] md:w-[200px] mt-5 md:mt-0">
            <Link to="/">
              <img
                src={
                  pathName === "/about" ||
                  pathName === "/careers" ||
                  pathName === "/contact"
                    ? Logo2
                    : Logo
                }
                alt=""
              />
            </Link>
          </div>
          <div
            className={`md:flex md:items-center ${
              pathName === "/about" ||
              pathName === "/careers" ||
              pathName === "/contact"
                ? " text-[#061C60]"
                : "text-white"
            }  font-[400] ${!open ? "block" : "hidden"}`}
          >
            <ul className="grid md:flex gap-5 my-5 md:gap-10 list-none text-[14px] lg:text-[16px]">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[16px] text-[#667085] font-[700] "
                    : isActive
                    ? "text-[14px] lg:text-[16px] text-[#FF627E] font-[700] "
                    : ""
                }
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[16px] text-[#667085] font-[700] "
                    : isActive
                    ? "text-[14px] lg:text-[16px] text-[#FF627E] font-[700] "
                    : ""
                }
              >
                <li>Services</li>
              </NavLink>
              <NavLink
                to="/partners"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[16px] text-[#667085] font-[700] "
                    : isActive
                    ? "text-[14px] lg:text-[16px] text-[#FF627E] font-[700]  "
                    : ""
                }
              >
                <li>Partners</li>
              </NavLink>
              <NavLink
                to="/careers"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[16px] text-[#667085] font-[700]  "
                    : isActive
                    ? " text-[14px] lg:text-[16px] text-[#FF627E] font-[700]  "
                    : ""
                }
              >
                <li>Careers</li>
              </NavLink>
            </ul>
          </div>
          {open === true ? (
            <div
              className={`absolute top-[25px] right-4 md:hidden cursor-pointer ${
                pathName === "/about" ||
                pathName === "/careers" ||
                pathName === "/contact"
                  ? "text-[#061C60]"
                  : "text-white"
              }`}
              onClick={() => setopen(false)}
            >
              <Menu1LineIcon />
            </div>
          ) : (
            <div
              className={`absolute top-[25px] right-4 md:hidden cursor-pointer ${
                pathName === "/about" ||
                pathName === "/careers" ||
                pathName === "/contact"
                  ? "text-[#061C60]"
                  : "text-white"
              }`}
              onClick={() => setopen(true)}
            >
              <CloseLineIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
