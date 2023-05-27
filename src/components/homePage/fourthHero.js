import image from './images/female-wears/adult-models-removebg-preview.png'

const FourthHero = () =>{
    return (
        <>
            <div className="last-card">
                <div className="lastCardItem">
                    <p>Categories</p>
                    <h1>Enhance Your Clothing Experience</h1>
                    <button className="btn2">Buy Now</button>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </>
    )
}

export default FourthHero