import { Home, Login, Register } from './pages'
import { Navbar, Sidebar } from './components'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden ">

      <Sidebar />

      <div className="h-screen overflow-y-scroll flex-[10] bg-dark-main">
        <Navbar />

        <div className="py-[1rem] px-[2rem] ">
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
          </Routes>
        </div>

      </div>

    </div>
  )
}

export default App