import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList } from "../Components/Util/Util";

const ProductDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isInCart, setIsInCart] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const { product_image, product_title, price, description, specification, rating } = product;

    useEffect(() => {
        const singleData = datas.find(data => data.id === parseInt(id));
        if (singleData) {
            setProduct(singleData);

            const storedCartList = getStoredReadList();
            const storedWishlist = getStoredWishList();
            setIsInCart(storedCartList.includes(id));
            setIsInWishlist(storedWishlist.includes(id));
        } else {
            console.error('Product not found');
        }
    }, [datas, id]);

    const handleAddToCartClick = () => {
        addToStoredReadList(id);
        setIsInCart(true);
        window.dispatchEvent(new Event('cartCountUpdate'));
    };

    const handleAddToWishlist = () => {
        addToStoredWishList(id);
        setIsInWishlist(true);
        window.dispatchEvent(new Event('wishlistCountUpdate'));
    };

    return (
        <>
            <div className="text-center bg-prime text-white py-10 pb-40 mb-10">
                <h1 className="text-5xl font-bold">Product Details</h1>
                <p>Explore the latest gadgets that will take your experience to the next level.</p>
            </div>
            <div className=" bg-base-200 min-h-[400px]  -mt-40 sm:w-8/12 mx-auto mb-10 rounded-lg p-3 sm:p-5 ">
                <div className=" flex flex-col lg:flex-row gap-6  ">
                    <img src={product_image} className=" h-[460px] object-cover  sm:w-[400px] rounded-lg shadow-md" alt={product_title} />
                    <div>
                        <h1 className="text-4xl font-bold">{product_title}</h1>
                        <p className="my-3 font-medium text-xl ">Price: $ {price}</p>
                        <p className="text-[#309C08] bg-[#309C08]/15 font-medium border-[#309C08] border-2 rounded-full inline px-2 " >In Stock</p>
                        <p className="py-3">{description}</p>
                        <h2 className="text-xl font-bold mb-5" >Device Specifications:</h2>
                        <ul className="text-gray-600 mb-3" >
                            {specification && specification.map((spec, index) => (
                                <li key={index}>{index + 1}. {spec}</li>
                            ))}
                        </ul>

                        <h2 className="font-bold" >Rating ⭐ </h2>
                        <div className="flex items-center ">
                            <p>
                                <div className="rating rating-sm my-4 ">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </p>
                            <p className="ml-10 font-medium ">{rating}</p></div>
                        <div className="flex items-center gap-5">
                            <button
                                onClick={handleAddToCartClick}
                                className="btn border-2 hover:bg-[#9538E2] hover:text-white font-bold border-[#9538E2] rounded-full "
                                disabled={isInCart}
                            >
                                {isInCart ? "Added to Cart" : "Add To Cart"}
                                <MdOutlineShoppingCart size={20} />
                            </button>
                            <button
                                onClick={handleAddToWishlist}
                                className="btn rounded-full border-2 border-[#9538E2] hover:bg-[#9538E2] hover:text-white  font-bold "
                                disabled={isInWishlist}
                            >
                                {isInWishlist ? "" : ""}
                                <FiHeart size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
