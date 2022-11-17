import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import "./featuredinfo.css"

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Reveune</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,145</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative" /></span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,345</span>
          <span className="featuredMoneyRate">+2.6 <ArrowUpward className="featuredIcon positive" /></span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,756</span>
          <span className="featuredMoneyRate">-1.7 <ArrowDownward className="featuredIcon negative" /></span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo