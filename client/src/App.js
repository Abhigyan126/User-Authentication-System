import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/quote'


const App = () => {
  return (<div>
    <BrowserRouter>
    <Routes>
      <Route path='/login' exact Component={Login} />
      <Route path='/register' exact Component={Register} />
      <Route path='/dashbord' exact Component={Dashboard} />
      <Route path='/' exact Component={Login} />
    </Routes>
    </BrowserRouter>
  </div>)
}

export default App