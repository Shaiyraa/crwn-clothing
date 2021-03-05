import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory-menu.styles.scss'

const DirectoryMenu = () => (
  <div className='directory-menu'>
    <MenuItem title="HATS" />
    <MenuItem title="JACKETS" />
    <MenuItem title="SNEAKERS" />
    <MenuItem title="WOMENS" />
    <MenuItem title="MENS" />
  </div>
)

export default DirectoryMenu