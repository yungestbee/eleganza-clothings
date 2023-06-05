import star from  './klipartz.com (1).png';
import image from './klipartz.com (6).png'

const ThirdHero = () =>{
    return(
        <>
        <div className="bsp">
            <h2>Best Selling Products</h2>
            <button  id="btn1">View All</button>
        </div>
        
        <div className='cards'>
                <div className='card'>
                    <div className='card-top'>
                        <span className='span'>-40%</span>
                    </div>
                    <div className='unit'>
                    <h5>Gown-like suit</h5>
                    <img onClick={addToCart} className='check' src={image} />
                    </div>
                    <span>$120</span> <span>$160</span>
                    <div className='star'>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <span>(88)</span>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-top'>
                        <span className='span'>-40%</span>
                    </div>
                    <div className='unit'>
                    <h5>Gown-like suit</h5>
                    <img onClick={addToCart} className='check' src={image} />
                    </div>
                    <span>$120</span> <span>$160</span>
                    <div className='star'>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <span>(88)</span>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-top'>
                        <span className='span'>-40%</span>
                    </div>
                    <div className='unit'>
                    <h5>Gown-like suit</h5>
                    <img onClick={addToCart} className='check' src={image} />
                    </div>
                    <span>$120</span> <span>$160</span>
                    <div className='star'>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <span>(88)</span>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-top'>
                        <span className='span'>-40%</span>
                    </div>
                    <div className='unit'>
                    <h5>Gown-like suit</h5>
                    <img onClick={addToCart} className='check' src={image} />
                    </div>
                    <span>$120</span> <span>$160</span>
                    <div className='star'>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <span>(88)</span>
                    </div>
                </div>
            </div>
                
            
        </>

    )
}
export default ThirdHero