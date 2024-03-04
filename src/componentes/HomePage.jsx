import '../styles/index.css';
import Header from './Header'
import BannerSection from './BannerSection';
import AboutMeSection from './AbouMeSection';
import TechSection from './TechSection';
import ProjectSection from './ProjectSection';
import Footer from './Footer';

const HomePage = () => {
     return (
          <>
               <Header />
               <BannerSection />
               <AboutMeSection/>
               <TechSection/>
               <ProjectSection/>
               <Footer/>
          </>
     )
}

export default HomePage;