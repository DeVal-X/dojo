import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const handleDelete = (id) =>{
    console.log(id)
    const newBlogs = blogs.filter(blogs => blogs.id !== id)
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      < BlogList blogs={blogs} title="All blogs !" />
      < BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's blog" handleDelete={handleDelete}/>
    </div>
   );
}

export default Home;
