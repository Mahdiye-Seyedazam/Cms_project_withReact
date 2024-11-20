import React from 'react'
import "./Home.css"
import Feature from '../../components/Feature/Feature'
import Chart from '../../components/Chart/Chart'
import {XaxisData} from '../../Datas'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'

export default function Home() {
  return (
    <div className="home">
      <Feature/>
      <Chart grid title="Month Sale" data={XaxisData} dataKey="sale" />
      
      <div className="widgets">
      <WidgetSm/> 
      <WidgetLg/>
      </div>
      
    </div>
      
    
  )
}
