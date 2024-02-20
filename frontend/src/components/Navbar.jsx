import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    // User is now logged out
    setIsLoggedIn(false);
  };

  const links = [
    { id: 1, text: "home" },
    { id: 2, text: "register" },
    { id: 3, text: "login" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 w-full mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-white p-1">Auth</h1>
      <ul className="hidden md:flex">
        {links.map((link) =>
          isLoggedIn && link.text === "login" ? (
            <li key={link.id} className="p-4" onClick={handleSignOut}>
              <NavLink
                to={"/"}
                className="text-white p-4 hover:bg-[#0095df] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                signout
              </NavLink>
            </li>
          ) : isLoggedIn && link.text === "register" ? (
            <li key={link.id} className="p-4">
              <NavLink
                to={"/"}
                className="text-white p-4 hover:bg-[#0095df] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                account
              </NavLink>
            </li>
          ) : (
            <li key={link.id} className="p-4">
              <NavLink
                to={`/${link.text}`}
                className="aria-[current=page]:text-blue-400 p-4 hover:bg-[#0095df] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                {link.text}
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div onClick={handleMenu} className="md:hidden">
        {showMenu ? <span>X</span> : <span>&#9776;</span>}
      </div>
      <ul
        className={
          showMenu
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#0095df] m-4">Auth</h1>

        {/* Mobile Navigation Items */}
        {links.map((link) => (
          <li
            key={link.id}
            className="p-4 border-b rounded-xl hover:bg-[#0095df] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <NavLink
              to={`/${link.text}`}
              className="aria-[current=page]:text-blue-400 block"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
