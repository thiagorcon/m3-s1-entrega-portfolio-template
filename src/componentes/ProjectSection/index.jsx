import '../ProjectSection/styles.css'
// import { projects } from '../../data/projects';
import CardProjectSection from './Card/index';

const ProjectSection = () => {

     return (
          <>
               <CardProjectSection />
          </>


          // < className="areaTech">
          //      <div className='projectList'>
          //           {projects.map((item) => (
          //                <div key={item.name} className='projectCard'>
          //                     <h3>{item.name}</h3>
          //                     <p>{item.description}</p>
          //                </div>

          //           ))}

          //      </div>


     )
}

export default ProjectSection;