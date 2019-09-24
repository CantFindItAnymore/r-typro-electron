import React from 'react'
import './App.less'

import Search from './components/Search'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Search/>
        <List/>
      </div>
      <div className="Content">2</div>
    </div>
  )
}

export default App
