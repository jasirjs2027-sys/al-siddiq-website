
function Navbar(onContactClick) {
    return (
        <>
        
            <div className="Navbar-main">
                <img
                    src="/images/frent-last.png"
                    alt="Al Siddiq Translation Services"
                />

                <div className="navbar-content">
                    <span className="navbar-tagline">
                        PROFESSIONAL & CERTIFIED TRANSLATIONS
                    </span>

                    <h1>
                        Al Siddiq <span>Translation Services</span>
                    </h1>

                    <p>
                        Providing certified legal translation services
                        you can trust. Accurate, reliable and professional
                        translations for legal, visa, embassy and official
                        documents.
                        for a variety of documents, including passports, birth certificates, 
                        marriage and divorce certificates, academic transcripts and diplomas,
                         police clearance certificates, employment references, driver’s licenses,
                          and medical records. Our translations
                        are done in compliance with embassy requirements and standards.
                    </p>

                    <a
                        href="#"
                        className="navbar-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            onContactClick();
                        }}
                        >
                        <i className="fa-solid fa-phone"></i>
                        Contact Us Today
                        </a>
                </div>
            </div>

            <div className="Navar-row"></div>
        </>
    );
}

export default Navbar;
