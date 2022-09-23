import './App.scss';
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa"
import logo from './images/vawcoder-logo.png'


export default function App() {
  return (
    <div id='app-container'>
      <section id='nav-bar'>
        <img src={logo} alt='logo' id='nav-img'/>
        <h1 id='title'>V. Andreaus Washington</h1>
        <nav id='nav-btns'>
          <button className='nav-btn'>Home</button>
          <button className='nav-btn'>Portfolio</button>
          <button className='nav-btn'>About Me</button>
        </nav>
        <div id='contact-links'>
          <a 
            href="https://github.com/VWashingtonCoder" 
            className='contact github' 
            target='_blank' rel="noreferrer"
          >
            <FaGithubSquare className='icon'/>
          </a>
          <a 
            href="https://www.linkedin.com/in/vincent-washington/" 
            className='contact linkedin' 
            target='_blank' 
            rel="noreferrer"
          >
            <FaLinkedin className='icon'/>
          </a>
          <a 
            href="https://medium.com/@kuraiokamiblaze" 
            className='contact medium' 
            target='_blank'
            rel="noreferrer"
          >
            <FaMedium className='icon'/>
          </a>
        </div>
      </section>
    </div>
  );
}
