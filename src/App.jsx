import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import CustomerReview from './components/CustomerReview';
import HireUs from './components/HireUs';
import ContactUs from './components/ContactUs';
import Blockchain from './components/Blockchain';
import SmartContracts from './components/SmartContract';
import MobileApps from './components/MobileApps';
import WebDevelopment from './components/WebDevment';
import ErrorPage from './components/ErrorPage';

import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </>
);

const FullPage = () => (
  <>
    <section id="home">
      <HomePage />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="customerreview">
      <CustomerReview />
    </section>
    <section id="about">
      <AboutUs />
    </section>
    <section id="hireus">
      <HireUs />
    </section>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<FullPage />} />
          <Route path="/home" element={<FullPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/customerreview" element={<CustomerReview />} />
          <Route path="/hireus" element={<HireUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/blockchain" element={<Blockchain />} />
          <Route path="/services/smart-contracts" element={<SmartContracts />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />

          {/* Catch-all 404 route */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
