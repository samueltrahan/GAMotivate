import React from 'react';

class UserPage extends React.Component {
  state = {
    show: false
  };
  
  render() { 
    return (
      <div className="User">
        <h1>Welcome!</h1>
        <a href="#portfolio" target="_blank">Portfolio</a><br/>
        <a href="#linkedin" target="_blank"><img src="https://i.imgur.com/rPkZjhu.png" width="50"/></a>        
      </div>
    );
  }
}

export default UserPage;