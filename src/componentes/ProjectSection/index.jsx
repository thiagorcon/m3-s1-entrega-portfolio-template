import React from 'react';
import style from './style.module.css'
 import CardTechSection from './Card';

const ProjectSection = () => {

    return (

        <div className={style.areaTech}>
            <div className='areaTit'>
                <h1>Projetos</h1>
            </div>
            <div className={style.areaCard}>                
                 <CardTechSection /> 
            </div>
            
        </div>
    );
}

export default ProjectSection;