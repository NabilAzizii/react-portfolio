import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import SocialLink from './components/SocialLink.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
 return (
  <div>
   <NavBar />
   <Home />
   <About />
   <Portfolio />
   <Experience />
   <Contact />
   <Footer />
   <SocialLink />
  </div>
 );
}

export default App;
