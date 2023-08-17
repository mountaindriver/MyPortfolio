import React from "react";

export default function About() {
  return (
    <article>
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="hero-container" data-aos="fade-in">
          <h1>Lucas Freigenberg</h1>
          <p>
            Hello, I'm a
            <span
              class="typed"
              data-typed-items="Developer, Freelancer, Biker, Photographer, Forever Student"
            ></span>
          </p>
        </div>
      </section>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>About</h2>
            <p>
              I'm Lucas Freigenberg, a passionate full stack developer with a
              zest for life. Beyond the world of coding, I embrace every
              opportunity to explore, learn, and thrive. As an avid mountain
              biker, adventurer, and traveler, I believe that the same spirit of
              exploration that fuels my outdoor pursuits drives me to excel in
              the dynamic realm of web development.
              <br />
              <br />
              My journey is marked by continuous growth. Much like navigating
              challenging trails on my mountain bike, I adeptly maneuver complex
              coding landscapes with agility and an unwavering commitment to
              breaking barriers. This agility effortlessly extends to my
              development approach, allowing me to swiftly adapt to evolving
              technologies and industry trends. Thriving on the pursuit of
              ambitious objectives, I channel my energy into accomplishing them.
              <br />
              <br />
              Embracing diversity is not only a core principle in my coding but
              also in the teams I collaborate with. My international experience
              working alongside individuals from across the globe has endowed me
              with adept skills in managing diverse teams. My ability to
              flourish within fast-paced and constantly evolving environments
              underscores my dynamic nature and fervor for pushing limits.
              <br />
              <br />
              My coding journey commenced during a transformative University of
              Utah boot camp. Here, I mastered the intricacies of coding,
              swiftly ascending from novice to team lead on all three projects.
              This experience fortified my leadership acumen while honing my
              technical skills, solidifying my capability to lead dynamic teams
              in delivering innovative solutions.
              <br />
              <br />
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="assets/img/profile-img.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full Stack Developer</h3>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    {/* <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li> --> */}
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Website:</strong>
                      <span>LucasFreigenberg.dev</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>
                        <a href="emailto:lsfreigenberg@outlook.com">
                          lsfreigenberg@outlook.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>+1 (435) 659-8934</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Salt Lake City, Utah</span>
                    </li>
                  </ul>
                </div>
                <p>
                  I invite you to join me on this exhilarating journey as we
                  embark on fresh adventures, tackle novel projects, and weave a
                  future brimming with boundless possibilities. Let's connect
                  and collectively craft something extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" class="skills section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Skills</h2>
            <p>
              I am committed to a perpetual journey of self-improvement,
              continuously assimilating new technologies and refining my coding
              skills in the realm of full stack development. My unwavering
              dedication to staying at the forefront of advancements ensures
              that I consistently deliver the best possible solutions to my
              clients.
            </p>
          </div>

          <div class="row skills-content">
            <div class="col-lg-6" data-aos="fade-up">
              <div class="progress">
                <span class="skill">
                  HTML <i class="val">95%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  CSS <i class="val">80%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  JavaScript <i class="val">75%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="progress">
                <span class="skill">
                  React <i class="val">80%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  Git <i class="val">70%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  TypeScript <i class="val">55%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
