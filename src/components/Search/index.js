import React, { useEffect } from 'react'
import './index.less'

import { Input } from 'antd'

const Search = () => {
  const onChange = e => {
    console.log(e.target.value)
  }

  // useEffect(() => {
  //   const 
  // })

  return (
    <div className='search-container'>
      <Input placeholder="搜索" allowClear onChange={ onChange } />
    </div>
  )
}

export default Search
