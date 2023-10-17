import React,{useEffect,useState} from 'react'
import Backbutton from '../compoment/Backbutton.jsx'
import Spiner from '../compoment/Spinner.jsx'
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom'
const EditBook =()=> {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id}=useParams()
    useEffect(()=>{
      setLoading(true)
      axios.get(`http://localhost:5555/books/${id}`)
      .then((res)=>{
        console.log(res.data)
        setAuthor(res.data.book.author)
        setPublishYear(res.data.book.pushlishYear)
        setTitle(res.data.book.title)
        setLoading(false)
      }).catch((e)=>{
        setLoading(false)
        alert('An error happend .Please check console')
        console.log(e)
      })
    },[])
    const handleSaveBook = () => {
      const data = {
        title,
        author,
        publishYear
      };
  
      setLoading(true);
  
      axios
        .put(`http://localhost:5555/books/${id}`, data)
        .then(() => {
          setLoading(false);
          navigate('/');
        })
        .catch((e) => {
          setLoading(false);
          alert('An error happened. Please check console');
          console.log(e);
        });
    };
  
    return (
      <div>
        <Backbutton />
        <h1 className="text-3xl my-4">Edit Book</h1>
        {loading ? <Spiner /> : ''}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button
            onClick={handleSaveBook}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    );
  };

export default EditBook