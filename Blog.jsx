
import { useState } from 'react';

function Blog() {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');

    const blogs = [
        {
            id: 1,
            category: 'Translation',
            date: 'November 08, 2026',
            title: 'Why Professional Arabic Translation Matters for Your Documents',
            description: 'Discover why accurate Arabic translation is essential for legal, academic, business and official documents.',
            image: 'https://images.unsplash.com/photo-1543109740-4bdb38fda756?w=800',
            author: 'Al Siddiq Team',
            read: '5 min read'
        },
        {
            id: 2,
            category: 'Legal',
            date: 'November 05, 2026',
            title: 'A Complete Guide to Certified Legal Document Translation',
            description: 'Learn about certified translations, their importance and where you may need them for official purposes.',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
            author: 'Al Siddiq Team',
            read: '6 min read'
        },
        {
            id: 3,
            category: 'Visa',
            date: 'November 02, 2026',
            title: 'Documents You May Need for an Embassy Visa Application',
            description: 'Understand common document requirements and the importance of accurate translations for visa applications.',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
            author: 'Al Siddiq Team',
            read: '4 min read'
        },
        {
            id: 4,
            category: 'Languages',
            date: 'October 28, 2026',
            title: 'Arabic, English and Other Languages: Breaking Communication Barriers',
            description: 'Explore how professional language services help individuals and businesses communicate globally.',
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
            author: 'Al Siddiq Team',
            read: '5 min read'
        },
        {
            id: 5,
            category: 'Business',
            date: 'October 24, 2026',
            title: 'The Importance of Professional Translation in International Business',
            description: 'Discover how reliable translation services support international partnerships and business growth.',
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
            author: 'Al Siddiq Team',
            read: '7 min read'
        },
        {
            id: 6,
            category: 'Legal',
            date: 'October 20, 2026',
            title: 'Understanding Affidavit Translation and Official Documents',
            description: 'A useful introduction to affidavit translation and preparing documents for official submission.',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
            author: 'Al Siddiq Team',
            read: '4 min read'
        }
    ];

    const categories = ['All', 'Translation', 'Legal', 'Visa', 'Languages', 'Business'];

    const filteredBlogs = blogs.filter(blog =>
        (category === 'All' || blog.category === category) &&
        (blog.title.toLowerCase().includes(search.toLowerCase()) ||
         blog.description.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="blog-page">

            {/* Hero */}
            <section className="blog-hero">
                <div className="blog-hero-content">
                    <span className="blog-tag">OUR KNOWLEDGE HUB</span>
                    <h1>Insights, Language & <span>Global Communication</span></h1>
                    <p>
                        Explore expert insights, practical guides and useful information
                        about professional translation, legal documents, visa preparation
                        and international communication.
                    </p>
                    <a href="#blog-articles" className="blog-hero-btn">
                        Explore Articles <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </section>

            {/* Featured Blog */}
            <section className="featured-blog">
                <div className="featured-image">
                    <img
                        src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000"
                        alt="Professional translation and writing"
                    />
                </div>

                <div className="featured-content">
                    <span className="featured-label">FEATURED ARTICLE</span>
                    <span className="featured-category">Translation Guide</span>

                    <h2>The Value of Accurate Translation in a Connected World</h2>

                    <p>
                        Language connects people, businesses and communities.
                        Discover how professional human translation makes
                        communication clearer and helps documents retain their
                        intended meaning across languages.
                    </p>

                    <div className="featured-meta">
                        <span>
                            <i className="fa-regular fa-calendar"></i>
                            November 10, 2026
                        </span>
                        <span>
                            <i className="fa-regular fa-clock"></i>
                            6 min read
                        </span>
                    </div>

                    <a href="#blog-articles" className="featured-link">
                        Read Articles <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </section>

            {/* Blog Articles */}
            <section className="blog-articles" id="blog-articles">

                <div className="blog-heading">
                    <span>EXPLORE OUR BLOG</span>
                    <h2>Latest Articles & <strong>Insights</strong></h2>
                    <p>Useful knowledge to help you make informed decisions.</p>
                </div>

                {/* Search */}
                <div className="blog-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Categories */}
                <div className="blog-categories">
                    {categories.map(item => (
                        <button
                            key={item}
                            className={category === item ? 'active' : ''}
                            onClick={() => setCategory(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Blog Cards */}
                <div className="blog-grid">

                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map(blog => (
                            <article className="blog-card" key={blog.id}>

                                <div className="blog-card-image">
                                    <img src={blog.image} alt={blog.title} />
                                    <span>{blog.category}</span>
                                </div>

                                <div className="blog-card-content">

                                    <div className="blog-card-date">
                                        <i className="fa-regular fa-calendar"></i>
                                        {blog.date}
                                    </div>

                                    <h3>{blog.title}</h3>
                                    <p>{blog.description}</p>

                                    <div className="blog-card-footer">
                                        <span>{blog.author}</span>
                                        <span>{blog.read}</span>
                                    </div>

                                    <a
                                        href={`mailto:alsiddiqtranslation@gmail.com?subject=${encodeURIComponent(blog.title)}`}
                                        className="blog-read-more"
                                    >
                                        Contact Us
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>

                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="no-blog">
                            <i className="fa-solid fa-file-circle-xmark"></i>
                            <h3>No Articles Found</h3>
                            <p>Try searching with another keyword.</p>
                            <button onClick={() => {
                                setSearch('');
                                setCategory('All');
                            }}>
                                Clear Filters
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* Newsletter */}
            <section className="blog-newsletter">
                <div>
                    <span>STAY INFORMED</span>
                    <h2>Knowledge Opens <strong>New Doors</strong></h2>
                    <p>
                        Have questions about translation or documentation?
                        Contact our professional team for assistance.
                    </p>
                    <a href="mailto:alsiddiqtranslation@gmail.com">
                        Contact Our Team
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className="newsletter-icon">
                    <i className="fa-solid fa-book-open"></i>
                </div>
            </section>

        </div>
    );
}

export default Blog;
