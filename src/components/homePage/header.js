import image from './neww.png'
import './header.css'
import photo from './klipartz.com (6).png'


const Header = () =>{
    return(
        <header className="container-fluid head" >
            <nav>
                <img src={image} alt="" />
                <ul>
                    <a href="#">Home</a>
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                    <a href="#">Sign Up</a>
                </ul>
                <div className='input-group'>
                    <input type="search" placeholder="What are you looking for?"/>
                    <a href="#"><img src={photo}/></a>
                </div>
            </nav>
        </header>
    )
}

export default Header