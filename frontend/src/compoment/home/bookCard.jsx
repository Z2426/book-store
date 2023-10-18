import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookSingleCard from './BookSingleCrad';
const BooksCard =({books})=>{
    return (
        <div className='grid sm:grid-cols-2  lg:grid-col-3  xl:grid-cols-4'>
            {books.map((item)=>(
                <BookSingleCard key={item._id} book={item}/>
                
            ))}

        </div>
    )
}
export default BooksCard