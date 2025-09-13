import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { recipeContext as RecipeContext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const navigate = useNavigate();
    const { data, setData } = useContext(RecipeContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitHandler = (recipe) => {
        recipe.id = nanoid()
      



        const copyData = [...data]
        copyData.push(recipe)
        setData(copyData)
        console.log(copyData);
        localStorage.setItem('recipes', JSON.stringify(copyData))
        navigate('/recipes')

        toast.success("Recipe Created Successfully")
        reset()

    }


    return (
        <form onSubmit={handleSubmit(submitHandler)} className='flex w-1/3
         flex-col gap-1'>
            <input
                {...register('title')}
                type="text"
                placeholder='Recipe Name'
                className='border-b outline-none bg-transparent  p-2 text-lg'
            />
            <small className='text-red-500 mt-[-30]'>{errors.title?.message}</small>
            <input
                {...register('image')}
                type="url"
                placeholder='Recipe Image'
                className='border-b outline-none bg-transparent w-1/3  p-2 text-lg'
            />
            <small className='text-red-500 mt-[-3]'>Error</small>


            <select name="" id=""
                {...register('category')}
                className='rounded-md w-[20vw] border-b outline-none bg-white  p-2 text-lg text-black mb-2'
            >
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Continental">Continental</option>
                <option value="Japanese">Japanese</option>

            </select>
            <select name="" id=""
                {...register('tag')}
                className='rounded-md w-[20vw] border-b outline-none bg-white  p-2 text-lg text-black mb-2'
            >
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>

            </select>

            <textarea
                {...register('desc')}
                placeholder='Recipe Description'
                className='border-b outline-none bg-transparent  p-2 text-lg h-40'>

            </textarea>
            <small className='text-red-500 mt-[-3]'>Error</small>


            <button className='mt-5 p-2 text-thin w-1/3 rounded-md bg-zinc-900  block'>Save Recipe</button>

        </form>
    )
}

export default Create