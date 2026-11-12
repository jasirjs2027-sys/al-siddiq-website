

function Footer() {
  return (
    <footer className="footer-main">

      <div className="footer-container">

        {/* About */}
        <div className="footer-box footer-about">
          <h2>Al Siddiq <span>Services</span></h2>
          <p>
            Providing professional certified legal translation
            and documentation services in Islamabad. We are
            committed to reliable service and customer satisfaction.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-box">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/services">Legal Document Translation</a></li>
            <li><a href="/services">Embassy Document Translation</a></li>
            <li><a href="/services">Visa Form Filling</a></li>
            <li><a href="/services">Appointment Booking</a></li>
            <li><a href="/services">Document Preparation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box footer-contact">
          <h3>Contact Us</h3>

          <p>
            <span>📍</span>
            Aabpara Market, G-6/1, Islamabad, Pakistan
          </p>

          <p>
            <span>✉</span>
            <a href="mailto:alsiddiqtranslation@gmail.com">
              alsiddiqtranslation@gmail.com
            </a>
          </p>

          <p>
            <span>☎</span>
            <a href="https://wa.me/923335026595">
              WhatsApp Us
            </a>
          </p>

          <p>
            <span>◷</span>
            Monday - Saturday: 9:00 AM - 6:00 PM
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Al Siddiq Services.
          All Rights Reserved.
        </p>

        <p>Professional Translation & Documentation Services</p>
      </div>

    </footer>
  );
}

export default Footer;
