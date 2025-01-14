import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom";


const ProductItem = ({id,image,name,price}) => {

  const {currency}=useContext(ShopContext);

  return (
   

    <Link
  className="text-gray-700 cursor-pointer hover:shadow-lg hover:bg-gray-100 transition duration-200"
  to={`/product/${id}`}
>
  <div className="overflow-hidden">
    <img
      className="hover:scale-110 transition duration-300 ease-in-out"
      src={image[0]}
      alt={`${name} product image`}
    />
  </div>
  <p className=" truncate max-w-xs text-gray-800 pt-3 pb-1 text-sm">{name}</p>
  <p className="text-sm font-semibold text-green-600">{currency}{price}</p>
</Link>
    
  )
}

export default ProductItem
