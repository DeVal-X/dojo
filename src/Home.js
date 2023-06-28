import {useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
  const [name, setName] = useState ("Mario")

  return (
  <div className="home">
    {isPending && <div>loading ... </div>}
    {error && <div> {error} </div>}

    {blogs && < BlogList blogs={blogs} title="All blogs !"  />}
    {blogs && < BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's blog" />}
    <button onClick={() => {setName("luigi")}}>Change Name</button>
    <p>{name}</p>


  </div>
  );
}

export default Home;
