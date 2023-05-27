import Header from './components/homePage/header'
import HeroSection from './components/homePage/heroSection';
// import MidSection from './components/midSection';
import Footer from './components/homePage/footer';
import SideBar from './components/homePage/sidebar';
import SecondHero from './components/homePage/secondHero';
import ThirdHero from './components/homePage/thirdHero';
import FourthHero from './components/homePage/fourthHero';
import FifthHero from './components/homePage/fifthHero';

function App() {
  return (
    <>
      <div className="">
        <Header />
        <div className='app'>
          <SideBar />
          <HeroSection />
        </div>
        <SecondHero />
        <ThirdHero />
        <FourthHero />
        <FifthHero />
        <Footer />

      </div>
    </>
  );
}

export default App;
