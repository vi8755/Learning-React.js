 import React, { useContext } from 'react'
 import UserContext from '../context/UseContext';
 function Profile() {
    const {user} =useContext(UserContext);
    if(!user) return <div>No user logged in</div>;
   return (
     <div>
       <h2>Profile  </h2>
       <p>Welcome: {user.username}</p>
     </div>
   )
 }
 
 export default Profile
 