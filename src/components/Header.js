import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <header id="header">
      <div class="d-flex flex-column">
        <div class="profile">
          <img
            src="assets/img/profile-img.jpg"
            alt=""
            class="img-fluid rounded-circle"
          />
          <h1 class="text-light">
            <a href="index.html">Lucas Freigenberg</a>
          </h1>
          <div class="social-links mt-3 text-center">
            <a
              href="https://github.com/mountaindriver?tab=repositories"
              class="github"
            >
              <i class="bx bxl-github"></i>
            </a>
            <a href="emailto:lsfreigenberg@outlook.com" class="Email">
              <i class="bx bxl-skype"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-freigenberg-539338134/"
              class="linkedin"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li>
              <a
                href="#top"
                onClick={() => handlePageChange("About")}
                class={
                  currentPage === "hero"
                    ? "pActiv nav-link scrolltoe"
                    : "pNa nav-link scrolltov"
                }
              >
                <i class="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                class={
                  currentPage === "About"
                    ? "pActive nav-link scrollto"
                    : "pNav nav-link scrollto"
                }
              >
                <i class="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
                class={
                  currentPage === "Resume"
                    ? "pActive nav-link scrollto"
                    : "pNav nav-link scrollto"
                }
              >
                <i class="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                class={
                  currentPage === "Portfolio"
                    ? "pActive nav-link scrollto"
                    : "pNav nav-link scrollto"
                }
              >
                <i class="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                class={
                  currentPage === "contact"
                    ? "pActive nav-link scrollto"
                    : "pNav nav-link scrollto"
                }
              >
                <i class="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
