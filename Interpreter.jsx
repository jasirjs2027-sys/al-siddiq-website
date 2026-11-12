


function Interpreter() {
    const languages = [
        { name: "Arabic", native: "العربية", flag: "🇸🇦" },
        { name: "English", native: "English", flag: "🇬🇧" },
        { name: "Chinese", native: "中文", flag: "🇨🇳" },
        { name: "Russian", native: "Русский", flag: "🇷🇺" },
        { name: "French", native: "Français", flag: "🇫🇷" },
        { name: "German", native: "Deutsch", flag: "🇩🇪" },
        { name: "Spanish", native: "Español", flag: "🇪🇸" },
        { name: "Persian", native: "فارسی", flag: "🇮🇷" },
        { name: "Turkish", native: "Türkçe", flag: "🇹🇷" },
        { name: "Pashto", native: "پښتو", flag: "🇦🇫" },
        { name: "Italian", native: "Italiano", flag: "🇮🇹" },
        { name: "Urdu", native: "اردو", flag: "🇵🇰" }
    ];

    const services = [
        {
            icon: "fa-solid fa-building-columns",
            title: "Embassy Interpretation",
            text: "Professional language assistance for embassy appointments, interviews and official meetings."
        },
        {
            icon: "fa-solid fa-passport",
            title: "Visa Interview Interpreter",
            text: "Language support during visa interviews and immigration-related appointments."
        },
        {
            icon: "fa-solid fa-scale-balanced",
            title: "Legal Interpretation",
            text: "Interpretation assistance for legal consultations, lawyers and official discussions."
        },
        {
            icon: "fa-solid fa-handshake",
            title: "Business Meetings",
            text: "Clear communication between international clients, companies and business partners."
        },
        {
            icon: "fa-solid fa-user-doctor",
            title: "Medical Interpretation",
            text: "Language assistance for medical consultations and communication with healthcare professionals."
        },
        {
            icon: "fa-solid fa-video",
            title: "Online Interpretation",
            text: "Remote interpretation support through online meetings and video calls."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="interpreter-hero">
                <div className="interpreter-overlay"></div>

                <div className="interpreter-hero-content">
                    <span className="interpreter-tag">
                        PROFESSIONAL LANGUAGE SERVICES
                    </span>

                    <h1>
                        Professional <strong>Interpreter</strong> Services
                    </h1>

                    <p>
                        Breaking Language Barriers with Professional
                        Interpretation for Embassies, Visa Interviews,
                        Legal Meetings and International Communication.
                    </p>

                    <div className="interpreter-buttons">
                        <a href="https://wa.me/923335026595" className="interpreter-btn">
                            <i className="fa-brands fa-whatsapp"></i>
                            Book an Interpreter
                        </a>

                        <a href="mailto:alsiddiqtranslation@gmail.com" className="interpreter-outline-btn">
                            Contact Us
                        </a>
                    </div>

                    <div className="interpreter-stats">
                        <div>
                            <h3>12+</h3>
                            <span>Languages</span>
                        </div>
                        <div>
                            <h3>Professional</h3>
                            <span>Language Support</span>
                        </div>
                        <div>
                            <h3>Online & On-site</h3>
                            <span>Interpretation</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="interpreter-intro">
                <div className="interpreter-intro-image">
                    <img
                        src="/images/interpreter.png"
                        alt="Professional interpreter assisting during an international meeting"
                    />
                    <div className="interpreter-image-label">
                        <i className="fa-solid fa-globe"></i>
                        Connecting People Through Languages
                    </div>
                </div>

                <div className="interpreter-intro-content">
                    <span className="interpreter-small-title">
                        AL SIDDIQ LANGUAGE SERVICES
                    </span>

                    <h2>
                        Your Trusted Partner for
                        <strong> Interpretation Services</strong>
                    </h2>

                    <p>
                        Al Siddiq Translation Services provides professional
                        interpretation assistance for individuals, businesses
                        and international visitors in Islamabad and Rawalpindi.
                    </p>

                    <p>
                        Whether you need an interpreter for an embassy
                        appointment, visa interview, business meeting or legal
                        consultation, we help you communicate clearly and
                        confidently.
                    </p>

                    <div className="interpreter-checks">
                        <span><i className="fa-solid fa-circle-check"></i> Multiple Language Support</span>
                        <span><i className="fa-solid fa-circle-check"></i> Online & On-site Assistance</span>
                        <span><i className="fa-solid fa-circle-check"></i> Appointment-Based Services</span>
                        <span><i className="fa-solid fa-circle-check"></i> Confidential Communication</span>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="interpreter-services">
                <div className="interpreter-section-heading">
                    <span>WHAT WE OFFER</span>
                    <h2>Our Interpretation <strong>Services</strong></h2>
                    <p>Professional language assistance for different personal and professional needs.</p>
                </div>

                <div className="interpreter-service-grid">
                    {services.map((service, index) => (
                        <div className="interpreter-service-card" key={index}>
                            <div className="interpreter-service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                            <a href="mailto:alsiddiqtranslation@gmail.com">
                                Enquire Now <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Languages */}
            <section className="interpreter-languages">
                <div className="interpreter-section-heading">
                    <span>LANGUAGES WE SUPPORT</span>
                    <h2>Interpretation in <strong>Multiple Languages</strong></h2>
                    <p>Language assistance for international communication and official appointments.</p>
                </div>

                <div className="interpreter-language-grid">
                    {languages.map((language, index) => (
                        <div className="interpreter-language-card" key={index}>
                            <span className="interpreter-flag">{language.flag}</span>
                            <div>
                                <h3>{language.name}</h3>
                                <p>{language.native}</p>
                            </div>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="interpreter-why">
                <div className="interpreter-section-heading">
                    <span>WHY CHOOSE AL SIDDIQ</span>
                    <h2>Communication Without <strong>Barriers</strong></h2>
                </div>

                <div className="interpreter-why-grid">
                    <div>
                        <i className="fa-solid fa-user-tie"></i>
                        <h3>Professional Assistance</h3>
                        <p>Interpreter arrangements according to your language and appointment requirements.</p>
                    </div>

                    <div>
                        <i className="fa-solid fa-clock"></i>
                        <h3>Flexible Scheduling</h3>
                        <p>Plan interpretation assistance according to your meeting and appointment schedule.</p>
                    </div>

                    <div>
                        <i className="fa-solid fa-lock"></i>
                        <h3>Confidentiality</h3>
                        <p>Your personal and professional conversations are handled with care.</p>
                    </div>

                    <div>
                        <i className="fa-solid fa-earth-asia"></i>
                        <h3>International Languages</h3>
                        <p>Language support for communication with people from different countries.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="interpreter-cta">
                <div>
                    <span>NEED AN INTERPRETER?</span>
                    <h2>Let's Make Communication Easy!</h2>
                    <p>
                        Contact Al Siddiq Translation Services to discuss
                        your language and interpretation requirements.
                    </p>
                </div>

                <a href="https://wa.me/923000000000">
                    <i className="fa-brands fa-whatsapp"></i>
                    Contact on WhatsApp
                </a>
            </section>
        </>
    );
}

export default Interpreter;
