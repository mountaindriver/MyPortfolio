import React, { useState } from "react";
import profileImage from "../assests/img/profile-img.jpg"

function Header({ currentPage, handlePageChange }) {
  const [isActive, setIsActive] = useState(false);

  const toggleMobileNav = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`${isActive ? "mobile-nav-active" : ""}`}>
      <i
        class="bi bi-list mobile-nav-toggle d-xl-none"
        className={`mobile-nav-toggle bi d-xl-none ${
          isActive ? "bi-x" : "bi-list"
        }`}
        onClick={toggleMobileNav}
      ></i>
      <div id="header" className={`d-flex flex-column`}>
        <div className="profile">
          <img
            src={profileImage}
            alt="Lucas Freigenberg"
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light">
            <a href="index.html">Lucas Freigenberg</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              href="https://github.com/mountaindriver?tab=repositories"
              className="github"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="emailto:lsfreigenberg@outlook.com" className="Email">
              <i className="bx bxl-skype"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-freigenberg-539338134/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a
                href="#top"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "hero"
                    ? "pActiv nav-link scrolltoe"
                    : "pNa nav-link scrolltov"
                }
              >
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About"
                    ? "pActive nav-link scrollto"
                    : "pNav nav-link scrollto"
                }
              >
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume"
                    ? "pActive nav-link scrollto"
                    : "pNav nav-link scrollto"
                }
              >
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio"
                    ? "pActive nav-link scrollto"
                    : "pNav nav-link scrollto"
                }
              >
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "contact"
                    ? "pActive nav-link scrollto"
                    : "pNav nav-link scrollto"
                }
              >
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
