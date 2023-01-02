import React, { useState } from 'react'
import Projects from '../../public/info/DataGalery.json'
import SliderImage from './ImageSlider/SliderImage';
const ProjectsPresentation = () => {
  const [projectsList, setProjectsList] = useState(Projects);
  return (
    <div className='galery'>
      {
        projectsList.map((project, order) => {
          return (
            <SliderImage item={project} index={order} key={order} />
          )
        })
      }
    </div>
  )
}

export default ProjectsPresentation