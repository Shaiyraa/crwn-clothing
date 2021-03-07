import React, { useEffect, useState } from 'react'
import MenuItem from '../menu-item/menu-item.component'

import sectionsArray from '../../sections'
import './directory.styles.scss'

const Directory = () => {
  const [sections, setSections] = useState([])


  useEffect(() => {
    setSections(sectionsArray)
  }, [])

  return (
  <div className='directory-menu'>
    {
      sections.map(({id, title, imageUrl, size}) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)
    }
  </div>
)}

export default Directory