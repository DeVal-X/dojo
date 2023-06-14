const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dojo's head</h1>
      <div className="links">
        <a href="/">home</a>
        <a href="/create"
        //   style={{
        //   color: "white",
        //   backgroundColor: "#f1356d",
        //   borderRadius: "8px"
        // }} synthax for dynamic style
          >new blog</a>
      </div>
    </nav>
   );
}

export default Navbar;
