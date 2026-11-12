
import { useEffect } from 'react';

function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(`
      .Navbar-main,
      .navbar-content > *,
      .main-hero,
      .services-container,
      .service-box,
      .root,
      .root img,
      .why,
      .why-box > div,
      .stats,
      .stat-box,
      .testimonial-section,
      .testimonials,
      .testimonial-card,
      .footer-main,
      .footer-box,
      .footer-bottom
    `);

    // If browser does not support IntersectionObserver,
    // keep everything visible.
    if (!('IntersectionObserver' in window)) {
      return;
    }

    elements.forEach((element) => {
      element.classList.add('scroll-reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}

export default ScrollReveal;
