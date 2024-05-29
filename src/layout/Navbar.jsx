import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png"
const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

  const navigate = useNavigate();

  const links = (
    <>
      <li className="text-lg mr-1 font-medium text-base-color-navbar dark:text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg mr-1 font-medium text-base-color-navbar dark:text-white">
        <NavLink to="/available-foods">Available Foods</NavLink>
      </li>

      {user && (
        <>
          <li className="text-lg mr-1 font-medium text-base-color-navbar dark:text-white">
            <NavLink to={`/add-food/${user.email}`}>Add Food</NavLink>
          </li>
          <li className="text-lg mr-1 font-medium text-base-color-navbar dark:text-white">
            <NavLink to={`/my-foods/${user.email}`}>Manage My Food</NavLink>
          </li>
          <li className="text-lg mr-1 font-medium text-base-color-navbar dark:text-white">
            <NavLink to={`/my-requested-foods/${user.email}`}>My Requested Foods</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast("You have successfully logged out");
        navigate("/");
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="navbar bg-base-100 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 22 22"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
       <div className=""><img src={logo} alt="" className="w-8 h-8 mr-2 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full" /></div>
        <a href="/" className="btn btn-ghost text-2xl md:text-4xl">
          Bliss<span className="text-[#F5A834] dark:text-white">Bite</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end ">
              <a className="my-anchor-element-id">
                <button
                  className="btn-ghost  rounded-full w-9 h-9 lg:w-12 lg:h-12 tooltip tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <img
                    src={user?.photoURL}
                    onTouchMove={user.displayName}
                    className="rounded-full w-9 h-9  ml-1 lg:w-12 lg:h-12 lg:mr-3"
                    alt="user"
                  />
                </button>
              </a>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-2 z-[20] p-2 bg-[#f3f0ec] shadow  rounded-box w-36"
              >
                <li className="p-2">
                  <button className="btn btn-ghost text-base font-medium text-black">
                    {" "}
                    <Link to={`/user-profile/${user.displayName}`}>
                      My Profile
                    </Link>
                  </button>
                  <hr></hr>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-ghost text-base font-medium text-black"
                  >
                    Log Out
                  </button>
                  <hr></hr>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <button className="btn btn-ghost lg:ml-2 ml-1 mr-1 lg:mr-3  text-[#111314] font-medium bg-[#F5A834] text-sm lg:text-lg">
              <Link to="/login">Log In</Link>
            </button>
            <button className="btn btn-ghost  text-[#111314] font-medium bg-[#F5A834] text-sm lg:text-lg">
              <Link to="/signup">Sign Up</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
