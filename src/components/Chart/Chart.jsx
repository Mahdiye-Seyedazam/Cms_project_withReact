
import React from 'react'
import './Chart.css'
import { LineChart, Line, CartesianGrid , XAxis,ResponsiveContainer , Tooltip } from 'recharts';


export default function Chart({title, data, dataKey, grid}) {
  return (
    <div className="chart">
        <h3 className="chartTilte"> {title}</h3>
        <ResponsiveContainer width="98%" aspect="4"   >
            <LineChart data={data} >
            <XAxis dataKey="name" stroke='#5550bd' />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8"  />
            <Tooltip/>
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
            </LineChart>
        </ResponsiveContainer>

    </div>
)
}
