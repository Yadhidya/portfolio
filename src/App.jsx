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
    <div className="flex flex-col w-full min-h-screen ">
      <Header />
      <main className="pt-28 px-8">
        <section>
          <AboutMe/>
        </section>
        <section>
          <Skills/>
        </section>
        <section>
          <Career/>
        </section>
        <section>
          <Achievements/>
        </section>
         <section>
          <Education/>
        </section>
      </main>
      <footer>
          <ContactMe/>
          </footer>
    </div>
  );
}

export default App;
