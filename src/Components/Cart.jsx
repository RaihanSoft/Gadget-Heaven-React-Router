import { RxCross2 } from "react-icons/rx";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { removeFromStoredReadList, clearLocalStorage } from "./Util/Util";

const Cart = () => {
  const { carts, totalCost, updateTotalCost, refreshCartData } = useOutletContext();
  const [sortedCarts, setSortedCarts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Load cart data from context on component mount
  useEffect(() => {
    setSortedCarts(carts);
  }, [carts]);

  // Sort carts by price in descending order
  const sortByPriceDescending = () => {
    const sorted = [...sortedCarts].sort((a, b) => b.price - a.price);
    setSortedCarts(sorted);
  };

  // Handle item removal and update total cost
  const handleRemoveAndUpdate = (id) => {
    const removedItem = sortedCarts.find(item => item.id === id);
    if (removedItem) {
      const updatedTotalCost = totalCost - removedItem.price;
      updateTotalCost(updatedTotalCost);
    }

    removeFromStoredReadList(id); // Remove from local storage
    setSortedCarts(prev => prev.filter(item => item.id !== id)); // Remove from local state

    // Refresh data in parent and update the navbar count
    refreshCartData();
    window.dispatchEvent(new Event('cartCountUpdate'));
  };

  // Close the modal and clear the cart
  const closeModal = () => {
    clearLocalStorage();
    setIsModalOpen(false);
    navigate('/');
    refreshCartData();
  };

  return (
    <div className="w-11/12 mx-auto mt-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex items-center gap-6">
          <p className="text-2xl font-bold">Total cost: <span className="text-xl">${totalCost.toFixed(2)}</span></p>
          <button className="btn" onClick={sortByPriceDescending}>Sort by Price</button>
          <button
            className="btn"
            onClick={() => setIsModalOpen(true)}
            disabled={!sortedCarts.length}
          >
            Purchase
          </button>
        </div>
      </div>

      {sortedCarts.length ? (
        sortedCarts.map(item => (
          <div key={item.id} className="grid rounded-xl shadow-md border-2 justify-items-center sm:flex p-5 m-5 gap-4 relative">
            <div className="md:h-32 h-40 sm:w-52 w-full">
              <img className="h-full w-full rounded-xl object-cover" src={item.product_image} alt={item.product_title} />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">{item.category}</h2>
              <p>{item.description}</p>
              <p className="font-medium text-lg">Price: $ {item.price}</p>
            </div>
            <div onClick={() => handleRemoveAndUpdate(item.id)} className="hover:cursor-pointer absolute right-10 border-red-500 rounded-full border-2">
              <RxCross2 size={30} color="red" />
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}

      {isModalOpen && (
        <div>
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <div className="flex items-center justify-center "><img className="h-20 mb-5" src="/Group.png" alt="" /></div>
              <h2 className="text-2xl font-bold mb-4">Payment Successfully</h2>
              <p>Your purchase was successful!</p>
              <p className="text-xl font-semibold mt-4">Total : ${totalCost.toFixed(2)}</p>
              <button onClick={closeModal} className="btn border-prime border-2 text-prime hover:bg-prime hover:text-white font-bold w-full rounded-full mt-4">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
