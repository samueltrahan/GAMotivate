import React, { Component } from 'react';
import ReactDOM from "react-dom";
import App from '../../pages/App/App.js';

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

class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>Profile</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);

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
      <Dashboard></Dashboard>
      <Main></Main>         
      </div>
    )
  }

export default SignupPage;