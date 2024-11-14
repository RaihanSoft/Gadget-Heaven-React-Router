/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import BannerImage from "../BannerImage"

const Banner = ({ title, subtitle }) => {
    const navigator = useNavigate()
    return (
        <>
            <div className="bg-prime min-h-[500px] pt-10 text-white ">
                <div className="text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className=" text-4xl sm:text-5xl font-bold ">{title}</h1>
                        <p className="py-6">
                            {subtitle}
                        </p>
                        <button onClick={() => navigator('/dashboard')} className="btn rounded-full font-bold hover:bg-prime hover:text-white px-8  ">Shop Now</button>
                    </div>
                </div>

            </div>
                <BannerImage />

        </>
    )
}

export default Banner
