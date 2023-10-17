import React from "react"
import {Routes,Route} from 'react-router-dom'
import CreateBook from '../src/pages/CreateBook.jsx'
import DeleteBook from '../src/pages/DeleteBook.jsx'
import EditBook from '../src/pages/EditBook.jsx'
import Home from '../src/pages/Home.jsx'
import ShowBook from '../src/pages/ShowBook.jsx'
export default function App() {
  return (
    <Routes>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      
    </Routes>
  )
}
