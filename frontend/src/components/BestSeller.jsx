import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Title from "./Title";


const BestSeller = () => {

  const{products}=useContext(ShopContext);
  const [bestSeller,setBestSeller]= useState([]);

  useEffect(()=>{
    const bestProduct=products.filter((item)=>(item.bestseller));
    setBestSeller(bestProsuct.slice(0,5))
  },[])
  return (
    <div className="my-10">
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolore maiores quae corrupti, quia, expedita ullam maxime quod, veritatis sunt fugiat suscipit culpa impedit? Consequatur totam deleniti cum ullam. Porro!</p>


      </div>
      
    </div>
  )
}

export default BestSeller