Fix NavBar Styling Links
APOD, get more pics rnadom 5
APOD, get more via date













React.js
React Router
Axios
HTML
CSS
Javascript
JSX
JSON

components
hooks
    state
    effect
    reducer
props

async, await, try, catch
pagination
stateless function components




useState = current/default state, & define other states
    const [|, set|] = useState();


useEffect = form type/value submit, update results.
    useEffect(() => {
        |
    }, []);







ss	setState
ssf	Functional setState
usf	Declare a new state variable using State Hook

    this.setState({ | : | });

    Functional setState:
    this.setState(prevState => {
    return { | : prevState.| }
    });

    getDerivedStateFromProps
    static getDerivedStateFromProps(nextProps, prevState) {
    |
    }

    
 - Render Prop
class | extends Component {
  state = { | },
  render() {
    return this.props.render({
      |: this.state.|
    });
  }
}

export default |;
hoc - Higher Order Component
function | (|) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return < | {...this.props} />;
    }
  };
}
cpf - Class Property Function
  | = (e) => {
    |
  }