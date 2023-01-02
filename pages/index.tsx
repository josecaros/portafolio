import CanvasCursorPresentation from '../components/CanvasCursor/CanvasCursorPresentation'
import Presentation from '../components/Portafolio/Presentation'
import ProjectsPresentation from '../components/Portafolio/ProjectsPresentation'
import TitlePresentation from '../components/TitleComponent/TitlePresentation'
import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SphereWords from '../components/CanvasSphereWord/SphereWords'
import SkillsDisplay from '../components/CanvasSphereWord/SkillsDisplay'

const Home = () => {
  return (
    <div className='body-section'>
      <div className="canvas-cursor-main" id='about'>
        <CanvasCursorPresentation>
          <TitlePresentation />
        </CanvasCursorPresentation>

      </div>
      <div className='portafolio-section' id='portafolio'>
        <Presentation
          title='Mi Portafolio'
          description={"Una lista de algunos proyectos en los que participe a lo largo de mi carrera. Se muestran proyectos que fueron desarrollados junto a invaluables compañeros de equipo, de distintas ramas y con variadas tecnologias puestas a la creación de nuevas soluciones."}
        />
        <ProjectsPresentation />
      </div>

      <div className='portafolio-skills portafolio-section' id='skills'>
        <Presentation
          title='Conocimientos'
          description={"A travez de mi experiencia en los proyectos en los que tuve la oportunidad de participar, pude obtener conocimientos sobre los siguientes conocimientos en estas tecnologias."}
        />
        <div className='grid'>
          <SphereWords />
          <SkillsDisplay />
        </div>
      </div>
    </div>
  )
}
Home.PageLayout = MainLayout;
export default Home;