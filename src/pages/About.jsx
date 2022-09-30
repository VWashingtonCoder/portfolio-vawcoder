import './pages-styles.scss'
import Navbar from "../components/Navbar"
import btCertificate from '../images/about/bt-certificate.png';

export default function About() {
    return (
        <div className='page about'>
            <Navbar />

            <main className='container about'>
                <h1 id='page-title'>About Me</h1>

                <section id='bio'>
                    <img src='https://avatars.githubusercontent.com/u/97264834?v=4' alt='V. Andre Washington' className='bio pic'/>
                    <div className='bio text'>
                        <h2 className='summary subtitle'>
                            Summary Of Me
                        </h2>
                        <p className='summary text'>
                            I'm a Full Stack Developer and gaming otaku. I'm always looking for a great challenge and great anime.
                        </p>
                    </div>
                </section>

                <section id='certifications' className='container'>
                    <img src={btCertificate} alt='certification' className='certification' />
                </section>
            
            {/* 
                <section id='resume'>
                    <iframe src='' className='resume pdf'></iframe>
                </section>
            */}

            {/* 
                <section id="education">
                    <h2>Code Education</h2>
                </section> 
            */}

                <section id="before">

                </section>
            </main>
        </div>
    )
}