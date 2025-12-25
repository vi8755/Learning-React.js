 
import UserContextProvider from "./context/UseContext"
import Login from "./components/login"
import Profile from "./components/Profile"
import UserContext from "./context/UseContext"


function App() {
  

  return (
    <UserContextProvider>
      <h1>hii my sweetheart</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
