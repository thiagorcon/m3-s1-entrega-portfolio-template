import '../TechSection/styles.css'
import technologies from '../../data/technologies';
const TechSection = () => {
   
    return (
        <div className="areaTech">
            <div className='techList'>
            {technologies.map((item) => (
                <div key={item.name} className='techCard'>
                    <h3>{item.name}</h3>
                 
                </div>
            ))}
            </div>
        </div>
    );
}

export default TechSection;