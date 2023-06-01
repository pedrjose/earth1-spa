import './App.css'
import { GlobalSCSS } from './GlobalSCSS'
import { Home } from "../src/Pages/Home/Home.jsx"
import { Article } from './Pages/News/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchPage } from './Pages/Search/Search'
import { Profile } from './Pages/Profile/Profile'

function App() {

  return (
    <>
      <GlobalSCSS />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search/:title" element={<SearchPage />}></Route>
          <Route path="/article/:id" element={<Article />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
