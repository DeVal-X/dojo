import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const [name, setName] = useState ("Mario")

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setBlogs(data);
      setIsPending(false);
    })
  }, []);

  return (
  <div className="home">
    {isPending && <div>loading ... </div>}

    {blogs && < BlogList blogs={blogs} title="All blogs !"  />}
    {blogs && < BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's blog" />}
    <button onClick={() => {setName("luigi")}}>Change Name</button>
    <p>{name}</p>


  </div>
  );
}

export default Home;
