import '../../data/projects'
import { projects } from '../../data/projects'
import CardProjectSection from './Card'

const ListProjects = () =>{
     const list = projects.map = (elements => {return elements})
     return (
          <>
          <CardProjectSection list={list} />
          </>
     )
}

export default ListProjects;