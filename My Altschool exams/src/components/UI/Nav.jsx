import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-between items-end mb-32 xl:mb-44 w-[100%] ">
      <h1 className="logo font-black text-5xl text-mainBlack cursor-pointer">
        <Link to="/">K.K</Link>
      </h1>
        
      <ul className="nav-links  gap-20 hidden md:flex">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#919191cc" } : { color: "#000" }
          }
          to="/"
          className="navLinks text-2xl text-mainBlack font-semibold cursor-pointer"
        >
          Profile
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#919191cc" } : { color: "#000" }
          }
          to="/repositories"
          className="navLinks text-2xl text-mainBlack font-semibold cursor-pointer"
        >
          Repositories
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#919191cc" } : { color: "#000" }
          }
          to="/contact"
          className="navLinks text-2xl text-mainBlack font-semibold cursor-pointer"
        >
          Error Page
        </NavLink>
      </ul>
      <p
        className="nav-links  gap-20 flex md:hidden font-black text-5xl relative cursor-pointer"
        onClick={() => setMenu(true)}
      >
        ☰
      </p>
      {menu && (
        <div className="responsive-menu flex flex-col gap-32 p-16 w-[70%] bg-[#d3d3d3]  absolute right-0 top-0">
          <p
            className="nav-links gap-20 font-black text-5xl self-end cursor-pointer"
            onClick={() => setMenu(false)}
          >
            X
          </p>
          <ul className="nav-links h-[100dvh]  gap-20 flex flex-col  ">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#656464cc" } : { color: "#000" }
              }
              to="/"
              className="navLinks text-2xl text-mainBlack font-semibold cursor-pointer"
              onClick={() => setMenu(false)}
            >
              Profile
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#656464cc" } : { color: "#000" }
              }
              to="/repositories"
              className="navLinks text-2xl text-mainBlack font-semibold cursor-pointer"
              onClick={() => setMenu(false)}
            >
              Repositories
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#656464cc" } : { color: "#000" }
              }
              to="/contact"
              className="navLinks text-2xl text-mainBlack font-semibold cursor-pointer"
              onClick={() => setMenu(false)}
            >
              Error page
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
