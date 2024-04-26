import { projects } from '../../../data/projects'
import style from './style.module.css'
import imagem from '../../../assets/github-icon.png'

const CardTechSection = () => {
     return (
          <>
               <div className={style.card}>
                    {projects.map(item => (
                         <div className={style.cardArea} key={item.name}>
                              <div className={style.cardText}>
                                   <h2>{item.name}</h2>
                                   <h3>{item.description}</h3>
                                   <h5>Saiba Mais</h5>
                              </div>
                              <div className={style.cardImg}>
                                   <img src={imagem} alt="imagem
                                   " />
                              </div>
                         </div>
                    ))}
               </div >
          </>
     )
}

export default CardTechSection;