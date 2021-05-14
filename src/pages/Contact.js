import React from "react";

function Contact() {
  // const submitHandler = (e) => e.preventDefault();

  return (
    <div className="page">
      <h1 className="title">Contact</h1>
      <form name="contact" className="form" netlify>
        <h3>Contact me</h3>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="input"
          placeholder="Your name"
          required
        />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="input"
          placeholder="example@example.com"
          required
        />
        <label className="label" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="input"
          placeholder="Subject"
          required
        />
        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          rows="10"
          id="message"
          type="text"
          className="input"
          placeholder="Message"
          required
        />
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
