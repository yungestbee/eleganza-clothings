import image from './neww.png'
import './header.css'
import photo from './klipartz.com (6).png'
import { Link } from 'react-router-dom'


const Header = () =>{
    return(
        <header className="container-fluid head" >
            <nav>
                <img src={image} alt="" />
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">About</Link>
                    <Link to="./SignUpComponent/Signup">Sign up</Link>
                </ul>
                <div className='input-group'>
                    <input type="search" placeholder="What are you looking for?"/>
                    <Link to="./CartComponents/Cart"><img src={photo}/></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header