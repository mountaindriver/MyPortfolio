import React from "react";

// This page allows user to download my resume
export default function Resume() {
  return (
<section id="resume" class="resume">
    {/* //   <div className="aCard">
    //     <h1>
    //       Thanks for checking out my <span>Portfolio</span> 😎
    //     </h1>
    //     <h3>
    //       <a href="assests/resume/Lucas Freigenberg Resume.pdf" download>
    //         {" "}
    //         My Resume📝
    //       </a>
    //     </h3>
    //   </div> */}
    <div class="container">
      <div class="section-title">
        <h2>Resume</h2>
        <p>
          Committed to contributing my creativity, problem-solving and
          determination to develop user-centric and innovative web solutions
          that make a meaningful impact.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0">
            <h4>Lucas Freigenberg</h4>
            <p>
              <em
                >Innovative and deadline-driven Web Developer. Committed to
                contributing my creativity, problem-solving and
                determination to develop user-centric and innovative web
                solutions that make a meaningful impact.</em
              >
            </p>
            <ul>
              <li>Salt Lake City, Utah</li>
              <li>(435) 659-8934</li>
              <li>
                <a href="emailto:lsfreigenberg@outlook.com"
                  >lsfreigenberg@outlook.com</a
                >
              </li>
            </ul>
          </div>

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Bachelors of Science, Exercise Science</h4>
            <h5>2015 - 2019</h5>
            <p>
              <em>Colorado Mesa Univeristy, Grand Junction, Colorado</em>
            </p>
            <p>
              I graduated from Colorado Mesa University with honors, earning
              the distinction of cum laude. This achievement reflects my
              dedication to academic excellence and my commitment to
              achieving outstanding results.
            </p>
          </div>
          <div class="resume-item">
            <h4>Full Stack Web Development</h4>
            <h5>2022</h5>
            <p><em>University of Utah, Salt Lake City, Utah</em></p>
            <p>
              I successfully completed a Full Stack Web Development
              certificate from the University of Utah, where I excelled as a
              team lead for all projects, attended every class, and
              diligently completed every assignment. This experience
              showcases my leadership, dedication, and strong work ethic in
              mastering the skills required for full stack development.
            </p>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Front End Web Developer Intern</h4>
            <h5>2023 January - April</h5>
            <p><em>Diggifi, Tel Aviv, Israel</em></p>
            <ul>
              <li>
                Translated design team mock-ups into functional web pages,
                effectively implementing responsive user interfaces.
              </li>
              <li>
                Expanded skill set by proficiently integrating Redux and
                TypeScript into development processes.
              </li>
              <li>
                Played a pivotal role in building a Customer Relationship
                Management (CRM) system, enhancing client interaction and
                data management capabilities.
              </li>
              <li>
                Actively contributed to team projects, showcasing a dynamic
                skill set and commitment to advancing technology solutions.
              </li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Web Developer Intern</h4>
            <h5>2023</h5>
            <p><em>Livnot U'Lehibanot, Tzfat, Israel</em></p>
            <ul>
              <li>
                Revitalized the company's website using WordPress, raw HTML,
                and CSS, resulting in a modernized online presence.
              </li>
              <li>
                Elevated operational efficiency by introducing
                technology-driven solutions that optimized the recruitment
                workflow.
              </li>
              <li>
                Thrived in a dynamic, fast-paced, and ever-evolving work
                environment, collaborating effectively with an international
                team and diverse clients.
              </li>
              <li>
                Contributed to a dynamic work setting by actively engaging
                with a multinational team and a wide range of clients,
                showcasing adaptability and strong teamwork.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
