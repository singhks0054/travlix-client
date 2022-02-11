import { Routes, Route } from 'react-router-dom'
import Header from './Pages/Header.js'
import Home from './Pages/Home.js'
import Offers from './Pages/Offers.js';
import Package from './Pages/Package.js';
import Review from './Pages/Review.js';
import Trending from './Pages/Trending.js';
import Contact from './Pages/Contact.js';
import ContactA from './Pages/ContactA.js';
import Footer from './Pages/Footer.js';
import About from './Pages/About.js';
import Offer from './Pages/Offer.js';
import News from './Pages/News.js';
import LabelForm from './Pages/LabelForm.js';
import Login from './Pages/Login.js';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path={'/'} element={<>
          <Home />
          <LabelForm navbar={true} />
          <Package />
          <Offers />
          <Review />
          <Trending />
          <Contact />
        </>} />
        <Route path={'/about'} element={<> <About /></>} />
        <Route path={'/offer'} element={<Offer />} />
        <Route path={'/offer/*'} element={<h1 style={{ textAling: 'center' }} >Coming Soon</h1>} />
        <Route path={'/news'} element={<News />} />
        <Route path={'/news/*'} element={<h1 style={{ textAling: 'center' }} >Coming Soon . . .</h1>} />
        <Route path={'/contact'} element={<ContactA />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
