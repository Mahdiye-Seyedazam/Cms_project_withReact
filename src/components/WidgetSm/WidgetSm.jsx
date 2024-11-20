import React from 'react'
import "./WidgetSm.css"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "../../Datas"
import { NewMembers } from '../../Datas';
export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">

            {NewMembers.map((user)=> (
                
                <li key={user.id} className="widgetSmItems">
                    <img src={user.img} alt="" className="widgetSmImg" />
            
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.name}</span>
                        <span className="widgetSmUserTitle">{user.title}</span>
            
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityOffIcon className="widgetSmIcon" />
                    </button>
                </li>

            ))}
        
        </ul>
    </div>
  )
}
