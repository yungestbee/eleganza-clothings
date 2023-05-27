import image from './neww.png'
import './header.css'

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
                    <input type="text" placeholder="What are you looking for?"/>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
            </nav>
        </header>
    )
}

export default Header