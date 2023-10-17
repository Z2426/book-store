import React from "react"
import {Routes,Route} from 'react-router-dom'
import CreateBook from '../src/pages/CreateBook.jsx'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<CreateBook/>}/>
      
    </Routes>
  )
}
