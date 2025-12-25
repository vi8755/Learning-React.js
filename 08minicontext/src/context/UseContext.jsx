import React, { Children, useState } from "react";
import UserContext from "./UseContext";

const UserContextProvider = ({children}) => {   
const [user,setuser] = useState(null);
return(
    <UserContext.Provider value={{user,setuser}}>
        {children}
    </UserContext.Provider> 
)
}
export default UserContextProvider;