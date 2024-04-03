import {technologies} from '../../../data'

const CardTechSection = () =>{
     return(
          <>
          <img src={technologies.img} alt="imagem das tecnologias" />
          <h1>{technologies.nome}</h1>
          </>
     )
}

export default CardTechSection;