import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { pathImage } from '../../../types/Canvas/Constantes'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

interface ImageProps {
  item: any,
  index: number
}



const SliderImage = ({ item, index }: ImageProps) => {
  const [imageToShow, setImageToShow] = useState<string>(pathImage + item.galery[0]);
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  const itemRef = useRef<any>(null);

  return (
    <div className='galery-item'
      onMouseLeave={() => { setImageToShow(pathImage + item.galery[0]) }}
      onMouseEnter={() => { item.galery[1] ? setImageToShow(pathImage + item.galery[1]) : null }}

      onClick={() => { setShowExtraInfo((last) => !last) }}>
      <CSSTransition
        nodeRef={itemRef}
        in={showExtraInfo}
        timeout={300}
        unmountOnExit
        classNames="extra"
      >
        <div className='galery-icon-wraper' ref={itemRef}>
          <div className="galery-icon-container">
            {
              item.tecnologies.map((tec: any, index: any) => {
                return (
                  <img className={`icon-content${index}`} src={tec.icon} />
                )
              })
            }
          </div>
          <div className='text-description'>
            <div className="text-wraper">
              <div className="text-blur-bg"></div>
              <div className="text-show">
                {item.description}
              </div>
            </div>

          </div>
        </div>
      </CSSTransition>
      <div className='galery-image'>
        <SwitchTransition>
          <CSSTransition classNames="fade"
            key={imageToShow}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
            <img src={imageToShow} className="img-proyecto" alt={"Project image description"} />
          </CSSTransition>
        </SwitchTransition>
      </div>

      <div className='galery-title'>
        {item.title}
      </div>
    </div>
  )
}

export default SliderImage