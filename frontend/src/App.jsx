import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Loader from './components/Loader';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Tours = lazy(() => import('./pages/Tours'));
const TourDetail = lazy(() => import('./pages/TourDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Kashmir = lazy(() => import('./pages/Kashmir'));
const Ladakh = lazy(() => import('./pages/Ladakh'));
const Adventure = lazy(() => import('./pages/Adventure'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Store = lazy(() => import('./pages/Store'));
const About = lazy(() => import('./pages/About'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <FloatingWhatsApp />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/tours/:id" element={<TourDetail />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/destinations/:id" element={<DestinationDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/kashmir" element={<Kashmir />} />
                <Route path="/ladakh" element={<Ladakh />} />
                <Route path="/adventure" element={<Adventure />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
                <Route path="/thank-you" element={<ThankYou />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
