//Class components
//Start with what makes sense, rename delete later.
//Card, in a List
//Usernames for testing: adlermutig, paolofsacc, emirhg

//https://jscomplete.com/playground
const CardList = (props) => (
  <div>
    {props.profiles.map((profile)=><Card key={profile.id} {...profile}/> )}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info"> 
          <div className="name"> {profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = {
    userName: ''
  }
  //userNameInput = React.createRef();
  handleSubmit = async (event) =>{
    event.preventDefault(); //To avoid refresh
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({userName:''})
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          onChange={event => this.setState({userName: event.target.value})}
          value={this.state.userName}
          //ref={this.userNameInput}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData]
    }));
  }
  render() {
    return (
      <>        
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </>
    );
  }
    

}


ReactDOM.render(
  <App title="The GitHub Cards App" />,
  mountNode
);
