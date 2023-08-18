import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// // Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Form() {
  const form = useRef();

  // Create state variables for the fields in the form
  // Also setting their initial values to an empty string
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
            "TculVHgXqPtIaF4LG"
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
    <form action="forms/contact.php" method="post" className="php-email-form">
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">
          Your message has been sent. Thank you!
        </div>
        <button className="text-center" onClick={handleFormSubmit}>
          Send Message
        </button>

        {errorMessage && (
          <div>
            <pre className="error-message">{errorMessage}</pre>
          </div>
        )}
      </div>
    </form>
  );
}

export default Form;
