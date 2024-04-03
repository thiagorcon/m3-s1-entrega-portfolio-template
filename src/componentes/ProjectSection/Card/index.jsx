import '../../ProjectSection/Card/styles.css'
import {projects} from '../../../data/projects'


const CardProjectSection = () => {

     return (
          <div className='areaProject'>
               <div className='projectList'>
                    {projects.map((item) => (
                         <div className='projectCard' >
                              <h3>{item.name}</h3>
                         </div>

                    ))}
               </div>
          </div>
     )}


               {/* <img src={item.img} alt="imagem da tecnologia" />
                              <h3>{item.name}</h3>   */}

     export default CardProjectSection;