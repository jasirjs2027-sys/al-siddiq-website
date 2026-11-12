
import { useEffect, useState } from 'react';

function Aboutsince() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.stats');

      if (section && section.getBoundingClientRect().top < window.innerHeight) {
        setStart(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Counter = ({ number, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let i = 0;
      const timer = setInterval(() => {
        i += Math.ceil(number / 100);

        if (i >= number) {
          i = number;
          clearInterval(timer);
        }

        setCount(i);
      }, 20);

      return () => clearInterval(timer);
    }, [start, number]);

    return <h2>{count.toLocaleString()}{suffix}</h2>;
  };

  return (
    <section className="stats">
      <div className="stats-container">

        <div className="stat-box">
          <div className="stat-icon">★</div>
          <Counter number={2006} />
          <p>ESTABLISHED SINCE</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">📄</div>
          <Counter number={20000} suffix="+" />
          <p>DOCUMENTS PROCESSED</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">🌍</div>
          <Counter number={50} suffix="+" />
          <p>LANGUAGES SUPPORTED</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">✓</div>
          <Counter number={5000} suffix="+" />
          <p>CLIENT CONSULTATIONS</p>
        </div>

      </div>
    </section>
  );
}

export default Aboutsince;
