
 import style from '../TechSection/style.module.css'
// import { technologies } from '../../data/technologies'
 import CardTechSection from './Card';

const TechSection = () => {

    return (

        <div className={style.areaTech}>
            <div className='areaTit'>
                <h1>Tecnologias</h1>
            </div>
            <div className={style.areaCard}>
                
                 <CardTechSection /> 
            </div>
            
        </div>
    );
}

export default TechSection;