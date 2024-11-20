import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StoreFrontIcon from '@mui/icons-material/StoreFront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import ReportIcon from '@mui/icons-material/Report'
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';

import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenue">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/home" className='link'>
                    <li className="SidebarListItem active">
                    <LineStyleIcon className='sidebarIcon ' />
                    Home
                    </li>
                    </Link>
                    <li className="SidebarListItem">
                    <TimelineIcon className='sidebarIcon' />
                    Analytics
                    </li>
                    <li className="SidebarListItem">
                    <TrendingUpIcon className='sidebarIcon' />
                    Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenue">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                <Link to="/users" className='link'>
                    <li className="SidebarListItem ">
                    <PermIdentityIcon className='sidebarIcon ' />
                    Users
                    </li>
                </Link>   
                <Link to="/newuser" className='link'>
                    <li className="SidebarListItem">
                    <StoreFrontIcon className='sidebarIcon' />
                    New User
                    </li>
                </Link>
                <Link to="/products" className='link'>  
                    <li className="SidebarListItem">
                    <AttachMoneyIcon className='sidebarIcon' />
                    Products
                    </li>
                </Link>    
                    <li className="SidebarListItem">
                    <BarChartIcon className='sidebarIcon' />
                    Transactions
                    </li>
                    <li className="SidebarListItem">
                    <MailOutlinedIcon className='sidebarIcon' />
                    Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenue">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="SidebarListItem">
                    <DynamicFeedIcon className='sidebarIcon active' />
                    Maile
                    </li>
                    <li className="SidebarListItem">
                    <ChatBubbleOutline className='sidebarIcon' />
                    Feedback
                    </li>
                    <li className="SidebarListItem">
                    <WorkOutlineIcon className='sidebarIcon' />
                    Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenue">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="SidebarListItem">
                    <ThreePOutlinedIcon className='sidebarIcon active' />
                    Manage
                    </li>
                    <li className="SidebarListItem">
                    <TimelineIcon className='sidebarIcon' />
                    Analytics
                    </li>
                    <li className="SidebarListItem">
                    <ReportIcon className='sidebarIcon' />
                    Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
