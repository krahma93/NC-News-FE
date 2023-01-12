import { Link } from "react-router-dom";


const Nav = () => {

    return(
        <nav className='nav'>
    <Link to="/" className="Users-link">
        Articles
      </Link>
      <span> | </span>
      <Link to='/LogIn' className="home">Log In</Link>

        </nav>

        
    )
}

export default Nav;
