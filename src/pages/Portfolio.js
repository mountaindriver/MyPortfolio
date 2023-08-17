import React from "react";

// This page creates a card for every one of my projects i'd like to display
export default function Portfolio(projects) {
  return (
<section id="portfolio" class="portfolio section-bg">
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
    //       className="pbtn"
    //     >
    //       LinkedIn
    //     </a>
    //     <a href="https://github.com/mountaindriver" className="pbtn pbtn2">
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
    //       className="aCard"
    //     >
    //       <div className="aCardBody">
    //         <h5>{project.name}</h5>
    //         <p>{project.description}</p>
    //         <p>Technologies Used: {project.tech}</p>
    //         <div className="pCardFooter">
    //           <a href={project.url} className="pbtn">
    //             Website
    //           </a>
    //           <a href={project.githubURL} className="pbtn pbtn2">
    //             Repo
    //           </a>
    //         </div>
    //       </div>
    //     </article>
    //   ))} */}
    <div class="container">
      <div class="section-title">
        <h2>Portfolio</h2>
        <p>
          Feel free to explore my portfolio, where you'll find a collection
          of my work, including projects from my academic endeavors,
          impactful internship experiences, and a range of personal
          initiatives. These projects collectively showcase my diverse skill
          set and passion for creating innovative solutions.
        </p>
      </div>

      <div class="row" data-aos="fade-up">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-school">School</li>
            <li data-filter=".filter-internship">Internship</li>
            <li data-filter=".filter-personal">Personal</li>
          </ul>
        </div>
      </div>

      <div
        class="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="col-lg-4 col-md-6 portfolio-item filter-school">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/Portfolio.png"
              class="img-fluid"
              alt="Picture of School assignment 'Portfolio'"
            />
            <div class="portfolio-links">
              <a
                href="assets/img/portfolio/Portfolio.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://mountaindriver.github.io/Portfolio/"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-school">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/EricEmporium.png"
              class="img-fluid"
              alt="Picture of School assignment 'E-commerce'"
            />
            <div class="portfolio-links">
              <a
                href="assets/img/portfolio/EricEmporium.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://github.com/ccottrell52/E-commerce-Project3"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-school">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/TheTechBlog.png"
              class="img-fluid"
              alt="Picture of School assignment 'Blog'"
            />
            <div class="portfolio-links">
              <a
                href="assets/img/portfolio/TheTechBlog.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://github.com/mountaindriver/Tech-Blogger"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-school">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/Weather.png"
              class="img-fluid"
              alt="Picture of School assignment 'Third Party API/Weather project'"
            />
            <div class="portfolio-links">
              <a
                href="assets/img/portfolio/Weather.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://mountaindriver.github.io/Weather-API-Dashboard/"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-school">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/Project1.png"
              class="img-fluid"
              alt="Picture of School assignment 'Project one Covid travel'"
            />
            <div class="portfolio-links">
              <a
                href="assets/img/portfolio/Project1.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://mountaindriver.github.io/super-team-project/"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-school">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/Recipe Finder.png"
              class="img-fluid"
              alt="Picture of School assignment 'Full Stack Project/Recipe Finder'"
            />
            <div class="portfolio-links">
              <a
                href="assets/img/portfolio/Recipe Finder.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://github.com/lcsantana1/Recipe-Finder"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-internship">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/diggifi.png"
              class="img-fluid"
              alt="Diggifi Website"
            />
            <div class="portfolio-links">
              <a
                href="assets/img/portfolio/diggifi.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                ><i class="bx bx-plus"></i
              ></a>
              <a href="https://www.diggifi.com/" title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-internship">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/livnot.png"
              class="img-fluid"
              alt="Livnot U'lehibanot's Website"
            />
            <div class="portfolio-links">
              <a
                href="assets/img/portfolio/livnot.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                ><i class="bx bx-plus"></i
              ></a>
              <a href="https://www.livnot.org/" title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-personal">
          <div class="portfolio-wrap">
            <img
              src="assets/img/portfolio/WorkInProgres.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-links">
              <a
                href="assets/img/portfolio/WorkInProgres.jpg"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://github.com/mountaindriver?tab=repositories"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}
