import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export const recipeContext = createContext(null)

const RecipeContext = (props) => {


  const [data, setData] = useState([])

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('recipes')) || [])
  }, [])


  return (
    <recipeContext.Provider value={{ data, setData }}>
      {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext
// {
//   id: 1,
//     title: "Paneer Butter Masala",
//       tag: 'veg',
//         image: 'https://images.unsplash.com/photo-1701579231378-3726490a407b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
//           category: "Indian",
//             desc: "A rich and creamy North Indian curry made with paneer (cottage cheese) simmered in a buttery tomato based gravy, flavored with aromatic spices."
// }
