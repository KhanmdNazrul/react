import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
              <li>
              <Link to="/About">About</Link>
            </li>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };

  export default Layout;