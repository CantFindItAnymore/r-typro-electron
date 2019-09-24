import React, { useState } from 'react'
import './index.less'

import { List, Button } from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

const MenuList = () => {
  const [ list, setList ] = useState([
    {title: 'fortawesome', id: 0},
    {title: 'faFolder', id: 1},
    {title: 'dataSource', id: 2}
  ])

  const deleteItem = (id) => {
    console.log('delete', id)
  }

  const listInit = () => {
    return (
      <List
        size="small"
        bordered
        dataSource={ list }
        renderItem={item =>
          <List.Item>
            <FontAwesomeIcon icon={ faFolder } />
            <div>{ item.title }</div>
            <Button size='small' onClick={ () => { deleteItem(item.id) } }>删除</Button>
          </List.Item>
        }
      />
    )
  }
  return (
    <div className='list-container'>
      { listInit() }
    </div>
  )
}

export default MenuList
