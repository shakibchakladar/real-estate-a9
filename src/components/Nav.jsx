import {Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="text-2xl font-bold btn btn-ghost">HavenHome</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
        <li><NavLink to="/">Home</NavLink> </li>
        <li><NavLink to="/update">Update Profile</NavLink></li>
        <li><NavLink to="/about">About</NavLink> </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 navbar-end">
          <div>
            <img className="w-10 h-10 border-2 border-red-600 rounded-full" src="" alt="" />
          </div>
          <Link to="/login" className="btn">Log in</Link>
        </div>
      </div>
    );
};

export default Nav;