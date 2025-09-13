import { useContext } from 'react'
import RecipeCard from '../components/RecipeCard.jsx'

import { recipeContext } from '../context/RecipeContext'
const Recepies = () => {


    const { data } = useContext(recipeContext)

    const renderRecipes = data.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ))

    return (
        <div className='flex flex-wrap justify-center w-full h-full gap-4  items-center  '>{renderRecipes}</div>
    )
}

export default Recepies