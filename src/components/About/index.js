// Stateless Function Component
export default function About() {
  return (
    <div className="container">
      
      <div className="heading">
        <h1>About</h1>
      </div>

      <div className="content">
        <p>Software Engineer</p>
        <p>Coding my way to bohemian rhapsody.</p>

      </div>
      
      <div className="heading">
        <h1>Contact</h1>
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


      <div className="content">
        <h3>GitHub</h3>
        <p>subaliosole[at]gmail.com</p>
      </div>

      <div className="content">
        <h3>Resume</h3>
        <p>subaliosole[at]gmail.com</p>
      </div>


      <div className="content">
        <h3>Email</h3>
        <p>subaliosole[at]gmail.com</p>
        <p>vphung[at]perscholas.org</p>

      </div>

    </div>
  )
}