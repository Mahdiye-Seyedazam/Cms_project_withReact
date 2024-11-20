import React from 'react'
import './WidgetLg.css'
import { Transaction } from '../../Datas';

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={`WidgetLgBtn${type}`}>{type}</button>;
    }


  return (
    <div className='WidgetLg'>
        <h3 className="WidgetLgTitle">Latest Transaction</h3>
        <table className="WidgetLgTable">
            <tr className="WidgetLgTr">
                <th className="WidgetLgTh">Customer</th>
                <th className="WidgetLgTh">Date</th>
                <th className="WidgetLgTh">Amount</th>
                <th className="WidgetLgTh">Status</th>
            </tr>
            
                {Transaction.map((user) => (
                    <tr key={user.id} className="WidgetLgTr">
                    <td  className="WidgetLgUser">
                    <img className='WidgetLgUserImg' src={user.img} alt="" />
                    <span className='WidgetLgUserName'> {user.name}</span>
                </td>
                <td className="WidgetLgDate"> {user.date}</td>
                <td className="WidgetLgAmount">{user.Amount}</td>
                <td className="WidgetLgStatus">
                <Button  type={user.status}>{user.status}</Button>
                </td>
                </tr>

                ))}
                
            
            
        </table>

    </div>
  )
}
