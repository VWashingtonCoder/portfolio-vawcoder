import './comp-styles.scss';
import { Link } from "react-router-dom";
import logo from '../images/navbar/vawcoder-logo.png';
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Navbar() {
    return(
        <main id='navbar'>
            <header id='navbar-head'>
                <img src={logo} alt='logo' id='nav-img'/>
                <h1 id='title'>Vincent Andre Washington</h1>
            </header>

            <nav id='nav-links'>
                <Link to='/' className='nav-link' >Home</Link>
                <Link to='/about' className='nav-link' >About Me</Link>
                <Link to='/portfolio' className='nav-link' >Portfolio</Link>
            </nav>

            <footer id='social-links'>
                <h2 className='social-title'>Check Out My Socials</h2>
                <a 
                    href="https://github.com/VWashingtonCoder" 
                    className='social github' 
                    target='_blank' 
                    rel="noreferrer"
                >
                    <FaGithubSquare className='icon github'/>
                </a>
                <a 
                    href="https://www.linkedin.com/in/vincent-washington/" 
                    className='social linkedin' 
                    target='_blank' 
                    rel="noreferrer"
                >
                    <FaLinkedin className='icon linkedin'/>
                </a>
                <a 
                    href='https://medium.com/@kuraiokamiblaze' 
                    className='social medium' 
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaMedium className='icon medium'/>
                </a>
            </footer>
        </main>   
    );
}