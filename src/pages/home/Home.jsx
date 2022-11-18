import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import "./home.css"
import { userData } from "../../dummyData"
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart title={"User Analytics"} data={userData} dataKey={"Active User"} grid={true} />
      <div className="homeWidget">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home