import React from 'react'
import { useState } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default function Nav() {

  const [ activeItem, setActiveItem ] = useState('')
  
  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
  }

  return (
    <div>
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

       
      </div>
  )
}
