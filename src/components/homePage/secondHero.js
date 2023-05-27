import star from  './klipartz.com (1).png';
import image from './klipartz.com (6).png'

const SecondHero = () =>{
    return(
        <div className='secondHero'>
            <h2>Flash Sales</h2>
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
                    
                    <div>
                        <button className='btn'>View All Products</button>
                    </div>
        </div>

    )
}
export default SecondHero
