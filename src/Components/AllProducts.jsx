import { useLoaderData, useParams } from "react-router-dom"
import Gadgets from "./Home/Gadgets"
import { useEffect, useState } from "react"




const AllProducts = () => {

    const datas = useLoaderData()

    const { name } = useParams()


    const [product, setProduct] = useState([])
    useEffect(() => {
        if (name) {
            const filtered = [...datas].filter(item => item.category === name)

            setProduct(filtered)

        }
        else {
            setProduct(datas.slice(0, 6))


        }
    }, [datas, name])


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {product.map((data) => <Gadgets data={data} key={data.id} />)}
            </div>

            <button onClick={() => product.length < 6 ? setProduct(product) : setProduct(datas)}  className="btn px-8 mt-8 text-black  border-2 font-bold hover:bg-prime hover:text-white border-prime rounded-full  " >View All</button>
        </>
    )
}

export default AllProducts
