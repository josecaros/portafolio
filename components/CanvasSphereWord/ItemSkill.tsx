import React, { lazy } from 'react'

const ItemSkill = ({ obj }: any) => {
  return (
    <div className='skill-item'>
      {obj.icon}
      <div className='skill-name'>{obj.skillName}</div>
      <div className='skill-bar'>
        {/* @ts-ignore */}
        <div className='skill-per' style={{ maxWidth: obj.percentSkill }} per={obj.percentSkill}></div>
      </div>
    </div>
  )
}

export default ItemSkill