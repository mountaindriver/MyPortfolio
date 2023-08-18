import React from "react";

import porfolioImage from "../assests/img/portfolio/Portfolio.png";
import ericEmporium from "../assests/img/portfolio/EricEmporium.png";
import theTechBlogImage from "../assests/img/portfolio/TheTechBlog.png";
import weatherImage from "../assests/img/portfolio/Weather.png";
import project1Image from "../assests/img/portfolio/Project1.png";
import recipeFinderImage from "../assests/img/portfolio/Recipe Finder.png";
import diggifiImage from "../assests/img/portfolio/diggifi.png";
import livnotImage from "../assests/img/portfolio/livnot.png";
import workInProgresImage from "../assests/img/portfolio/WorkInProgres.jpg";

// This page creates a card for every one of my projects i'd like to display
export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Feel free to explore my portfolio, where you'll find a collection of
            my work, including projects from my academic endeavors, impactful
            internship experiences, and a range of personal initiatives. These
            projects collectively showcase my diverse skill set and passion for
            creating innovative solutions.
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-school">School</li>
              <li data-filter=".filter-internship">Internship</li>
              <li data-filter=".filter-personal">Personal</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-school">
            <div className="portfolio-wrap">
              <img
                src={porfolioImage}
                className="img-fluid"
                alt="Assignment 'Portfolio'"
              />
              <div className="portfolio-links">
                <a
                  href="../assets/img/portfolio/Portfolio.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="https://mountaindriver.github.io/Portfolio/"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-school">
            <div className="portfolio-wrap">
              <img
                src={ericEmporium}
                className="img-fluid"
                alt="Assignment 'E-commerce'"
              />
              <div className="portfolio-links">
                <a
                  href="../assets/img/portfolio/EricEmporium.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="https://github.com/ccottrell52/E-commerce-Project3"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-school">
            <div className="portfolio-wrap">
              <img
                src={theTechBlogImage}
                className="img-fluid"
                alt="Assignment 'Blog'"
              />
              <div className="portfolio-links">
                <a
                  href="../assets/img/portfolio/TheTechBlog.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="https://github.com/mountaindriver/Tech-Blogger"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-school">
            <div className="portfolio-wrap">
              <img
                src={weatherImage}
                className="img-fluid"
                alt="Assignment 'Third Party API/Weather project'"
              />
              <div className="portfolio-links">
                <a
                  href="../assets/img/portfolio/Weather.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="https://mountaindriver.github.io/Weather-API-Dashboard/"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-school">
            <div className="portfolio-wrap">
              <img
                src={project1Image}
                className="img-fluid"
                alt="Assignment 'Project one Covid travel'"
              />
              <div className="portfolio-links">
                <a
                  href="../assets/img/portfolio/Project1.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="https://mountaindriver.github.io/super-team-project/"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-school">
            <div className="portfolio-wrap">
              <img
                src={recipeFinderImage}
                className="img-fluid"
                alt="Assignment 'Full Stack Project/Recipe Finder'"
              />
              <div className="portfolio-links">
                <a
                  href="../assets/img/portfolio/Recipe Finder.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="https://github.com/lcsantana1/Recipe-Finder"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-internship">
            <div className="portfolio-wrap">
              <img
                src={diggifiImage}
                className="img-fluid"
                alt="Diggifi Website"
              />
              <div className="portfolio-links">
                <a
                  href="../assets/img/portfolio/diggifi.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="https://www.diggifi.com/" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-internship">
            <div className="portfolio-wrap">
              <img
                src={livnotImage}
                className="img-fluid"
                alt="Livnot U'lehibanot's Website"
              />
              <div className="portfolio-links">
                <a
                  href="../assets/img/portfolio/livnot.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="https://www.livnot.org/" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-personal">
            <div className="portfolio-wrap">
              <img src={workInProgresImage} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href="../assets/img/portfolio/WorkInProgres.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="https://github.com/mountaindriver?tab=repositories"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
