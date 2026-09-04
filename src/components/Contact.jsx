import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show popup
    setSuccess(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Hide popup after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact-section">
      <div className="container">

        {/* Success Popup */}
        {success && (
          <div className="success-popup">
            <i className="fas fa-check-circle"></i>
            <span>Message sent successfully!</span>
          </div>
        )}

        <div className="text-center mb-5">
          <span className="slbl">Get In Touch</span>

          <h2 className="stitle">
            Contact <span>Us</span>
          </h2>

          <div className="sline"></div>

          <p
            className="sdesc mx-auto"
            style={{ maxWidth: "480px" }}
          >
            Have a question, feedback, or want to plan a special event?
            We'd love to hear from you.
          </p>
        </div>

        <div className="row g-4">

          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="ctdark">
              <h4>Let's Talk</h4>

              <p className="ctsub">
                We typically respond within 2 hours during business hours.
              </p>

              <div className="ctitem">
                <div className="cticon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>

                <div className="ctinfo">
                  <strong>Address</strong>
                  <span>
                    42 Flavor Street, Manhattan,
                    <br />
                    New York, NY 10001
                  </span>
                </div>
              </div>

              <div className="ctitem">
                <div className="cticon">
                  <i className="fas fa-phone-alt"></i>
                </div>

                <div className="ctinfo">
                  <strong>Phone</strong>
                  <span>+1 (800) 123-4567</span>
                </div>
              </div>

              <div className="ctitem">
                <div className="cticon">
                  <i className="fas fa-envelope"></i>
                </div>

                <div className="ctinfo">
                  <strong>Email</strong>
                  <span>hello@sarabfood.com</span>
                </div>
              </div>

              <div className="ctitem">
                <div className="cticon">
                  <i className="fas fa-clock"></i>
                </div>

                <div className="ctinfo">
                  <strong>Working Hours</strong>
                  <span>Wed - Sun: 9 AM - 11 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="fcard">

                <div className="row g-3">

                  <div className="col-sm-6">
                    <label className="flbl">
                      Your Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="fctrl"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={50}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="flbl">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="fctrl"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={100}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="flbl">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      className="fctrl"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={15}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="flbl">
                      Subject *
                    </label>

                    <select
                      name="subject"
                      className="fctrl"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select Subject
                      </option>

                      <option value="General Inquiry">
                        General Inquiry
                      </option>

                      <option value="Catering & Events">
                        Catering & Events
                      </option>

                      <option value="Feedback">
                        Feedback
                      </option>

                      <option value="Partnership">
                        Partnership
                      </option>

                      <option value="Media & Press">
                        Media & Press
                      </option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="flbl">
                      Message *
                    </label>

                    <textarea
                      name="message"
                      className="fctrl"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      maxLength={500}
                    ></textarea>

                    <small>
                      {formData.message.length}/500 characters
                    </small>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn-red"
                    >
                      <i className="fas fa-paper-plane me-1"></i>
                      Send Message
                    </button>
                  </div>

                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact; 