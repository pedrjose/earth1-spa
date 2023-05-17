import './App.css'
import { GlobalSCSS } from './GlobalSCSS'

import { Home } from "../src/Pages/Home/Home.jsx"

import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <GlobalSCSS />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
