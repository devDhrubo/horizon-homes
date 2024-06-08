import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Log Out Successful");
      })
      .catch();
  };
  const navLink = (
    <>
      <Link to="/">
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to="/register">
        <li>
          <a>Register</a>
        </li>
      </Link>
      <Link to="/contact">
        <li>
          <a>Contact Us</a>
        </li>
      </Link>
      {user && (
        <>
          <Link to="/agent">
            <li>
              <a>Agent</a>
            </li>
          </Link>

          <Link to="/userProfile">
            <li>
              <a>User Profile</a>
            </li>
          </Link>
          
          <Link to="/updateProfile">
            <li>
              <a>Update Profile</a>
            </li>
          </Link>
          
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold lg:text-2xl text-sm">
          Horizon<span className="text-green-600">Homes</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
                    <div className="dropdown dropdown-hover">
          <div tabIndex={0} className="m-1">
            <div className="w-10 mr-4 relative">
            <img
              className="rounded-full"
              alt="user"
              src={
                user?.photoURL ||
                "https://i.ibb.co/FJ7dWR9/IMG-20230923-WA0029.jpg"
              }
            />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[10] menu p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <p className="text-sm">
                {user?.displayName || "Username not found"}
              </p>
            </li>
          </ul>
        </div>
            <button
              onClick={handleSignOut}
              className="px-3 rounded-lg py-2 bg-green-500 text-white"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-3  rounded-lg py-2 bg-green-500 text-white">
              Log In
            </button>
          </Link>
        )}


      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Header;
