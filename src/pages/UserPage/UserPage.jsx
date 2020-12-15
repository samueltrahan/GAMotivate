import React, {useState, useEffect} from 'react';
import userService from '../../services/userService';
import "./UserPage.css"

export default function UserPage({user}) {
  const [users, setUsers] = useState({})
  useEffect(() =>{
    const userId = userService.getUserFromId(
      user._id
    )
    setUsers(userId)
  }, [])

  return (
      <div className="User">
        <div className="inner-div">
          <div className="background-color-div">
            <img src="img" alt="img"/><br/>
            <button>Edit Profile</button><br/>
            <p><b>{users.name}</b></p><br/>
            <p>{users.job}</p><br/>
            <p><b>{users.cohort}</b></p><br/>
            <p><b>{users.status}</b></p><br/>
            <p>{users.location}</p><br/>
          </div>
          <div className="imgs">
            <img src="https://i.imgur.com/fm34YyM.png" width="18" alt="world"/>              <a href="#portfolio" target="_blank" >Portfolio link</a><br/>
            <img src="https://i.imgur.com/c9Rrzpx.png" alt="linkedin" width="18"/>         <a href="#linkedin" target="_blank">LinkedIn link</a><br/>
            <img src="https://i.imgur.com/LkBsi3O.png" alt="notifcations" width="18"/> Notifications
          </div>  
        </div>     
      </div>
    );
}
