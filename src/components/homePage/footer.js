import "./footer.css"
import image from './images/wa.link_m43afk.png';
import photo from './images/get-it-on-google-play-download-app-store-buttons-11639742163asbbzmhqsi-removebg-preview.png';

const Footer =()=>{
    return (
        <div className="container-fluid foot">
            <div className="flex">
                <div className="items">
                    <h3>Eleganza</h3>
                    <h4>Subscribe</h4>
                    <p>Get 10% off your first order</p>
                    <div>
                    <input type="email" placeholder="Enter your Email"/>
                    <input type="submit"/>
                    </div>
                </div>
                <div className="items">
                    <h4>Support</h4>
                    <p>my address</p>
                    <p>eleganza@gmail.com</p><br/>
                    <p>+2349053644527</p>
                </div>
                <div className="items">
                    <h4>Account</h4>
                    <p>My Account</p>
                    <a href="">Login / Register</a><br/>
                    <a href="3">Cart</a><br/>
                    <a href="#">Wishlist</a><br/>
                    <a href="#">Shop</a>
                </div>
                <div className="items">
                    <h4>Quick Link</h4>
                    <a href="">Privacy Policy</a>
                    <a href="">Term of Use</a><br/>
                    <a href="3">FAQ</a>
                    <a href="#">Contact</a>
                </div>
                <div className="items" id="items">
                    <h4>Download App</h4>
                    <p>Save $3 with APP Now User Only</p>
                    <div className="google">
                        <img src={image} alt=""/>
                        <img id="play" src={photo} alt=""/>
                    </div>
                        <div>
                            i*4
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer