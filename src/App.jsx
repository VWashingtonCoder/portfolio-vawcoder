import './App.scss';
import Navbar from './components/Navbar';
import Banner from "./images/app/home-banner.png";


export default function App() {
  return (
    <div id='app-container'>
      <Navbar />

      <main id='home-container'>
        <header className='home head'>
          <img src={Banner} alt="Home Banner" id='banner-image' />
        </header>

        <section className='home featured'>
          <h2 className='featured section-title'>Check Out My Work In The Galleries Below</h2>
          <div className='featured projects'>
            <div className='featured project one'>
            <a href='/' className='gallery-title'>
                HTML/CSS 
              </a>
            </div>
            <div className='featured project two'>
            <a href='/' className='gallery-title'>
                JavaScript
              </a>
            </div>
            <div className='featured project three'>
              <a href='/' className='gallery-title'>
                React
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
