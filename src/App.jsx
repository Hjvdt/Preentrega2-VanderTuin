import React from 'react'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Detalle from './pages/Detalle'
import Footer from './components/Footer/Footer';
import "./App.css"

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/category/:categoryId' element={<Home />} />
                <Route path='/detalle/:id' element={<Detalle />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App