// SingleRecipe.jsx
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../utils/axios";
const SingleRecipe = () => {

  const navigate = useNavigate();

  const { id } = useParams();   // get :id from the URL


  // find recipe by id
  const { data, setData } = useContext(recipeContext)

  const recipe = data.find(r => String(r.id) === id);

  if (!recipe) return <p>Recipe not found</p>;

  const { title, image, desc } = recipe;

  useEffect(() => {
    console.log("SingleRecipe mounted");


    return () => {
      // cleanup code
      console.log("SingleRecipe unmounted");
    }
  }, []) // square brackets to avoid infinite loop of useEffect to be called for unnecessary renders
  // empty dependency array means this effect runs only once after the initial render and only renders the component .


  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      category: recipe.category,
      tag: recipe.tag,
      desc: recipe.desc
    }
  });


  const updateHandler = (recipe) => {
    const recipeIndex = data.findIndex(r => r.id === id);
    console.log(recipeIndex);

    const copyrecipe = [...data]
    copyrecipe[recipeIndex] = { ...copyrecipe[recipeIndex], ...recipe }
    setData(copyrecipe)


    localStorage.setItem('recipes', JSON.stringify(copyrecipe))
    toast.success('recipe updated successfully !')
    navigate('/recepies')

  }


  const deleteHandler = () => {
    const filteredRecipe = data.filter(r => r.id !== id)
    setData(filteredRecipe)

    localStorage.setItem('recipes', JSON.stringify(filteredRecipe))
    toast.success('recipe deleted successfully !')
    navigate('/recepies')
  }

  return (
    <div className="w-full h-screen flex   gap-5 ">

      <div className="w-2/3 h-[28rem] flex bg-white rounded-md shadow-md overflow-hidden">

        <div className="w-[50%] h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-md shadow-md object-cover"
          />

        </div>

        <div className=" w-[50%] flex flex-col items-top  h-full p-3 gap-3">

          <div className="w-full relative  justify-center items-center gap-2  flex ">
            <h2 className="text-6xl text-center font-bold text-thin">{recipe.title}</h2>
            <div className="w-[0.1rem] h-full bg-black rounded-full"></div>

            <span
              className={` text-4xl text-thin  ${recipe.tag.toLowerCase() === "veg"
                ? "text-green-700"
                : "text-red-700"
                }`}
            >
              {recipe.tag}
            </span>


          </div>
          <div className="w-full  flex justify-center items-center gap-1 px-2">
            <div className="w-full items-end flex justify-end">
              <span className=" text-black p-1 text-center rounded-md font-[font2] text-xl">{recipe.category}</span>
            </div>


          </div>
          <div className="w-full flex flex-col  justify-center items-center gap-2 px-4">
            <h3 className="text-2xl font-semibold text-gray-800">Information</h3>
            <p className="w-full text-lg font-[font1] tracking-tight leading-5 text-justify px-2">
              {desc}
            </p>
          </div>


        </div>

      </div>


      <form onSubmit={handleSubmit(updateHandler)} className='flex w-1/3
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
          <option value="cat_1">Indian</option>
          <option value="cat_2">Continental</option>
          <option value="cat_3">Chinese</option>

        </select>


        <textarea
          {...register('desc')}
          placeholder='Recipe Description'
          className='border-b outline-none bg-transparent  p-2 text-lg h-40'>

        </textarea>
        <small className='text-red-500 mt-[-3]'>Error</small>

        <div className="flex gap-3">
          <button className='mt-5 p-2 text-thin w-1/3 rounded-md bg-zinc-900  block'>Update Recipe</button>
          <button className='mt-5 p-2 text-thin w-1/3 rounded-md bg-red-900  block'
            onClick={deleteHandler}
          >Delete Recipe</button>
        </div>


      </form>


    </div>
  );
};

export default SingleRecipe;
