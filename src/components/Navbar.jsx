import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (

        <div className=" flex justify-around    items-center   ">


            <div className="text-4xl flex items-center font-[font2] font-bold">FoodHub</div>

            <div className=' flex justify-center items-center gap-5 p-4 text-2xl font-bold   mb-10 '>


                <NavLink className={(e) => e.isActive ? "text-yellow-800" : ""} to="/">Home</NavLink>
                <NavLink className={(e) => e.isActive ? "text-yellow-800" : ""} to="/about">About</NavLink>
                <NavLink className={(e) => e.isActive ? "text-yellow-800" : ""} to="/recepies">Recipes</NavLink>
                <NavLink className={(e) => e.isActive ? "text-yellow-800" : ""} to="/create">Create Recipe</NavLink>



            </div >

        </div>



    )
}

export default Navbar