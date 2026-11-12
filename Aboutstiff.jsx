
function Aboutstiff() {
  return (
    <section className="testimonials">

      <div className="testimonials-heading">
        <span>OUR TEAM</span>
        <h2>Meet Our Professional Team</h2>
        <p>
          Our team consists of dedicated, skilled, and professional
          individuals who work together to deliver quality services
          and achieve excellence.
        </p>
      </div>

      <div className="testimonial-container">

        {/* CEO */}
        <div className="testimonial-card">
          <div className="client-image">
            <img src="/images/sami.png" alt="Abdul Sami" />
          </div>
          <h3>Abdul Sami</h3>
          <span className="client-role">C.E.O</span>
          <p>
            Abdul Sami leads the organization with a focus on
            professional management, business development, and
            delivering quality services to clients.
          </p>
        </div>

        {/* Chairman */}
        <div className="testimonial-card">
          <div className="client-image">
            <img src="/images/basit.png" alt="Abdul Basit" />
          </div>
          <h3>Abdul Basit</h3>
          <span className="client-role">Chairman</span>
          <p>
            Abdul Basit provides leadership and strategic guidance,
            helping the organization maintain its professional
            standards and long-term goals.
          </p>
        </div>

        {/* Staff Member */}
        <div className="testimonial-card">
          <div className="client-image">
            <img src="/images/samad.png" alt="Abdul Samad" />
          </div>
          <h3>Abdul Samad</h3>
          <span className="client-role">Staff Member</span>
          <p>
            Abdul Samad contributes to daily operations through
            teamwork, coordination, and a commitment to providing
            reliable support and professional services.
          </p>
        </div>

        {/* Staff Member */}
        <div className="testimonial-card">
          <div className="client-image">
            <img src="/images/ishfaq.png" alt="Muhammad Ashfaq" />
          </div>
          <h3>Muhammad Ashfaq</h3>
          <span className="client-role">Staff Member</span>
          <p>
            Muhammad Ashfaq supports the team with dedication,
            cooperation, and a focus on maintaining quality
            service and customer satisfaction.
          </p>
        </div>

        {/* Developer */}
        <div className="testimonial-card developer-card">
          <div className="client-image">
            <img src="/images/no-photo.png" alt="Abdul Yasir" />
          </div>

          <span className="developer-label">
            MEET THE DEVELOPER
          </span>

          <h3>Yasir</h3>

          <span className="client-role">
            Frontend & Backend Web Developer
          </span>

          <p>
            Abdul Yasir is responsible for designing and developing
            the organization's website. He works with modern web
            technologies to create responsive, user-friendly, and
            functional web experiences. His technical skills include
            frontend development, backend programming, database
            management, and web application development.
          </p>

          <small>
            HTML · CSS · JavaScript · React · PHP · MySQL · Laravel
          </small>
        </div>

      </div>

      {/* TEAM DESCRIPTION */}
      <div className="team-description">
        <h2>Working Together for Excellence</h2>

        <p>
          Our team consists of dedicated, skilled, and professional
          individuals who work together to deliver quality services
          and achieve excellence. Under the leadership of our CEO,
          Abdul Sami, and Chairman, Abdul Basit, our team focuses on
          professionalism, teamwork, and customer satisfaction.
          Abdul Samad and Muhammad Ashfaq contribute their skills
          and dedication to daily operations and client support.
          Our website is designed and developed by Abdul Yasir,
          a Frontend and Backend Web Developer with knowledge of
          HTML, CSS, JavaScript, React, PHP, MySQL, and Laravel.
          Together, we are committed to providing reliable services,
          maintaining high standards, and building long-term
          relationships with our clients.
        </p>
      </div>
    
    </section>
  );
}

export default Aboutstiff;
