import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='main-content'>
      <div className='leftPanel'>
        <div className='content'>
          <div className='image'>
            <img src='/images/perfil/perfil.jpg' className='perfilImage' />
          </div>
          <div className="information">
            <p>Jose Carlos Chañi Laura</p>
            <p>Bachiller en Ing. de Sistemas</p>
          </div>
          <div className='buttons-navegation'>
            <div className='buttonNav'>
              <a href="#about">Acerca de</a>
            </div>
            <div className='buttonNav'>
              <a href="#portafolio">Portafolio</a>
            </div>
            <div className='buttonNav'>
              <a href="#skills">Conocimientos</a>
            </div>
          </div>
          <div className='social-media'>
            <a href="https://github.com/josecaros" target="_blank"><GitHubIcon fontSize='large' className="social-icon" /></a>
            <a href="https://www.linkedin.com/in/josecaros/" target="_blank"><LinkedInIcon fontSize='large' className="social-icon" /></a>
            {/* <a href="mail:josecarlos.42v@gmail.com" target="_blank"><MailOutlineIcon fontSize='large' className="social-icon" /></a> */}
          </div>

        </div>
      </div>
      <div className='rightPanel'>
        {children}
      </div>
      <div className='social-floating'>
        <a href="https://github.com/josecaros" target="_blank"><GitHubIcon fontSize='large' className="social-icon" /></a>
        <a href="https://www.linkedin.com/in/josecaros/" target="_blank"><LinkedInIcon fontSize='large' className="social-icon" /></a>
        <div className='line-separator'></div>
      </div>
    </div>
  )
}
export default MainLayout