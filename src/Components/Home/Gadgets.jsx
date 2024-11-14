import { Link,} from "react-router-dom"

/* eslint-disable react/prop-types */
const Gadgets = ({ data }) => {



    const { product_image, product_title, price ,id } = data
    return (
        <div className="card bg-base-100  shadow-md border-2">
            <figure className=" p-5 ">
                <img
                    src={product_image}
                    alt="Products"
                    className="rounded-xl  h-52 " />
            </figure>
            <div className="card-body pt-0">
                <h2 className="card-title font-bold ">{product_title}</h2>
                <p className="font-medium" ><span>Price:</span> $ {price} </p>
                <div className="card-actions">
                    <Link to={`/details/${id}`}>  <button className="btn  text-prime border-2 font-medium hover:bg-prime hover:text-white border-prime rounded-full  ">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Gadgets
