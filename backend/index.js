import express, { response } from "express"
import {PORT,MongoDBURL} from "./config.js"
import mongoose from 'mongoose'
import { Book } from "./models/bookModel.js"
const app =express()
mongoose.connect(MongoDBURL)
.then(()=>{
    console.log('App connected to database')

}).catch((error)=>{
  console.log(error)
})
// parsing request body
app.use(express.json())
app.get('/',(req,res)=>{
    console.log(req)
    return res.status(234).send('Welcome to MERN')
})
//Route for delete a book
app.delete('/book/:id',async(req,res)=>{
    try{
        const {id} =req.params
        const result =await Book.findByIdAndDelete(id)
        if(!result){
            return res.status(404).json({message:"Book not found"})
        }
        return res.status(200).send({
            message:"Book deleted successfully"
        })

    }catch(e){
        console.log(e.message)
        res.status(500).send({message: e.meassage})
    }
})
//Route for update a book
app.put('/books/:id',async (req,res)=>{
    try{
        if(!req.body.title||
            !req.body.author||
            !req.body.publishYear){
                return res.status(400).send({
                    message:"send all require fileds : title ,author,pushlisher"
                })
            }
        const {id}=req.params
        const result =await Book.findByIdAndUpdate(id,req.body)
        console.log(result)
        if(!result){
            return res.status(404).json({message:"Book not found"})
        }
   return res.status(200).send({meassage:"Book update sucessfully"})
    }catch(e){
        console.log(e.message)
        res.status(500)
    }
})
// Routes get by id
app.get('/books/:id', async(req,res)=>{
    try{
        const {id} = req.params //? tai sao dung {id}

      const book =await Book.findById(id)
      console.log(book)
      return res.status(200).json({book})
    }catch(e){
        console.log(e.message)
        res.status(500).send({message: e.message})
    }
})
//Roure  show all booj
app.get('/books', async(req,res)=>{
    try{
      const books =await Book.find({})
      console.log(books)
      return res.status(200).json({
        count : books.length,
        books: books

      })
    }catch(e){
        console.log(e.message)
        res.status(500).send({message: e.message})
    }
})
//Route for save  a new book
app.post('/books', async (req,res)=>{
    try{
        if( !req.body.title ||
            ! req.body.author||
            ! req.body.publishYear){
                return res.status(400).send({
                    message:"send all require filed: title ,author,pushYear"
                })
            }
        const newBook ={
            title: req.body.title,
            author : req.body.author,
            pushlishYear: req.body.publishYear
        }
        console.log(newBook)
      const  book = await Book.create(newBook)
      res.send(book)
    }catch(e){
        console.log(e.message)
        res.status(500).send({message: e.message})
    }
})

app.listen(PORT,()=>{
    console.log(`App is listenning to port : http://localhost:${PORT}`)
})