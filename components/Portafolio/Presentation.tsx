import React, { useEffect, useState } from 'react'
interface PropsPresentation {
  title: string,
  description: string | null
}

const Presentation = ({ title, description }: PropsPresentation) => {
  const [titleArray, setTitleArray] = useState<string[]>([]);
  useEffect(() => {
    setTitleArray(title.split(""));
  }, [])

  return (
    <div>
      <div className=''>
        <h1 className='title-subsection'>
          {
            titleArray.map((char) => {
              if(char===" "){
                return <>&nbsp;</>
              }else{
                return <span className='resaltLetter'>{char}</span>
              }
            })
          }
        </h1>
      </div>
      <div className='presentation-text'>
        {description}
      </div>
    </div>
  )
}

export default Presentation