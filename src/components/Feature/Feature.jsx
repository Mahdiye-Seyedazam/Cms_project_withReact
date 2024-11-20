import React from 'react'
import "./Feature.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Feature() {
  return (
    <div className="feature">
        <div className="featureItems">
            <span className='FeatureTitle'>Revanue</span>
            <div className="featureContainer">
                <span className="featureCost">$2,415  </span>
                <span className="ItemRate">-11.4 
                    <ArrowDownwardIcon className='ItemArrow Negative' /></span>
            </div>
            <div className="ItemSub">Compared to last month</div>
        </div>
        <div className="featureItems">
            <span className='FeatureTitle'>Revanue</span>
            <div className="featureContainer">
                <span className="featureCost">$2,415  </span>
                <span className="ItemRate">-11.4 
                    <ArrowDownwardIcon className='ItemArrow Negative' /></span>
            </div>
            <div className="ItemSub">Compared to last month</div>
        </div>
        <div className="featureItems">
            <span className='FeatureTitle'>Revanue</span>
            <div className="featureContainer">
                <span className="featureCost">$2,415  </span>
                <span className="ItemRate">-11.4 
                    <ArrowUpwardIcon className='ItemArrow Positive' /></span>
            </div>
            <div className="ItemSub">Compared to last month</div>
        </div>
    </div>
  )
}
