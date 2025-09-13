import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'
import Recepies from '../page/Recepies'
import Create from '../page/Create'
import SingleRecepie from '../page/SingleRecipe'
import PageNotFound from '../page/PageNotFound'
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recepies" element={<Recepies />} />
            <Route path="/recepies/details/:id" element={<SingleRecepie />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes>
    )
}

export default MainRoutes