import React, { useState } from 'react'
import Tecnologies from '../../public/info/Tecnologies.json'
import Projects from '../../public/info/DataGalery.json'
import Image from 'next/image';
import { pathImage } from '../../types/Canvas/Constantes';
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