function Quran() {
  const courses = [
    {
      icon: "fa-book-quran",
      title: "Quran with Tajweed",
      text: "Learn to recite the Holy Quran with correct pronunciation and Tajweed rules."
    },
    {
      icon: "fa-book-open",
      title: "Nazra Quran",
      text: "Start your Quran learning journey with guided reading and regular practice."
    },
    {
      icon: "fa-graduation-cap",
      title: "Hifz-ul-Quran",
      text: "A structured memorization program with revision and individual guidance."
    },
    {
      icon: "fa-language",
      title: "Quran Translation",
      text: "Understand the meanings and messages of the Holy Quran."
    },
    {
      icon: "fa-mosque",
      title: "Basic Islamic Studies",
      text: "Learn essential Islamic teachings, duas, prayer and daily practices."
    },
    {
      icon: "fa-child",
      title: "Quran Classes for Kids",
      text: "Friendly and supportive online Quran learning for young students."
    }
  ];

  return (
    <main className="mq-page">

      {/* HERO */}
      <section className="mq-hero">
        <div className="mq-hero-content">
          <span className="mq-label">WELCOME TO MAKKAH QURAN ACADEMY</span>
          <h1>Learn The Holy Quran<br />
            <span>With Knowledge & Guidance</span>
          </h1>
          <p>
            Begin your journey of learning the Holy Quran from the comfort
            of your home with personal online guidance and flexible classes.
          </p>

          <div className="mq-hero-buttons">
            <a href="#mq-courses" className="mq-primary-btn">
              Explore Courses <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#mq-admission" className="mq-outline-btn">
              Enroll Now
            </a>
          </div>

          <div className="mq-hero-features">
            <span><i className="fa-solid fa-check-circle"></i> Online Classes</span>
            <span><i className="fa-solid fa-check-circle"></i> Flexible Timings</span>
            <span><i className="fa-solid fa-check-circle"></i> Personal Guidance</span>
          </div>
        </div>

        <div className="mq-hero-image">
          <img src="/images/abdul-baseer.jpg" alt="Quran teacher Abdul Baseer" />
          <div className="mq-image-caption">
            <i className="fa-solid fa-book-quran"></i>
            <div>
              <strong>Makkah Quran Academy</strong>
              <small>Learn Quran Online</small>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mq-intro">
        <div className="mq-intro-image">
          <img src="/images/haram-meeting.jpg" alt="A visit to the Holy Mosque in Makkah" />
        </div>
        <div className="mq-intro-content">
          <span className="mq-label">ABOUT OUR ACADEMY</span>
          <h2>Bringing Quran Education <span>To Your Home</span></h2>
          <p>
            Makkah Quran Academy aims to make Quran learning accessible
            through online classes. Students can learn Quran reading,
            Tajweed, memorization and Islamic basics with personal guidance.
          </p>
          <p>
            Our goal is to create a comfortable learning environment
            for children and adults, wherever they are.
          </p>
          <a href="#mq-admission" className="mq-text-link">
            Start Learning <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* TEACHER */}
      <section className="mq-teacher">
        <div className="mq-section-heading">
          <span className="mq-label">MEET YOUR TEACHER</span>
          <h2>Learn With <span>Experienced Guidance</span></h2>
          <p>Personal guidance for your Quran learning journey.</p>
        </div>

        <div className="mq-teacher-card">
          <div className="mq-teacher-photo">
            <img src="/images/abdul-baseer.jpg" alt="Abdul Baseer" />
          </div>
          <div className="mq-teacher-info">
            <span className="mq-label">ACADEMY TEACHER</span>
            <h2>Abdul Baseer</h2>
            <h4>Quran Teacher & Imam</h4>
            <p>
              Abdul Baseer brings 15 years of Imamat experience.
              He is dedicated to Quran education and helping students
              develop a better understanding of their religious learning.
            </p>
            <div className="mq-experience">
              <strong>15+</strong>
              <span>Years of Imamat Experience</span>
            </div>
            <a href="#mq-admission" className="mq-primary-btn">
              Learn With Us <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="mq-courses" id="mq-courses">
        <div className="mq-section-heading">
          <span className="mq-label">OUR PROGRAMS</span>
          <h2>Explore Our <span>Quran Courses</span></h2>
          <p>Choose a course that suits your learning goals.</p>
        </div>

        <div className="mq-course-grid">
          {courses.map((course, index) => (
            <div className="mq-course-card" key={index}>
              <div className="mq-course-icon">
                <i className={`fa-solid ${course.icon}`}></i>
              </div>
              <h3>{course.title}</h3>
              <p>{course.text}</p>
              <a href="#mq-admission">
                Enroll Now <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mq-why">
        <div className="mq-section-heading">
          <span className="mq-label">WHY MAKKAH QURAN ACADEMY</span>
          <h2>A Better Way To <span>Learn Quran</span></h2>
        </div>

        <div className="mq-why-grid">
          <div><i className="fa-solid fa-laptop"></i><h3>Online Learning</h3><p>Learn from home through online classes.</p></div>
          <div><i className="fa-solid fa-user-graduate"></i><h3>Personal Attention</h3><p>Guidance according to each student's learning needs.</p></div>
          <div><i className="fa-solid fa-clock"></i><h3>Flexible Schedule</h3><p>Discuss class timings that suit your routine.</p></div>
          <div><i className="fa-solid fa-globe"></i><h3>Worldwide Students</h3><p>Online learning opportunities for students in different countries.</p></div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mq-gallery">
        <div className="mq-section-heading">
          <span className="mq-label">OUR GALLERY</span>
          <h2>Moments of <span>Faith & Learning</span></h2>
        </div>
        <div className="mq-gallery-grid">
          <img src="/images/abdul-baseer2.jpg" alt="Academy teacher" />
          <img src="/images/abdul-basser-3.jpg" alt="Visit to the Holy Mosque" />
        </div>
      </section>

      {/* ADMISSION */}
      <section className="mq-admission" id="mq-admission">
        <div className="mq-admission-heading">
          <span className="mq-label">ADMISSIONS OPEN</span>
          <h2>Start Your Quran Learning Journey Today</h2>
          <p>Complete the inquiry form and our academy will contact you.</p>
        </div>

        <form className="mq-admission-form">
          <div className="mq-form-grid">
            <div>
              <label>Student Name *</label>
              <input type="text" placeholder="Enter student name" required />
            </div>
            <div>
              <label>Student Age *</label>
              <input type="number" min="3" max="100" placeholder="Enter age" required />
            </div>
            <div>
              <label>Parent / Guardian Name</label>
              <input type="text" placeholder="Parent or guardian name" />
            </div>
            <div>
              <label>Country *</label>
              <input type="text" placeholder="Enter your country" required />
            </div>
            <div>
              <label>WhatsApp Number *</label>
              <input type="tel" placeholder="+92..." required />
            </div>
            <div>
              <label>Select Course *</label>
              <select defaultValue="" required>
                <option value="" disabled>Select a course</option>
                {courses.map((course, index) => (
                  <option key={index}>{course.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mq-message-field">
            <label>Additional Details</label>
            <textarea rows="4" placeholder="Tell us about your learning requirements..."></textarea>
          </div>

          <button type="submit">
            Submit Admission Inquiry <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </section>

      {/* FINAL CTA */}
      <section className="mq-final-cta">
        <h2>Ready To Begin Learning The Holy Quran?</h2>
        <p>Contact Makkah Quran Academy for course details and enrollment.</p>
        <a href="#mq-admission">Join Our Academy <i className="fa-solid fa-arrow-right"></i></a>
      </section>

    </main>
  );
}

export default Quran;
