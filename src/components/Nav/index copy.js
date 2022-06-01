import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './style.css'


export default function Nav() {
  return (
      <nav className="nav">


        <div className="navContent">

<div className="navIcon">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/320px-Bananas.svg.png"
              title="/Home"
              alt="nav home"
              className="navIconImg"
            />
     
          </Link>
          <text className="navTitle">Under Another Sky</text>
     </div>
        <div className="navLinks">
        <li className="navLinks">
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/apod">APOD</CustomLink>
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
















// function Nav() {
//   return (
//     <div className='navContainer'>
      
//       <div className='navLinks'>
//           /Home
//           /to-do
//           /blog
//           /weather
//           /sites
//           /projects
//             /apod
//             /reddit
//             (/art)
//             /places

//        </div>

//     </div>
//   )
// }

// export default Nav