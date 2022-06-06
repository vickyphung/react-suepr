import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Nav() {
  return (
      <nav className="nav">
        <div className="navContent">
         <h1>Astronomy Picture Of the Day</h1>
            <div className="navApodLinks">
                <li className="navLinks">
                <CustomLink  to="/apod">Today</CustomLink>
                <CustomLink  to="/test">Date</CustomLink>
                <CustomLink  to="/random">Random</CustomLink>
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






