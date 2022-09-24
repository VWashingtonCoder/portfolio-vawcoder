import './pages-styles.scss'
import Navbar from "../components/Navbar"

export default function About() {
    return (
        <div className='page about'>
            <Navbar />

            <main className='container about'>
                <h1>About Page</h1>
            </main>
        </div>
    )
}