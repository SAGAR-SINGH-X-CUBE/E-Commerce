import { createContext, useEffect, useState, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // Add to Cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a product size.");
      return;
    }

    let cartData = structuredClone(cartItems);
    cartData[itemId] = cartData[itemId] || {};
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error("Failed to add item to cart. Please try again.");
      }
    }
  };

  // Calculate Cart Count
  const getCartCount = useMemo(() => {
    return Object.values(cartItems).reduce((totalCount, itemSizes) => {
      return (
        totalCount +
        Object.values(itemSizes).reduce((sum, count) => sum + count, 0)
      );
    }, 0);
  }, [cartItems]);

  // Update Quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error("Failed to update item quantity. Please try again.");
      }
    }
  };

  // Calculate Cart Amount
  const getCartAmount = useMemo(() => {
    return Object.keys(cartItems).reduce((totalAmount, itemId) => {
      const itemInfo = products.find((product) => product._id === itemId);
      if (!itemInfo) return totalAmount;

      return (
        totalAmount +
        Object.keys(cartItems[itemId]).reduce((itemSum, size) => {
          return itemSum + itemInfo.price * cartItems[itemId][size];
        }, 0)
      );
    }, 0);
  }, [cartItems, products]);

  // Fetch Products Data
  const getProductsData = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products.reverse());
      } else {
        toast.error(response.data.message || "Failed to fetch products.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching product data.");
    }
  }, [backendUrl]);

  // Fetch User Cart
  const getUserCart = useCallback(
    async (authToken) => {
      try {
        const response = await axios.post(
          `${backendUrl}/api/cart/get`,
          {},
          { headers: { token: authToken } }
        );
        if (response.data.success) {
          setCartItems(response.data.cartData);
        }
      } catch (error) {
        console.error(error);
        toast.error("Error fetching cart data.");
      }
    },
    [backendUrl]
  );

  // Initial Data Fetch
  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  // Token Handling
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (!token && savedToken) {
      setToken(savedToken);
      getUserCart(savedToken);
    } else if (token) {
      getUserCart(token);
    }
  }, [token, getUserCart]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
