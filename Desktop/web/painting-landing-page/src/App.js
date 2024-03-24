import './App.scss';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ProjectsGallery from './components/ProjectsGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Hero />
      <AboutUs className="wrapper" />
      <Services />
      <Testimonials />
      <ProjectsGallery />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App;
