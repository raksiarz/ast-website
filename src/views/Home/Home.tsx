import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <h1 className='title'>Monkeylang</h1>
            <p className='about'>This is unofficial documentation of Monkeylang.</p>
            <div className='navigation-container'>
                <Link className='navigation-button' to={'documentation'}>Docs</Link>
                <Link className='navigation-button' to={'editor'}>Playground</Link>
            </div>
        </div>
    )
}

export default Home
