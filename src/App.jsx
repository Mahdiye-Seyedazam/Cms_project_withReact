import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Topbar from './components/TopBar/Topbar'
import Sidebar from './components/sidebar/Sidebar'



function App() {

let router = useRoutes(routes)

  return (
    <>

    <Topbar/>
    <div className="container">
    <Sidebar />
    {router}
    </div>
      
    </>
  )
}

export default App
