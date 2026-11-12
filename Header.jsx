
function Header({
  onHomeClick,
  onArabicClick,
  onQuranClick,
  onUrduClick,
  onJapaneseClick,
  onTranslationClick,
  onBlogClick,
  onInterpreterClick,
  onAboutClick,
  onContactClick
}) {
  const handleClick = (e, callback) => {
    e.preventDefault();
    if (callback) callback();
  };

  return (
    <div className="all-main">

      <title>AL Siddiq Translation</title>

      {/* TOP BAR */}
      <div className="main-bar">

        <div className="timing">
          <i className="fa-solid fa-clock"></i>
          <span>Mon - Sat 09AM - 06PM</span>
        </div>

        <span className="slas">|</span>

        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          <a href="https://wa.me/923335026595"
             target="_blank" rel="noreferrer">
            +92-3335026595
          </a>
        </div>

        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>Aabpara Market, G-6/1, Islamabad.</p>
        </div>

      </div>

      {/* HEADER */}
      <div className="header-main">

        <img src="/images/logo.png" alt="Al Siddiq Logo" />

        <h3>
          Al Siddiq<br />
          <span>translation services</span>
        </h3>

        {/* NAVIGATION */}
        <section>
          <ul className="nav-menu">

            <li>
              <a href="/" onClick={(e) => handleClick(e, onHomeClick)}>
                Home
              </a>
            </li>

            {/* ONLINE COURSES */}
            <li className="dropdown">
              <a href="/courses">
                Online Courses <span className="arrow">&#9662;</span>
              </a>

              <ul className="submenu">

                <li>
                  <a href="/quran" onClick={(e) => handleClick(e, onQuranClick)}>
                    Quran With Tajweed
                  </a>
                </li>

                <li>
                  <a href="/arabic" onClick={(e) => handleClick(e, onArabicClick)}>
                     Languages Courses
                  </a>
                </li>

               

                

              </ul>
            </li>

            {/* SERVICES */}
            <li className="dropdown">
              <a href="/services">
                Services <span className="arrow">&#9662;</span>
              </a>

              <ul className="submenu">

                <li>
                  <a href="/translation"
                    onClick={(e) => handleClick(e, onTranslationClick)}>
                    Translation Services
                  </a>
                </li>

                <li>
                  <a href="/interpreter"
                    onClick={(e) => handleClick(e, onInterpreterClick)}>
                    Interpreter Embassies
                  </a>
                </li>

              </ul>
            </li>

            {/* BLOG */}
            <li>
              <a href="/blog" onClick={(e) => handleClick(e, onBlogClick)}>
                Blog
              </a>
            </li>

            {/* ABOUT */}
            <li>
              <a href="/about" onClick={(e) => handleClick(e, onAboutClick)}>
                About Us
              </a>
            </li>

            {/* CONTACT */}
            <li>
              <a href="/contact" onClick={(e) => handleClick(e, onContactClick)}>
                Contact Us
              </a>
            </li>

          </ul>
        </section>

        {/* APPLY BUTTON */}
        <div className="main-applay">
          <button type="button" onClick={onContactClick}>
            <i className="fa-solid fa-paper-plane"></i>
            Apply Now
          </button>
        </div>

      </div>

      {/* WHATSAPP */}
      <div className="whatsapp-icon">
        <a href="https://wa.me/923335026595"
           target="_blank" rel="noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

    </div>
  );
}

export default Header;
