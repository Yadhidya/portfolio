import './App.css';
import AboutMe from './Components/AboutMe';
import Achievements from './Components/Achievements';
import Career from './Components/Career';
import ContactMe from './Components/ContactMe';
import Education from './Components/Education';
import Header from './Components/Header';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full text-white ">
    
      <Header />

      
      <main className="pt-20 px-4 sm:px-6 md:px-10 lg:px-16 max-w-screen-xl mx-auto w-full">
        <section className="mb-12">
          <AboutMe />
        </section>
        <section className="mb-12">
          <Skills />
        </section>
        <section className="mb-12">
          <Career />
        </section>
        <section className="mb-12">
          <Achievements />
        </section>
        <section className="mb-12">
          <Education />
        </section>
      </main>

      <footer className="px-4 sm:px-6 md:px-10 lg:px-16 mt-auto w-full">
        <ContactMe />
      </footer>
    </div>
  );
}

export default App;
