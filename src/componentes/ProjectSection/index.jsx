import '../ProjectSection/styles.css'
import { projects } from '../../data/projects';

const ProjectSection = () => {

     return (
          <div className="areaTech">
               <div className='projectList'>
                    {projects.map((item) => (
                         <div key={item.name} className='projectCard'>
                              <h3>{item.name}</h3>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default ProjectSection;