
import { Link } from 'react-router-dom';

function Hero({ onTranslationClick }) {
  return (
    <section className="contanir-hero" id="services">
      <div className="main-hero">
        <h2><i>Our Services</i></h2>
        <hr />
      </div>

      <div className="services-container">

        <article className="service-box">
          <img src="/images/services-1.png" alt="Certified document translation" />
          <h3>Certified Translation Services</h3>
          <p>We provide accurate translation of official, legal and personal documents for professional and everyday needs.</p>
          <Link to="/certified-translation">
            <button type="button" onClick={onTranslationClick}>Read More</button>
          </Link>
        </article>

        <article className="service-box">
          <img src="/images/services-2.png" alt="Quran with Tajweed" />
          <h3>Quran With Tajweed</h3>
          <p>We offer Quran learning support with a focus on correct pronunciation, recitation and the basic rules of Tajweed.</p>
          <Link to="/quran-tajweed">
            <button type="button">Read More</button>
          </Link>
        </article>

        <article className="service-box">
          <img src="/images/services-3.png" alt="Legal document translation" />
          <h3>Legal Document Translation</h3>
          <p>We translate affidavits, agreements, contracts, certificates and other important legal documents with care and accuracy.</p>
          <Link to="/legal-translation">
            <button type="button">Read More</button>
          </Link>
        </article>

        <article className="service-box">
          <img src="/images/services-4.png" alt="Visa and immigration documents" />
          <h3>Visa & Immigration Documents</h3>
          <p>We translate passports, birth and marriage certificates, educational records and other immigration-related documents.</p>
          <Link to="/visa-immigration">
            <button type="button">Read More</button>
          </Link>
        </article>

        <article className="service-box">
          <img src="/images/services-5.png" alt="Multiple language translation" />
          <h3>Multiple Language Translation</h3>
          <p>Translation support in English, Urdu, Arabic, Persian, Pashto, Spanish, German, Italian, Chinese and more.</p>
          <Link to="/language-translation">
            <button type="button">Read More</button>
          </Link>
        </article>

        <article className="service-box">
          <img src="/images/services-6.png" alt="Professional interpretation" />
          <h3>Professional Interpretation</h3>
          <p>We provide language assistance for individuals, businesses and organizations to help make communication easier.</p>
          <Link to="/interpretation">
            <button type="button">Read More</button>
          </Link>
        </article>

        <article className="service-box">
          <img src="/images/services-7.png" alt="International document attestation assistance" />
          <h3>Airline & Embassy Attestation Assistance</h3>
          <p>We assist with document attestation and related requirements for international use, including destinations such as China, Spain, Italy, Turkey, India and other countries.</p>
          <Link to="/attestation">
            <button type="button">Read More</button>
          </Link>
        </article>

        <article className="service-box">
          <img src="/images/services-8.png" alt="Affidavit and notary documentation" />
          <h3>Affidavit & Notary Documentation</h3>
          <p>We help prepare affidavits and provide notary-related documentation assistance for personal and official requirements.</p>
          <Link to="/affidavit-notary">
            <button type="button">Read More</button>
          </Link>
        </article>

      </div>

      {/* LANGUAGES SECTION */}
      <section className="languages-section">

        <div className="languages-heading">
          <span>OUR LANGUAGE SERVICES</span>
          <h2>Languages We Translate</h2>
          <p>
            We provide professional translation services in multiple
            languages with accuracy, quality and reliability.
          </p>
        </div>

        <div className="languages-container">
          {[
            "Arabic", "English", "Urdu", "Pashto",
            "German", "Spanish", "Italian", "Chinese",
            "Turkish", "French", "Hindi", "Punjabi",
            "Japanes", "Korean", "Portuguese", "Dutch",
            "Swedish", "Norwegian", "Danish", "Greek", "Hebrew"
          ].map((language, index) => (
            <div className="language-card" key={index}>
              <i className="fa-solid fa-language"></i>
              <span>{language}</span>
            </div>
          ))}
        </div>

        <div className="languages-footer">
          <h3>Need Translation in Another Language?</h3>
          <p>
            Contact Al Siddiq Translation Services for your
            document translation requirements.
          </p>
          <a href="https://wa.me/923335026595">
            Contact Us
          </a>
        </div>

      </section>
    </section>
  );
}

export default Hero;
