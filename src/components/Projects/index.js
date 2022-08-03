import { Link } from "react-router-dom"
import './style.css'

export default function Projects () {
    
    
    return ( 
        <div className="projectContainer">
            {/* <div className="projects"> */}


                <div className="heading">
                    <h1>Projects</h1>
                </div>

                <div className="projectListContainer">
                    <ul className="projectList">

                        <li className="projectListItem">
                            <a className="projectListLink" href="http://ndsgakjdsb.com/">
                                📍 Places 
                            </a>
                            <p className="content">Places to go in the DMV <p>Full-stack CRUD web app</p><p>React Node Express MongoDB</p></p>
                        </li>

                        <li className="projectListItem" >
                            <a className="projectListLink" href="http://apodwithbear.herokuapp.com/">
                                🪐 APOD
                            </a>
                            <p className="content">Astronomy Picture of the Day<p>React</p> </p>
                        </li>
                        <li className="projectListItem">
                            <a className="projectListLink" href="http://weatherwithbear.herokuapp.com/">
                                🂡 Blackjack 
                            </a>
                            <p className="content">Blackjack Card Game <p>Vanilla JS, HTML, CSS</p></p>
                        </li>
                        <li className="projectListItem">
                            <a className="projectListLink" href="http://weatherwithbear.herokuapp.com/">
                                🌞 Weather 
                            </a>
                            <p className="content">Weather: Current and Forecast<p>React</p></p>
                        </li>
                        <li className="projectListItem">
                            <Link className="projectListLink" to="/todo">
                                📝 To-Do 
                            </Link>
                            <p className="content">To-Do List  <p>React</p></p>
                        </li>
                                            
                    </ul>
                {/* </div> */}
                </div>
    
        </div>
    
    )
}