import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// // Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

// This page renders this card and within the card a form component is rendered
export default function Contact() {
  const form = useRef();

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("Subject Here");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // For every error in the form we put the string to the errors array and then display it on the page at the end
    e.preventDefault();
    let errors = [];
    setErrorMessage("");
    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      errors.push("* Email is invalid\n");
    }
    // If email is blank we let the user know it is required
    if (email === "") {
      errors.push("* Email is Required\n");
    }
    // If name is blank we let the user know it is required
    if (name === "") {
      errors.push("* Name is Required\n");
    }
    // If message is blank we let the user know it is required
    if (message === "") {
      errors.push("* Message is Required\n");
    }
    let newerrors = errors.join("");
    setErrorMessage(newerrors);
    // if there are errors the fuction is stoped and the user has a the ability to fix their mistake
    if (errorMessage !== "") {
      return;
    } else {
      const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);

        emailjs
          .sendForm(
            "service_z462rs9",
            "template_brvfken",
            form.current,
            "W_V1IVTP9XGk9EW_-"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
      sendEmail(e);
    }
    // If there are no erros we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
    setSubject("");
    setErrorMessage("");
  };

  return (
    <article>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              I invite you to join me on this exhilarating journey as we embark
              on fresh adventures, tackle novel projects, and weave a future
              brimming with boundless possibilities. Let's connect and
              collectively craft something extraordinary.
            </p>
          </div>

          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Salt Lake City, Utah</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    <a href="emailto:lsfreigenberg@outlook.com">
                      lsfreigenberg@outlook.com
                    </a>
                  </p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 (435) 659-8934</p>
                </div>

                <img
                  src="assets/img/profile-img.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                ref={form}
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Your Name</label>
                    <input
                      name="name"
                      placeholder="Name"
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Your Email</label>
                    <input
                      value={email}
                      className="form-control"
                      name="email"
                      type="email"
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject Here"
                      onChange={handleInputChange}
                      value={subject}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      value={message}
                      name="message"
                      rows="10"
                      onChange={handleInputChange}
                      type="message"
                      placeholder="Message"
                    />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <div className="text-center">
                    <button onClick={handleFormSubmit}>Send Message</button>
                  </div>
                  {errorMessage && (
                    <div>
                      <pre className="error-message">{errorMessage}</pre>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
