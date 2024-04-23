import { projects } from '../../../data/projects'
import style from './style.module.css'
import imagem from '../../../assets'

const CardTechSection = () => {
     return (
          <>
               <div className={style.card}>
                    {projects.map(item => (
                         <div className={style.cardArea} key={item.name}>
                              <h2>{item.name}</h2>
                              <h3>{item.description}</h3>
                              <h4>Saiba Mais</h4>

                              <div>
                                   <img src="../../../assets/github-icon.png" alt="imagem
                                   " />
                              </div>
                         </div>

                    ))}
               </div >
          </>
     )
}

export default CardTechSection;