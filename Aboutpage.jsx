

function Aboutpage() {

    const services = [
        {
            icon: "fa-solid fa-language",
            title: "Translation Services",
            text: "Professional document translation between multiple languages for personal, business and official purposes."
        },
        {
            icon: "fa-solid fa-stamp",
            title: "Certified Translation",
            text: "Translation assistance for certificates, legal documents and official submissions."
        },
        {
            icon: "fa-solid fa-building-columns",
            title: "Embassy Services",
            text: "Language assistance for embassy documentation, visa applications and international communication."
        },
        {
            icon: "fa-solid fa-comments",
            title: "Interpreter Services",
            text: "Interpretation assistance for meetings, interviews, appointments and professional discussions."
        },
        {
            icon: "fa-solid fa-passport",
            title: "Visa Documentation",
            text: "Support with visa forms, appointment guidance and preparation of required documents."
        },
        {
            icon: "fa-solid fa-file-contract",
            title: "Legal Documents",
            text: "Translation of agreements, affidavits, contracts, property documents and other legal papers."
        }
    ];

    const values = [
        {
            icon: "fa-solid fa-award",
            title: "Quality & Accuracy",
            text: "We focus on clear, accurate and carefully prepared translations."
        },
        {
            icon: "fa-solid fa-user-shield",
            title: "Confidentiality",
            text: "We treat personal, legal and business documents with care."
        },
        {
            icon: "fa-solid fa-clock",
            title: "Timely Service",
            text: "We understand the importance of deadlines and appointment schedules."
        },
        {
            icon: "fa-solid fa-globe",
            title: "Multiple Languages",
            text: "We support communication across different languages and cultures."
        }
    ];

    const languages = [
        "English", "Arabic", "Urdu", "Chinese",
        "Persian", "Pashto", "Russian", "German",
        "French", "Spanish", "Italian", "Turkish"
    ];

    return (
        <>
            {/* HERO */}

            <section className="aboutpage-hero">
                <div className="aboutpage-hero-overlay"></div>

                <div className="aboutpage-hero-content">
                    <span>ABOUT AL SIDDIQ SERVICES</span>

                    <h1>
                        Connecting People Through
                        <strong> Language & Communication</strong>
                    </h1>

                    <p>
                        Your trusted partner for translation, interpretation,
                        certified documents and language assistance in
                        Islamabad and Rawalpindi.
                    </p>

                    <a href="#about-company">
                        Discover Our Story
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </section>

            {/* ABOUT COMPANY */}

            <section className="aboutpage-company" id="about-company">

                <div className="aboutpage-company-image">
                    <img
                        src="/images/about-company.jpg"
                        alt="Professional translation and language services"
                    />

                    <div className="aboutpage-experience">
                        <i className="fa-solid fa-globe"></i>
                        <div>
                            <strong>Language Solutions</strong>
                            <span>For Individuals & Businesses</span>
                        </div>
                    </div>
                </div>

                <div className="aboutpage-company-content">
                    <span className="aboutpage-label">
                        WHO WE ARE
                    </span>

                    <h2>
                        Welcome to
                        <strong> Al Siddiq Translation Services</strong>
                    </h2>

                    <p>
                        Al Siddiq Translation Services is a language and
                        documentation service provider based in Islamabad,
                        Pakistan. We help individuals, businesses and
                        organizations overcome language barriers through
                        translation, interpretation and documentation support.
                    </p>

                    <p>
                        Our services cover a wide range of personal,
                        educational, legal and business documents. We also
                        assist clients who need language support for embassy
                        appointments, visa-related matters and international
                        communication.
                    </p>

                    <p>
                        Our aim is to make communication easier by providing
                        clear language solutions and dependable customer
                        assistance.
                    </p>

                    <div className="aboutpage-company-points">
                        <div>
                            <i className="fa-solid fa-circle-check"></i>
                            Translation & Documentation
                        </div>

                        <div>
                            <i className="fa-solid fa-circle-check"></i>
                            Embassy & Visa Assistance
                        </div>

                        <div>
                            <i className="fa-solid fa-circle-check"></i>
                            Multiple Language Support
                        </div>

                        <div>
                            <i className="fa-solid fa-circle-check"></i>
                            Interpreter Arrangements
                        </div>
                    </div>

                    <a href="mailto:alsiddiqtranslation@gmail.com"
                       className="aboutpage-main-btn">
                        Contact Our Team
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </section>

            {/* MISSION AND VISION */}

            <section className="aboutpage-mission">
                <div className="aboutpage-section-heading">
                    <span>OUR PURPOSE</span>
                    <h2>Our Mission & <strong>Vision</strong></h2>
                    <p>
                        Building better communication through language,
                        understanding and professional service.
                    </p>
                </div>

                <div className="aboutpage-mission-grid">

                    <div className="aboutpage-mission-card">
                        <div className="aboutpage-mission-icon">
                            <i className="fa-solid fa-bullseye"></i>
                        </div>

                        <h3>Our Mission</h3>

                        <p>
                            Our mission is to provide accessible and reliable
                            translation, interpretation and documentation
                            assistance. We aim to help people communicate
                            confidently across languages and cultures.
                        </p>
                    </div>

                    <div className="aboutpage-mission-card">
                        <div className="aboutpage-mission-icon">
                            <i className="fa-solid fa-eye"></i>
                        </div>

                        <h3>Our Vision</h3>

                        <p>
                            Our vision is to become a trusted language
                            services partner, connecting individuals and
                            organizations with the wider world through
                            effective communication.
                        </p>
                    </div>

                </div>
            </section>

            {/* SERVICES */}

            <section className="aboutpage-services">
                <div className="aboutpage-section-heading">
                    <span>WHAT WE DO</span>
                    <h2>Our Professional <strong>Services</strong></h2>
                    <p>
                        Complete language and documentation solutions
                        for different personal and professional needs.
                    </p>
                </div>

                <div className="aboutpage-service-grid">
                    {services.map((service, index) => (
                        <div className="aboutpage-service-card" key={index}>
                            <div className="aboutpage-service-icon">
                                <i className={service.icon}></i>
                            </div>

                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}

            <section className="aboutpage-why">
                <div className="aboutpage-section-heading">
                    <span>WHY AL SIDDIQ</span>
                    <h2>Why Choose <strong>Our Services?</strong></h2>
                    <p>
                        We focus on making your language and documentation
                        requirements easier to manage.
                    </p>
                </div>

                <div className="aboutpage-why-grid">
                    {values.map((value, index) => (
                        <div className="aboutpage-why-card" key={index}>
                            <i className={value.icon}></i>
                            <h3>{value.title}</h3>
                            <p>{value.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* LANGUAGES */}

            <section className="aboutpage-languages">
                <div className="aboutpage-language-content">
                    <span>LANGUAGE EXPERTISE</span>

                    <h2>
                        Communicate Without
                        <strong> Language Barriers</strong>
                    </h2>

                    <p>
                        We provide translation and language assistance
                        across a variety of international languages.
                        Contact us to confirm availability for your
                        required language.
                    </p>

                    <div className="aboutpage-language-list">
                        {languages.map((language, index) => (
                            <span key={index}>
                                <i className="fa-solid fa-check"></i>
                                {language}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="aboutpage-language-image">
                    <img
                        src="/images/about-languages.jpg"
                        alt="International languages and communication"
                    />
                </div>
            </section>

            {/* WORKING PROCESS */}

            <section className="aboutpage-process">
                <div className="aboutpage-section-heading">
                    <span>HOW WE WORK</span>
                    <h2>Our Simple Working <strong>Process</strong></h2>
                    <p>
                        Getting started with our services is simple.
                    </p>
                </div>

                <div className="aboutpage-process-grid">

                    <div className="aboutpage-process-card">
                        <span>01</span>
                        <i className="fa-solid fa-message"></i>
                        <h3>Contact Us</h3>
                        <p>
                            Tell us about your translation or language
                            assistance requirements.
                        </p>
                    </div>

                    <div className="aboutpage-process-card">
                        <span>02</span>
                        <i className="fa-solid fa-file-lines"></i>
                        <h3>Share Requirements</h3>
                        <p>
                            Provide the document, language pair or
                            appointment details for review.
                        </p>
                    </div>

                    <div className="aboutpage-process-card">
                        <span>03</span>
                        <i className="fa-solid fa-clipboard-check"></i>
                        <h3>Confirm Service</h3>
                        <p>
                            Discuss service details, availability,
                            charges and expected completion time.
                        </p>
                    </div>

                    <div className="aboutpage-process-card">
                        <span>04</span>
                        <i className="fa-solid fa-handshake"></i>
                        <h3>Get Assistance</h3>
                        <p>
                            Receive the agreed translation or
                            documentation assistance.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA */}

            <section className="aboutpage-cta">
                <div>
                    <span>LET'S WORK TOGETHER</span>

                    <h2>
                        Need Professional Translation
                        or Language Assistance?
                    </h2>

                    <p>
                        Get in touch with Al Siddiq Translation Services
                        to discuss your requirements.
                    </p>
                </div>

                <a href="mailto:alsiddiqtranslation@gmail.com">
                    Contact Us Today
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </section>
        </>
    );
}

export default Aboutpage;
