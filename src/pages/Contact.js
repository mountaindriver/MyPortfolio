import React from "react";
// import Form from "../components/Form";

// This page renders this card and within the card a form component is rendered
export default function Contact() {
  return (
    <article>
    <section>
      <div className="aCard">
        <h1>
          Contact <span>Me</span> &#128513;
        </h1>
        <p>
          If you want to get in touch, leave me a message or connect with one of
          the links in the footer.
        </p>
        {/* <Form /> */}
      </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
            <p>
              I invite you to join me on this exhilarating journey as we embark
              on fresh adventures, tackle novel projects, and weave a future
              brimming with boundless possibilities. Let's connect and
              collectively craft something extraordinary.
            </p>
          </div>

          <div class="row" data-aos="fade-in">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Salt Lake City, Utah</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    <a href="emailto:lsfreigenberg@outlook.com"
                      >lsfreigenberg@outlook.com</a
                    >
                  </p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 (435) 659-8934</p>
                </div>

                <img
                  src="assets/img/profile-img.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              {/* <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              > */}
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="name">Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
