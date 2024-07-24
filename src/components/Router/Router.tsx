import React from 'react'
import Home from '../Home/Home'
import Auth from '../Auth/Auth';
import { Route, Routes } from 'react-router-dom';


const Router: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path='/fnmoney/home' element={<Home />} />
                <Route path='/fnmoney' element={<Auth />} />
            </Routes>
        </>
    )
}

export default Router