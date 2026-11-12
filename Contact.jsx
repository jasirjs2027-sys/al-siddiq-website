
import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzit8cT9SqTE0n2RaGFa7pLutZUFU-EO_e8sF7648cJRIliRhj-UkkQ5T30HyYzQAnb/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new URLSearchParams(
      new FormData(form)
    );

    setIsSending(true);
    setStatus('');

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      form.reset();

      setStatus(
        'Your message has been sent. Please verify your submission.'
      );

    } catch (error) {
      console.error('Submission Error:', error);

      setStatus(
        'Unable to send your message. Please try again.'
      );

    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-page">

      <div className="contact-hero">
        <span className="contact-tag">CONTACT AL SIDDIQ</span>
        <h1>
          Let's Make Something<br />
          <span>Meaningful Together.</span>
        </h1>
        <p>
          Have a question, need professional assistance or want to discuss
          a project? Get in touch with our team.
        </p>
      </div>

      <div className="contact-main">

        <div className="contact-form-area">

          <div className="form-heading">
            <span>GET IN TOUCH</span>
            <h2>Send Us a Message</h2>
            <p>Please complete the form below. Our team will get back to you.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+92 3XX XXXXXXX"
                />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                />
              </div>

              <div className="form-group">
                <label>Select Your Service *</label>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Choose a service</option>
                  <option>Certified Translation</option>
                  <option>Legal Document Translation</option>
                  <option>Embassy Interpretation</option>
                  <option>Visa Documentation</option>
                  <option>Online Quran Academy</option>
                  <option>Other Services</option>
                </select>
              </div>

              <div className="form-group">
                <label>Preferred Contact Method</label>
                <select name="contactMethod" defaultValue="">
                  <option value="" disabled>Select contact method</option>
                  <option>WhatsApp</option>
                  <option>Phone Call</option>
                  <option>Email</option>
                </select>
              </div>

            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Message *</label>
              <textarea
                name="message"
                rows="7"
                placeholder="Write your message in detail..."
                required
              ></textarea>
            </div>

            <div className="form-bottom">
              <p>
                <i className="fa-solid fa-lock"></i>
                Your information will be kept private.
              </p>

              <button type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Submit Message'}
                {' '}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {status && (
              <p role="status" aria-live="polite">
                {status}
              </p>
            )}

          </form>
        </div>

        <aside className="contact-sidebar">

          <span className="sidebar-tag">CONTACT DETAILS</span>
          <h2>We're Always Ready to Help.</h2>

          <p className="sidebar-description">
            Reach out to us through any of the following channels.
            We look forward to hearing from you.
          </p>

          <div className="sidebar-item">
            <div className="sidebar-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h4>Our Office</h4>
              <p>Aabpara Market, G-6/1,<br />Islamabad, Pakistan</p>
            </div>
          </div>

          <div className="sidebar-item">
            <div className="sidebar-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h4>Email Address</h4>
              <p>alsiddiqtranslation@gmail.com</p>
            </div>
          </div>

          <div className="sidebar-item">
            <div className="sidebar-icon">
              <i className="fa-solid fa-clock"></i>
            </div>
            <div>
              <h4>Working Hours</h4>
              <p>Monday – Saturday<br />9:00 AM – 10:00 PM</p>
            </div>
          </div>

          <div className="sidebar-bottom">
            <h3>Need Quick Assistance?</h3>
            <p>Send us your inquiry and our team will assist you.</p>
            <a href="mailto:alsiddiqtranslation@gmail.com">
              <i className="fa-solid fa-paper-plane"></i> Email Us
            </a>
          </div>

        </aside>

      </div>

      <div className="contact-bottom">
        <div>
          <span>HAVE A QUESTION?</span>
          <h2>We'd Love to Hear From You.</h2>
        </div>
        <i className="fa-solid fa-comments"></i>
      </div>

    </section>
  );
}

export default Contact;
