import React, { Component } from 'react';
import ReactDOM from "react-dom";
import UserPage from "./User/UserPage";
const rootElement = document.getElementById("root");

class Header extends Component {
    render () {
        return (
            <div id="home">
                <h1 className="header-h1">Profile Page
                </h1>
            </div>
        )
    }
}

class User extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: true
    });
  };
  render() {
    return (
      <div className="User">
        <button onClick={e => {
              this.showModal();
         }}
          > show Modal </button>
        <Modal show={this.state.show} />
      </div>
    );
  }
}
export default class Modal extends React.Component {
  render() {
      if(!this.props.show){
          return null;
      }
      return <div>
        <a href="#home"><i className="home"></i>Home</a>
        <a href="#linkedin"><i className="LinkedIn"></i>LinkedIn</a>
        <a href="#portfolio"><i className="portfolio"></i>Portfolio</a>
    </div>;
  }
}


class Main extends Component {
  render() {
        return(
            <section className="container-banner">
                <h1>Hi! I'm {user}</h1>
            </section>
        )
    }
}

render = () => {
    return(<div>        
      <Header></Header>
      <User></User>
      <Main></Main>         
      </div>
    )
  }

ReactDOM.render(<UserPage />, rootElement);
