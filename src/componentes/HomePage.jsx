import '../styles/index.css';
import '../componentes/Header/styles.css'
import Header from './Header'
import BannerSection from './BannerSection';
import AboutMeSection from './AbouMeSection';
import TechSection from './TechSection';

const HomePage = () => {
     return (
          <>
               <Header />
               <BannerSection />
               <AboutMeSection/>
               <TechSection/>
          </>
     )
}

export default HomePage;