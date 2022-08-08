import './style.css'
import Journal from '../Journal'

// Stateless Function Component
export default function About() {



  return (
    <div className='gradient-background'>
      <div className="container">
        
        <div className="bio">
          <div>
            <h3> Software Engineer</h3>
          </div>
          <div>
          <p className='tagline'>Coding my way to bohemian rhapsody.</p>
          </div>
        </div>
   
      <div className='x'>
        <img className="techLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" alt="javascript"></img>


        <img className="techLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="javascript"></img>


        <img className="techLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="javascript"></img>


        {/* </div>
        <div> */}
        <img className="techLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="javascript"></img>


        <img className="techLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="javascript"></img>

      </div>





<div className='heading'>
  <h1>Contact</h1>
</div>


    <div className='contact'>
    
      <img className="techLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="javascript"></img>

      <img className="techLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="javascript"></img>


      <img className="techLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png" alt="javascript"></img>
      

    </div>

    <div className='contact'>
      <img className="techLogo" src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png" alt="javascript"></img> 
      <p>Resume</p>
    </div>

      <div className="content">
        <h3>Leave a message</h3>
        <div>
          <form>
            <input></input>
            <input type='submit'></input>
          </form>
        </div>

      </div> 

    </div>
    </div>
  )
}