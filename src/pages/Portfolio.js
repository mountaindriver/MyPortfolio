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

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <a href="https://www.diggifi.com/" title="More Details">
                <img
                  src={diggifiImage}
                  className="img-fluid"
                  alt="Diggifi Website"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <a href="https://www.livnot.org/" title="More Details">
                <img
                  src={livnotImage}
                  className="img-fluid"
                  alt="Livnot U'lehibanot's Website"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item">
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

          <div className="col-lg-4 col-md-6 portfolio-item">
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

          <div className="col-lg-4 col-md-6 portfolio-item">
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

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <a
                href="https://mountaindriver.github.io/Weather-API-Dashboard/"
                title="More Details"
              >
                <img
                  src={weatherImage}
                  className="img-fluid"
                  alt="Assignment 'Third Party API/Weather project'"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <a
                href="https://mountaindriver.github.io/super-team-project/"
                title="More Details"
              >
                <img
                  src={project1Image}
                  className="img-fluid"
                  alt="Assignment 'Project one Covid travel'"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item">
          <div className="portfolio-wrap">
            <a
              href="https://github.com/lcsantana1/Recipe-Finder"
              title="More Details"
            >
              <img
                src={recipeFinderImage}
                className="img-fluid"
                alt="Assignment 'Full Stack Project/Recipe Finder'"
              />
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-personal">
          <div className="portfolio-wrap">
            <a
              href="https://github.com/mountaindriver?tab=repositories"
              title="More Details"
            >
              <img src={workInProgresImage} className="img-fluid" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
