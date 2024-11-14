
import BarChartComponent from "../Components/Rechart"

const Statistics = () => {

  return (


    <div>

      <div className="text-center py-10 bg-prime">
        <h1 className="text-5xl font-bold text-white ">Statistics</h1>
        <p className="text-white mt-3  sm:w-6/12 mx-auto ">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl font-bold mt-3 " >Statistics</h1>
      </div>
      <BarChartComponent />

    </div>
  )
}

export default Statistics
