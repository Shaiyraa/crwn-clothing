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
      sections.map(({id, ...otherProps}) => <MenuItem key={id} {...otherProps} />)
    }
  </div>
)}

export default Directory