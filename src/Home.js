import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState ("Mario")

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blogs => blogs.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setBlogs(data)
    })
  }, []);

  return (
  <div className="home">
    {blogs && < BlogList blogs={blogs} title="All blogs !" handleDelete={handleDelete} />}
    {blogs && < BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's blog" handleDelete={handleDelete} />}
    <button onClick={() => {setName("luigi")}}>Change Name</button>
    <p>{name}</p>
  </div>
  );
}

export default Home;
