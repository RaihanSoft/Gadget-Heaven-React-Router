import { NavLink, Outlet, useLoaderData } from "react-router-dom"
import Banner from "../Components/Home/Banner"


const Home = () => {
    const categories = useLoaderData()



    return (
        <>
            {/* Banner */}
            <Banner title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
            <div className="w-11/12 mx-auto sm:grid grid-cols-12 my-10 gap-6 ">

                <div className="sm:col-span-3 col-span-6 flex flex-col gap-3 font-bold shadow-md rounded-lg border-2 p-5 max-h-[450px]  ">
                    <NavLink className={({ isActive }) => `${isActive ? ' rounded-full btn bg-prime text-white ' : "btn text-prime rounded-full "}`} to={'/'}>All Products</NavLink>

                    
                    {categories.map((category) => <NavLink className={({ isActive }) => `${isActive ? 'rounded-full btn bg-prime text-white ' : " btn text-prime rounded-full "}`} to={`/category/${category.name}`} key={category.id}> {category.name} </NavLink>)}
                </div>



                <div className="sm:col-span-9 col-span-6 ">    

                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home
