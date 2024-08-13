import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/App.css';

function App() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function navLogin() {
    navigate('/login')
  }

  async function registeruser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })

    const data = await response.json()
    
    if(data.status === 'ok') {
        navigate('/login')
    }
  }

  return (
<div class="form-container">
<div class="rectangle"></div>      <h1>Register</h1>
      <form onSubmit={registeruser}>
        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        placeholder='Name'
        />
         <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        placeholder='Email'
        />
         <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='Password'/>
        <input type='submit' value='Register' />
        <button onClick={navLogin}>Login</button>
      </form>
    </div>
  )
}

export default App;
