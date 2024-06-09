import React, { useState, useEffect } from "react";
import { useLocation, Link as RouterLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import useAuth from "../Hooks/UseAuth";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const ConfirmLink = ({ to, children, message }) => {
    const handleClick = (e) => {
      e.preventDefault();
      if (window.confirm(message)) {
        navigate(to);
      }
    };

    return (
      <RouterLink to={to} onClick={handleClick}>
        {children}
      </RouterLink>
    );
  };

  const renderNavLinks = () => {
    switch (location.pathname) {
      case "/freelancerpage":
      case "/freelancerpage/Taskmanager":
      case "/freelancerpage/Apply":
        return (
          <>
            <li>
              <RouterLink to="/freelancerpage">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/freelancerpage/Taskmanager">
                Task Manager
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/message">Message</RouterLink>
            </li>
            <li onClick={logOut}>
              <RouterLink to="/">LogOut</RouterLink>
            </li>
          </>
        );
      case "/employerpage":
      case "/employerpage/Post":
      case "/employerpage/Freelancerdetails":
      case "/employerpage/Applicantsdetails":
        case "/employerpage/Applicantsdetails/more":
        return (
          <>
            <li>
              <RouterLink to="/employerpage">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/employerpage/Post">Post</RouterLink>
            </li>
            <li>
              <RouterLink to="/employerpage/Applicantsdetails">
                Applicants
              </RouterLink>
            </li>
            <li onClick={logOut}>
              <RouterLink to="/">LogOut</RouterLink>
            </li>
          </>
        );
      case "/":
        return (
          <>
            <li>
              <Link to="main" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="service" smooth={true} duration={500}>
                Service
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="register" smooth={true} duration={500}>
                Register
              </Link>
            </li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <RouterLink to="main" className="logo">
        <img src="/image/logo.png" alt="" />
      </RouterLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">{renderNavLinks()}</ul>
    </nav>
  );
};

export default Navbar;