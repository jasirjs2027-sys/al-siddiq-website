const WHATSAPP_LINK = "https://wa.me/923335254896";
const PHONE_TEXT = "0333 5254896";

const courses = {
  arabic: {
    lang: "ar",
    dir: "rtl",
    tag: "ONLINE ARABIC COURSE",
    title: "Learn Arabic Language",
    heroText:
      "Start your Arabic learning journey with professional guidance and easy lessons.",
    enrollText: "Enroll Now",
    aboutLabel: "ABOUT THE COURSE",
    aboutTitle: "Learn Arabic With Confidence",
    aboutText:
      "Our Arabic Language Course is designed for students who want to learn Arabic from the beginning. Learn basic vocabulary, grammar, reading and speaking with proper guidance.",
    aboutBoxTitle: "Easy Learning",
    aboutBoxText: "Simple lessons to help students understand Arabic step by step.",
    learnTitle: "What You Will Learn",
    learnItems: [
      { icon: "fa-solid fa-language", title: "Arabic Vocabulary", text: "Learn useful Arabic words and their meanings." },
      { icon: "fa-solid fa-book", title: "Arabic Grammar", text: "Understand basic Arabic grammar and sentence structure." },
      { icon: "fa-solid fa-comments", title: "Speaking Skills", text: "Improve your Arabic communication skills." },
      { icon: "fa-solid fa-pen", title: "Reading & Writing", text: "Practice reading and writing Arabic sentences." },
    ],
    teacherTitle: "Meet Your Teacher",
    teacherName: "Abdul Baseer",
    teacherText: "Learn Arabic with proper guidance and step-by-step lessons.",
    ctaTitle: "Ready to Start Learning Arabic?",
    ctaText: "Contact us today to get course information and enrollment details.",
    ctaButton: "Contact Us on WhatsApp",
  },

  urdu: {
    lang: "ur",
    dir: "rtl",
    tag: "ONLINE URDU COURSE",
    title: "Learn Urdu Language",
    heroText:
      "Start your Urdu learning journey, from the alphabet to fluent reading and speaking, with easy lessons.",
    enrollText: "Enroll Now",
    aboutLabel: "ABOUT THE COURSE",
    aboutTitle: "Learn Urdu With Confidence",
    aboutText:
      "Our Urdu Language Course is designed for students who want to read, write and speak Urdu from the beginning. Learn the alphabet, vocabulary, grammar and conversation with proper guidance.",
    aboutBoxTitle: "Easy Learning",
    aboutBoxText: "Simple lessons to help students understand Urdu step by step.",
    learnTitle: "What You Will Learn",
    learnItems: [
      { icon: "fa-solid fa-font", title: "Urdu Alphabet", text: "Learn the Urdu alphabet and how each letter is written." },
      { icon: "fa-solid fa-language", title: "Urdu Vocabulary", text: "Learn everyday Urdu words and their meanings." },
      { icon: "fa-solid fa-book", title: "Urdu Grammar", text: "Understand basic Urdu grammar and sentence structure." },
      { icon: "fa-solid fa-comments", title: "Speaking Skills", text: "Improve your Urdu conversation skills." },
    ],
    teacherTitle: "Meet Your Teacher",
    teacherName: "Abdul Baseer",
    teacherText: "Learn Urdu with proper guidance and step-by-step lessons.",
    ctaTitle: "Ready to Start Learning Urdu?",
    ctaText: "Contact us today to get course information and enrollment details.",
    ctaButton: "Contact Us on WhatsApp",
  },

  japanese: {
    lang: "ja",
    dir: "ltr",
    tag: "ONLINE JAPANESE COURSE",
    title: "Learn Japanese Language",
    heroText:
      "Start your Japanese learning journey with Hiragana, Katakana, Kanji and speaking practice.",
    enrollText: "Enroll Now",
    aboutLabel: "ABOUT THE COURSE",
    aboutTitle: "Learn Japanese With Confidence",
    aboutText:
      "Our Japanese Language Course is designed for students who want to learn Japanese from the beginning. Learn basic vocabulary, grammar, reading and speaking with proper guidance.",
    aboutBoxTitle: "Easy Learning",
    aboutBoxText: "Simple lessons to help students understand Japanese step by step.",
    learnTitle: "What You Will Learn",
    learnItems: [
      { icon: "fa-solid fa-font", title: "Hiragana & Katakana", text: "Learn the two basic Japanese writing systems." },
      { icon: "fa-solid fa-language", title: "Japanese Vocabulary", text: "Learn useful Japanese words and their meanings." },
      { icon: "fa-solid fa-book", title: "Japanese Grammar", text: "Understand basic Japanese grammar and sentence structure." },
      { icon: "fa-solid fa-comments", title: "Speaking Skills", text: "Improve your Japanese communication skills." },
    ],
    teacherTitle: "Meet Your Teacher",
    teacherName: "Abdul Baseer",
    teacherText: "Learn Japanese with proper guidance and step-by-step lessons.",
    ctaTitle: "Ready to Start Learning Japanese?",
    ctaText: "Contact us today to get course information and enrollment details.",
    ctaButton: "Contact Us on WhatsApp",
  },
};

function LanguageCoursePage({ course: c }) {
  return (
    <div className="arabic-page" lang={c.lang} dir={c.dir}>

      {/* HERO SECTION */}
      <section className="arabic-hero">
        <div className="arabic-hero-content">
          <span className="arabic-tag">{c.tag}</span>
          <h1>{c.title}</h1>
          <p>{c.heroText}</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="arabic-btn">
            <i className="fa-brands fa-whatsapp"></i> {c.enrollText}
          </a>
        </div>
      </section>

      {/* ABOUT COURSE */}
      <section className="arabic-about">
        <div className="arabic-about-text">
          <span className="arabic-small-title">{c.aboutLabel}</span>
          <h2>{c.aboutTitle}</h2>
          <p>{c.aboutText}</p>
        </div>

        <div className="arabic-about-box">
          <i className="fa-solid fa-book-open"></i>
          <h3>{c.aboutBoxTitle}</h3>
          <p>{c.aboutBoxText}</p>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="arabic-learn">
        <span className="arabic-small-title">COURSE CONTENT</span>
        <h2>{c.learnTitle}</h2>

        <div className="arabic-learn-grid">
          {c.learnItems.map((item) => (
            <div className="arabic-learn-card" key={item.title}>
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEACHER SECTION */}
      <section className="arabic-teacher">
        <div className="arabic-teacher-icon">
          <i className="fa-solid fa-chalkboard-user"></i>
        </div>

        <div className="arabic-teacher-info">
          <span className="arabic-small-title">YOUR INSTRUCTOR</span>
          <h2>{c.teacherTitle}</h2>
          <h3>{c.teacherName}</h3>
          <p>{c.teacherText}</p>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="arabic-btn">
            <i className="fa-brands fa-whatsapp"></i> Contact Teacher: {PHONE_TEXT}
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="arabic-cta">
        <h2>{c.ctaTitle}</h2>
        <p>{c.ctaText}</p>

        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="arabic-btn">
          {c.ctaButton}
        </a>
      </section>

    </div>
  );
}

export function Arabic() {
  return <LanguageCoursePage course={courses.arabic} />;
}

export function Urdu() {
  return <LanguageCoursePage course={courses.urdu} />;
}

export function Japanese() {
  return <LanguageCoursePage course={courses.japanese} />;
}