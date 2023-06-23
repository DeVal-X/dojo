const BlogList = ({blogs, title, handleDelete}) => {

  // const blogs = props.blogs


  return (
    <div className="blog-list">
      <h2 style={{color:"rgb(253 13 81)"}}>{title}</h2>
      {blogs.map((blog)=> (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>author: {blog.author}</p>
          <button onClick={() =>handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
