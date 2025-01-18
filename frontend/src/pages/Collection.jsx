import { useContext, useState } from 'react';
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // Filter by Category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Filter by SubCategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let sortedProducts = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for 'relevant'
        break;
    }
    setFilterProducts(sortedProducts);
  };

  // Apply filters and sorting when filters or sorting type change
  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex">
      {/* FILTER OPTIONS */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)}>
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Dropdown"
          />
        </p>

        {/* CATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p>CATEGORIES</p>
          <div>
            <p>
              <input type="checkbox" value="Men" onChange={toggleCategory} /> MEN
            </p>
            <p>
              <input type="checkbox" value="Women" onChange={toggleCategory} /> WOMEN
            </p>
            <p>
              <input type="checkbox" value="Kids" onChange={toggleCategory} /> KIDS
            </p>
          </div>
        </div>

        {/* SubCategory FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p>TYPE</p>
          <div>
            <p>
              <input type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear
            </p>
            <p>
              <input type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p>
              <input type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />

          {/* PRODUCT SORT */}
          <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* MAP PRODUCT */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
