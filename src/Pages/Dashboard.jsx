import { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData, useNavigate, useLocation } from "react-router-dom";
import { getStoredReadList, getStoredWishList, removeFromStoredReadList, removeFromStoredWishList } from "../Components/Util/Util";

const Dashboard = () => {


  const allProducts = useLoaderData();
  const [carts, setCarts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalCost, setTotalCost] = useState(0); 

  const navigate = useNavigate();
  const location = useLocation();

  const refreshCartData = () => {
    const storedCartList = getStoredReadList().map(id => parseInt(id, 10));
    const cartList = allProducts.filter(product => storedCartList.includes(product.id));
    setCarts(cartList);

    const initialTotalCost = cartList.reduce((acc, product) => acc + product.price, 0);
    setTotalCost(initialTotalCost);
  };

  // Function to refresh the wishlist data from local storage
  const refreshWishlistData = () => {
    const storedWishlist = getStoredWishList().map(id => parseInt(id, 10));
    const wishlistItems = allProducts.filter(product => storedWishlist.includes(product.id));
    setWishlist(wishlistItems);
  };

  useEffect(() => {
    refreshCartData();
    refreshWishlistData();
  }, [allProducts]);

  const handleRemoveFromCart = (id) => {
    setCarts(prevCarts => {
      const updatedCarts = prevCarts.filter(item => item.id !== id);
      const removedProduct = prevCarts.find(item => item.id === id);
      if (removedProduct) {
        setTotalCost(prevTotal => prevTotal - removedProduct.price);
      }
      window.dispatchEvent(new Event('cartCountUpdate'));
      return updatedCarts;
    });
    removeFromStoredReadList(id);
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(prevWishlist => {
      window.dispatchEvent(new Event('wishlistCountUpdate'));
      return prevWishlist.filter(item => item.id !== id);
    });
    removeFromStoredWishList(id);
    refreshWishlistData(); // Refresh the wishlist data to sync with local storage
  };

  const updateTotalCost = (newTotalCost) => {
    setTotalCost(newTotalCost);
  };

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      navigate('cart');
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <div className="text-center py-10 bg-prime">
        <h1 className="text-5xl font-bold text-white">Dashboard</h1>
        <div className="my-4 w-full flex flex-col md:flex-row items-center justify-center gap-3">
          <NavLink to="cart" className={({ isActive }) => isActive ? 'btn rounded-full border-2 px-8 py-2 text-prime font-bold' : 'border-2 font-bold text-white rounded-full px-8 py-2'}>
            Cart
          </NavLink>
          <NavLink to="wishlist" className={({ isActive }) => isActive ? 'btn rounded-full border-2 px-8 py-2 text-prime font-bold' : 'border-2 font-bold text-white rounded-full px-8 py-2'}>
            Wishlist
          </NavLink>
        </div>
      </div>

      <Outlet context={{ 
        carts, 
        wishlist, 
        handleRemoveFromCart, 
        handleRemoveFromWishlist, 
        totalCost, 
        updateTotalCost,
        refreshCartData,
        refreshWishlistData // Pass the refresh function to Wishlist component
      }} />
    </>
  );
};

export default Dashboard;
