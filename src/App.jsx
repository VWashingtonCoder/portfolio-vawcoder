import './App.scss';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div id='app-container'>
      <Navbar />

      <main id='home-container'>
        <header className='home head'>
          <h1>Full Stack Web Developer</h1>
        </header>

        <section className='home banner'>
          <h2>Banner Section</h2>
        </section>

        <section className='home featured'>
          <h2 className='featured section-title'>Featured Projects</h2>
          <div className='featured container'>
            <div className='featured project one'>
              <p>Project 1</p>
            </div>
            <div className='featured project two'>
              <p>Project 2</p>
            </div>
            <div className='featured project three'>
              <p>Project 3</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
