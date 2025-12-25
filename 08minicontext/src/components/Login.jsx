import { useState,useContext } from "react";
import UserContext from "../context/UseContext";

function Login() {
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
const {setuser} = useContext(UserContext);

    const handleSubmit= (e) =>{
e.preventDefault()
setuser({username,password})
    }


return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder="username" name="" id=""
        value={username}
        onChange={(e)=>setusername(e.target.value)} />
        <input type="text" placeholder="password" name="" id="" />

        <button onClick={handleSubmit}>Login</button>
    </div>
)
}
export default Login