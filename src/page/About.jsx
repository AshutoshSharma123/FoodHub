import axios from "../utils/axios";
import React, { useEffect } from 'react'
const about = () => {


  const getProducts = async () => {
    try {
      const { data } = await axios.get('products');
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    getProducts();

    return () => {
      // cleanup code
      console.log("Component unmounted");
    }
  })


  return (
    <div>about
      <button onClick={getProducts}>getProducts</button>
    </div>
  )
}

export default about