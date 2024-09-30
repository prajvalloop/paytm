import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { SendMoney } from './pages/SendMoney'
import { Dashboard } from './pages/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/signup"} element={<Signup/>} />
          <Route path={"/signin"} element={<Signin/>} />
          <Route path={"/sendmoney"} element={<SendMoney/>} />
          <Route path={"/dashboard"} element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
