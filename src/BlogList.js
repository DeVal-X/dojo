import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({blogs, title}) => {

  // const blogs = props.blogs


  return (
    <div className="blog-list">
      <h2 style={{color:"rgb(253 13 81)"}}>{title}</h2>
      {blogs.map((blog)=> (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>author: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
