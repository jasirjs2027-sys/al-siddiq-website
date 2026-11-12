import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import Header from './compontant/Header';
import Navbar from './compontant/Navbar';
import Services from './compontant/Services';
import Hero from './compontant/Hero';
import Aboutservices from './compontant/Aboutservices';
import Aboutstiff from './compontant/Aboutstiff';
import Aboutsince from './compontant/Aboutsince';
import Footer from './compontant/Footer';
import ScrollReveal from './compontant/ScrollReveal';

import Arabic from './compontant/Arabic';
import Quran from './compontant/Quran';
import Translation from './compontant/Translation';
import Blog from './compontant/Blog';
import Interpreter from './compontant/Interpreter';
import Aboutpage from './compontant/Aboutpage';
import Contact from './compontant/Contact';

// Add these when you create their files
// import Urdu from './compontant/Urdu';
// import Japanese from './compontant/Japanese';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Services />
      <Hero onTranslationClick={() => navigate('/translation')} />
      <Aboutservices />
      <Aboutstiff />
      <Aboutsince />
    </>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Scroll to top on every route change (also works with back/forward buttons)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // NAVIGATE TO URL
  const goTo = (path) => navigate(path);

  return (
    <div>
      {/* HEADER */}
      <Header
        onHomeClick={() => goTo('/')}
        onArabicClick={() => goTo('/arabic')}
        onQuranClick={() => goTo('/quran')}
        onUrduClick={() => goTo('/urdu')}
        onJapaneseClick={() => goTo('/japanese')}
        onTranslationClick={() => goTo('/translation')}
        onBlogClick={() => goTo('/blog')}
        onInterpreterClick={() => goTo('/interpreter')}
        onAboutClick={() => goTo('/about')}
        onContactClick={() => goTo('/contact')}
      />

      {/* PAGES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/arabic" element={<Arabic />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/interpreter" element={<Interpreter />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/urdu" element={<Urdu />} /> */}
        {/* <Route path="/japanese" element={<Japanese />} /> */}

        {/* Unknown URL → home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* FOOTER */}
      <Footer />

      {/* SCROLL REVEAL */}
      <ScrollReveal />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;