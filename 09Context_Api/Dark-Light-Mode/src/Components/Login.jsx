import React, {useContext,useState} from 'react'
import UserContext from '../Context/UserContext'
//import UserContextProvider from '..UserC/Context/UserContextProvider'

function Login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit =(e)=>{
      e.preventDefault()
        setUser({Username,Password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input  type='text' value={Username} 
      onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
      <input  type='text' value={Password} 
      onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
