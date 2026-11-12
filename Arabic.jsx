

function Arabic() {
  return (
    <div className="arabic-page">

      {/* HERO SECTION */}
      <section className="arabic-hero">
        <div className="arabic-hero-content">
          <span className="arabic-tag">ONLINE ARABIC COURSE</span>

          <h1>Learn Arabic Language</h1>

          <p>
            Start your Arabic learning journey with professional
            guidance and easy lessons.
          </p>

          <a
            href="https://wa.me/923335254896"
            target="_blank"
            rel="noreferrer"
            className="arabic-btn"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Enroll Now
          </a>
        </div>
      </section>

      {/* ABOUT COURSE */}
      <section className="arabic-about">
        <div className="arabic-about-text">
          <span className="arabic-small-title">ABOUT THE COURSE</span>

          <h2>Learn Arabic With Confidence</h2>

          <p>
            Our Arabic Language Course is designed for students
            who want to learn Arabic from the beginning.
            Learn basic vocabulary, grammar, reading and speaking
            with proper guidance.
          </p>
        </div>

        <div className="arabic-about-box">
          <i className="fa-solid fa-book-open"></i>
          <h3>Easy Learning</h3>
          <p>
            Simple lessons to help students understand Arabic
            step by step.
          </p>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="arabic-learn">
        <span className="arabic-small-title">COURSE CONTENT</span>

        <h2>What You Will Learn</h2>

        <div className="arabic-learn-grid">

          <div className="arabic-learn-card">
            <i className="fa-solid fa-language"></i>
            <h3>Arabic Vocabulary</h3>
            <p>Learn useful Arabic words and their meanings.</p>
          </div>

          <div className="arabic-learn-card">
            <i className="fa-solid fa-book"></i>
            <h3>Arabic Grammar</h3>
            <p>Understand basic Arabic grammar and sentence structure.</p>
          </div>

          <div className="arabic-learn-card">
            <i className="fa-solid fa-comments"></i>
            <h3>Speaking Skills</h3>
            <p>Improve your Arabic communication skills.</p>
          </div>

          <div className="arabic-learn-card">
            <i className="fa-solid fa-pen"></i>
            <h3>Reading & Writing</h3>
            <p>Practice reading and writing Arabic sentences.</p>
          </div>

        </div>
      </section>

      {/* TEACHER SECTION */}
      <section className="arabic-teacher">

        <div className="arabic-teacher-icon">
          <i className="fa-solid fa-chalkboard-user"></i>
        </div>

        <div className="arabic-teacher-info">
          <span className="arabic-small-title">YOUR INSTRUCTOR</span>

          <h2>Meet Your Teacher</h2>

          <h3>Abdul Baseer</h3>

          <p>
            Learn Arabic with proper guidance and step-by-step lessons.
          </p>

          <a
            href="https://wa.me/923335254896"
            target="_blank"
            rel="noreferrer"
            className="arabic-btn"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Contact Teacher: 0333 5254896
          </a>
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="arabic-cta">
        <h2>Ready to Start Learning Arabic?</h2>

        <p>Contact us today to get course information and enrollment details.</p>

        <a
          href="https://wa.me/923335254896"
          target="_blank"
          rel="noreferrer"
          className="arabic-btn"
        >
          Contact Us on WhatsApp
        </a>
      </section>
    
      </div>
  );
}

export default Arabic;