
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Error500: React.FunctionComponent = () => {
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    let timer1 = setTimeout(() => setAnimation(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [])

  return (
    <div>
      <div className={`${animation ? 'loading' : ''} body-tag`}>
        <Link href={"/"}><span className='back-button-err'> Volver al Inicio</span></Link>

        <div className="cornerposition">
          <h1 className="title-error-main">Ocurrio un error en la aplicación</h1>
          <h2 className="title-error-description">
            Se produjo un error.
          </h2>

          <div className="title-error-name">
            500
          </div>

          <div className="gears m-10">
            <div className="gear one">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="gear two">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="gear three">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Error500;