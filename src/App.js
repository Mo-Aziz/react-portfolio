import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

import './App.scss'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
    <Sidebar/>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} /> */}
      </Routes>
    </>
  )
}

export default App
