import './App.css'
import { GlobalSCSS } from './GlobalSCSS'
import { Home } from "../src/Pages/Home/Home.jsx"
import { Article } from './Pages/News/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchPage } from './Pages/Search/Search.jsx'
import { Profile } from './Pages/Profile/Profile.jsx'
import { NoScreen } from './Components/Screen/Screen.jsx'
import { NotFound } from './Components/NotFound/NotFound.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <GlobalSCSS />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={widthScreen >= 1024 ? <Home /> : <NoScreen />}></Route>
          <Route path="/search/:title" element={widthScreen >= 1024 ? <SearchPage /> : <NoScreen />}></Route>
          <Route path="/article/:id" element={widthScreen >= 1024 ? <Article /> : <NoScreen />}></Route>
          <Route path="/profile" element={widthScreen >= 1024 ? <Profile /> : <NoScreen />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
