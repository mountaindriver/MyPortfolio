import React from "react";

// This page creates a card for every one of my projects i'd like to display
export default function Portfolio(projects) {
  return (
<section id="portfolio" className="portfolio section-bg">
    {/* //     <h1>
    //       Hey,👋 I'm <span>Lucas</span>
    //     </h1>
    //     <p>
    //       I'm a certified MERN Full Stack Developer connect with me on LinkedIn.
    //       These are some of my projects, you can check out more of them on my
    //       Github. For every Team project I was team lead.
    //     </p>
    //     <a
    //       href="https://www.linkedin.com/in/lucas-freigenberg-539338134/"
    //       classNameName="pbtn"
    //     >
    //       LinkedIn
    //     </a>
    //     <a href="https://github.com/mountaindriver" classNameName="pbtn pbtn2">
    //       Github
    //     </a>

    //   {projects.projects.map((project) => (
    //     <article
    //       key={project.id}
    //       style={{
    //         backgroundImage: `url(${project.image})`,
    //         backgroundPosition: `top`,
    //         backgroundSize: `cover`,
    //       }}
    //       classNameName="aCard"
    //     >
    //       <div classNameName="aCardBody">
    //         <h5>{project.name}</h5>
    //         <p>{project.description}</p>
    //         <p>Technologies Used: {project.tech}</p>
    //         <div classNameName="pCardFooter">
    //           <a href={project.url} classNameName="pbtn">
    //             Website
    //           </a>
    //           <a href={project.githubURL} classNameName="pbtn pbtn2">
    //             Repo
    //           </a>
    //         </div>
    //       </div>
    //     </article>
    //   ))} */}
    <div className="container">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>
          Feel free to explore my portfolio, where you'll find a collection
          of my work, including projects from my academic endeavors,
          impactful internship experiences, and a range of personal
          initiatives. These projects collectively showcase my diverse skill
          set and passion for creating innovative solutions.
        </p>
      </div>

      <div className="row" data-aos="fade-up">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
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
              src="assets/img/portfolio/Portfolio.png"
              className="img-fluid"
              alt="Picture of School assignment 'Portfolio'"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/Portfolio.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                ><i className="bx bx-plus"></i
              ></a>
              <a
                href="https://mountaindriver.github.io/Portfolio/"
                title="More Details"
                ><i className="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-school">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/EricEmporium.png"
              className="img-fluid"
              alt="Picture of School assignment 'E-commerce'"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/EricEmporium.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                ><i className="bx bx-plus"></i
              ></a>
              <a
                href="https://github.com/ccottrell52/E-commerce-Project3"
                title="More Details"
                ><i className="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-school">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/TheTechBlog.png"
              className="img-fluid"
              alt="Picture of School assignment 'Blog'"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/TheTechBlog.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                ><i className="bx bx-plus"></i
              ></a>
              <a
                href="https://github.com/mountaindriver/Tech-Blogger"
                title="More Details"
                ><i className="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-school">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/Weather.png"
              className="img-fluid"
              alt="Picture of School assignment 'Third Party API/Weather project'"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/Weather.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                ><i className="bx bx-plus"></i
              ></a>
              <a
                href="https://mountaindriver.github.io/Weather-API-Dashboard/"
                title="More Details"
                ><i className="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-school">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/Project1.png"
              className="img-fluid"
              alt="Picture of School assignment 'Project one Covid travel'"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/Project1.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                ><i className="bx bx-plus"></i
              ></a>
              <a
                href="https://mountaindriver.github.io/super-team-project/"
                title="More Details"
                ><i className="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-school">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/Recipe Finder.png"
              className="img-fluid"
              alt="Picture of School assignment 'Full Stack Project/Recipe Finder'"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/Recipe Finder.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                ><i className="bx bx-plus"></i
              ></a>
              <a
                href="https://github.com/lcsantana1/Recipe-Finder"
                title="More Details"
                ><i className="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-internship">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/diggifi.png"
              className="img-fluid"
              alt="Diggifi Website"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/diggifi.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                ><i className="bx bx-plus"></i
              ></a>
              <a href="https://www.diggifi.com/" title="More Details"
                ><i className="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-internship">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/livnot.png"
              className="img-fluid"
              alt="Livnot U'lehibanot's Website"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/livnot.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                ><i className="bx bx-plus"></i
              ></a>
              <a href="https://www.livnot.org/" title="More Details"
                ><i className="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-personal">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/WorkInProgres.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/WorkInProgres.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                ><i className="bx bx-plus"></i
              ></a>
              <a
                href="https://github.com/mountaindriver?tab=repositories"
                title="More Details"
                ><i className="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}
