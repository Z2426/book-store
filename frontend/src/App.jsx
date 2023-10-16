import React from 'react'
import { Routes,Route } from 'react-router-dom'
import  CreateBooks from "../src/pages/CreateBook.jsx"
import DeleteBook from "../src/pages/DeleteBook.jsx"
import EditBook from "../src/pages/EditBook.jsx"
import ShowBook from "../src/pages/showBook.jsx"
import HomeBooks from "../src/pages/Home.jsx"
const App=()=>{
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/' element={<HomeBooks/>}/>
      <Route path='/books/detail/:id' element={<ShowBook/>}/>
    </Routes>
  )
}
export default App