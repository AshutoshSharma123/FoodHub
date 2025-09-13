
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex items-center justify-center w-full overflow-hidden '>
      <div className="w-1/2 h-full  flex justify-center items-center">
        <img className='w-6/8 object-cover  ' src="src/assets/side_img.png" alt="homeimg" />
      </div>
      <div className="text-center text-6xl w-1/2 flex flex-col justify-center items-center font-bold ">
        <h1 className=''>Variety of Cooking Recipes with right Nutrition</h1>


        <Link to="/create"><button className='bg-blue-500 text-white text-lg font-[font2] py-2 px-4 mt-10 rounded'>Get Started</button></Link>
      </div>


    </div>
  )
}

export default Home