
import React from "react";
import ScrollReveal from './ScrollReveal';

import {
    ScrollText,
    FileText,
    Scale,
    Landmark,
    BookOpen,
    BriefcaseBusiness,
    Stamp,
    Building2,
    IdCard,
    FileCheck,
    Files,
    ShieldCheck,
    Heart,
    FileBadge,
    MapPin,
    Plane,
    Wallet,
    Stethoscope,
    Building,
    BadgeCheck
} from "lucide-react";

function Translation() {

    const documents = [
        {
            icon: ScrollText,
            title: "Marriage Certificates",
            desc: "Nikah Nama & civil marriage certificates for embassy submission"
        },
        {
            icon: FileText,
            title: "Birth Certificates",
            desc: "NADRA birth certificates translated for all embassies"
        },
        {
            icon: Scale,
            title: "Affidavits & FIRs",
            desc: "First Information Reports and legal affidavits"
        },
        {
            icon: Landmark,
            title: "Court Orders & Rulings",
            desc: "Judicial documents, court pleas and orders"
        },
        {
            icon: BookOpen,
            title: "Academic Degrees & Transcripts",
            desc: "Degree equivalence and university transcripts for abroad"
        },
        {
            icon: BriefcaseBusiness,
            title: "Employment Contracts",
            desc: "Job offers, salary certificates and work contracts"
        },
        {
            icon: Stamp,
            title: "Power of Attorney",
            desc: "Wakalatnama and POA documents for legal representation"
        },
        {
            icon: Building2,
            title: "Property & Title Deeds",
            desc: "Real estate conveyance deeds and property documents"
        },
        {
            icon: IdCard,
            title: "NADRA Identity Cards",
            desc: "NIC and NICOP translations for embassy use"
        },
        {
            icon: FileCheck,
            title: "Government Applications",
            desc: "Official government forms and departmental applications"
        },
        {
            icon: Files,
            title: "Private Applications",
            desc: "Personal applications, private letters and formal requests"
        },
        {
            icon: ShieldCheck,
            title: "Police Character Certificates",
            desc: "Police clearance and character certificates for visa purposes"
        },
        {
            icon: Heart,
            title: "Divorce Certificates",
            desc: "Divorce papers, Khula documents and related certificates"
        },
        {
            icon: FileBadge,
            title: "Death Certificates",
            desc: "Official death registration and related documents"
        },
        {
            icon: MapPin,
            title: "Domicile & PRC Certificates",
            desc: "Domicile, permanent residence and local certificates"
        },
        {
            icon: Plane,
            title: "Visa & Immigration Documents",
            desc: "Visa applications, immigration papers and supporting documents"
        },
        {
            icon: Wallet,
            title: "Bank Statements",
            desc: "Bank statements, financial records and account documents"
        },
        {
            icon: Stethoscope,
            title: "Medical Reports",
            desc: "Medical certificates, health reports and hospital records"
        },
        {
            icon: Building,
            title: "Business Documents",
            desc: "Company registration, business agreements and official records"
        },
        {
            icon: BadgeCheck,
            title: "Experience & Salary Certificates",
            desc: "Employment verification, experience letters and salary slips"
        }
    ];

    return (
        <>
            {/* HERO SECTION */}

            <div className="Navbar-main">

                <img
                    src="/images/frent-last.png"
                    alt="Al Siddiq Translation Services"
                />

                <div className="Translation-content">

                    <span className="Translation-tagline">
                        Certified Translation & Language Services
                    </span>

                    <h1>Certified Translation</h1>

                    <h2>Language Services</h2>

                    <p>
                        Pakistan’s trusted name in professional translation services since 2006. We provide accurate, certified, and officially recognized translations accepted by embassies, government departments, universities, and international organizations. Our experienced translators specialize in legal, academic, immigration, visa, business, and official documentation in 50+ international languages. From personal certificates to complex legal documents, we ensure quality, confidentiality, and professional accuracy in every translation.
                    </p>

                    <a href="#contact" className="navbar-btn">
                        Please Submit Document →
                    </a>

                </div>
            </div>

            {/* TRUST BAR */}

            <div className="Translation-row">

                <div className="trust-item">
                    <span>♢</span>
                    Embassy Accepted Translations
                </div>

                <div className="trust-item">
                    <span>♙</span>
                    Certified Since 2006
                </div>

                <div className="trust-item">
                    <span>◎</span>
                    50+ Languages
                </div>

                <div className="trust-item">
                    <span>✓</span>
                    Court Authorized
                </div>

                <div className="trust-item">
                    <span>♙</span>
                    Notarized Copies Available
                </div>

            </div>

            {/* DOCUMENT TRANSLATION SECTION */}

            <section className="document-section">

                <div className="document-heading">

                    <span>OUR TRANSLATION SERVICES</span>

                    <h2>Documents We Translate</h2>

                    <p>
                        Professional and certified translation services
                        for personal, legal, educational and official documents.
                    </p>

                </div>

                <div className="document-grid">

                    {documents.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <div
                                className="document-card"
                                key={index}
                            >

                                <Icon
                                    className="document-icon"
                                    size={23}
                                />

                                <h3>{item.title}</h3>

                                <p>{item.desc}</p>

                            </div>
                        );

                    })}

                </div>

            </section>

            {/* ARABIC TRANSLATION EXPERT SECTION */}

            <section className="arabic-section">

                <div className="arabic-image">

                    <img
                        src="/images/arabic.png"
                        alt="Arabic Translation Expert"
                    />

                    <div className="arabic-badge">
                        Arabic Expert
                        <span>★★★★★</span>
                    </div>

                </div>

                <div className="arabic-content">

                    <span className="arabic-tag">
                        PROFESSIONAL LANGUAGE SPECIALISTS
                    </span>

                    <h2>
                        Arabic Translation
                        <span> Experts</span>
                    </h2>

                    <h3>
                        Professional Arabic Translation Services
                    </h3>

                    <p>
                        Al Siddiq Translation Services provides
                        professional Arabic translation services
                        for individuals, businesses, legal
                        professionals and international organizations.

                        Our experienced Arabic translators focus
                        on accurate translation while maintaining
                        the original meaning, terminology and
                        context of every document.
                    </p>

                    <div className="arabic-details">

                        <div>✓ Arabic to English Translation</div>
                        <div>✓ English to Arabic Translation</div>
                        <div>✓ Arabic to Urdu Translation</div>
                        <div>✓ Legal & Official Documents</div>
                        <div>✓ Embassy & Immigration Documents</div>
                        <div>✓ Business & Academic Documents</div>
                        <div>✓ Confidential Document Handling</div>
                        <div>✓ Professional Proofreading</div>

                    </div>

                    <p className="arabic-note">
                        We focus on accuracy, clarity and
                        professional presentation in every
                        Arabic translation project.
                    </p>

                    <a href="#contact" className="arabic-btn">
                        Get Arabic Translation →
                    </a>

                </div>

            </section>

            {/* SCROLL REVEAL ANIMATION */}

            <ScrollReveal />

        </>
    );
}

export default Translation;
