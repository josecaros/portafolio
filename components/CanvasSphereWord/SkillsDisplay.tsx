import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react'
import front from '../../public/info/SkillsFrontend';
import back from '../../public/info/SkillsBackend';
import extra from '../../public/info/SkillsExtra';
import ItemSkill from './ItemSkill';



const SkillsDisplay = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };
  return (
    <div >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabIndex} onChange={handleChange} aria-label="Habilidades" textColor='secondary' indicatorColor='secondary'>
            <Tab label="Frontend" />
            <Tab label="Backend" />
            <Tab label="Otros" />
          </Tabs>
        </Box>
        <div className='skill-container' hidden={!(tabIndex === 0)}>
          {
            front.map((item, index) => {
              return (
                <ItemSkill obj={item} />
              )
            })
          }
        </div>
        <div className='skill-container' hidden={!(tabIndex === 1)}>
          {
            back.map((item, inde) => {
              return (
                <ItemSkill obj={item} />
              )
            })
          }

        </div>
        <div className='skill-container' hidden={!(tabIndex === 2)}>
          {
            extra.map((item, inde) => {
              return (
                <ItemSkill obj={item} />
              )
            })
          }
        </div>
      </Box>
    </div>
  )
}

export default SkillsDisplay