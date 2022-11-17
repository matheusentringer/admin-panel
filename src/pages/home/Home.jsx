import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import "./home.css"
import { userData } from "../../dummyData"

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart title={"User Analytics"} data={userData} dataKey={"Active User"} grid={true} />
    </div>
  )
}

export default Home