import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './style.css'


export default function Nav() {
  return (
      <nav className="nav">

        <div className="navContent">

        <div className="navIcon">
          <Link className="navTitle" to="/">
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/320px-Bananas.svg.png"
              title="/Home"
              alt="nav home"
              className="navIconImg"
            /> */}
            ✹ Under Another Sky
          </Link>
        </div>
        
        <div className="navLinks">
        <li className="navLinks">
          <CustomLink  to="/about">💠</CustomLink>
          <CustomLink  to="/home">📅</CustomLink>
          <CustomLink  to="/projects">🖳</CustomLink>
          <CustomLink  to="/blog">🧠</CustomLink>
          <CustomLink  to="/stuff">📂</CustomLink>
        
           
          
        </li>
      </div>

        </div>
      </nav>


  );
}

//useResolvedPath, provides an absolute path
//useMatch, finds path within directory

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <div className={isActive ? "active" : ""}>
      <Link className="listItem" to={to} {...props}>
        {children}
      </Link>
     </div>
  )
}