import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import './Topbar.css'

export default function Topbar() {
  return (
    <div className="Topbar">
        <div className="TopbarWraper">
            <div className="TopLeft">
                <span className="logoWraper">Mah❤</span>
            </div>
            <div className="TopRight">
                <div className="TopbarIconHolder">
                <NotificationsNoneIcon />
                <span className='iconBadge'>2</span>
                </div>
                <div className="TopbarIconHolder">
                <LanguageIcon />
                <span className='iconBadge'>3</span>
                </div>
                <div className="TopbarIconHolder">
                <SettingsIcon />
                </div>
                <img className='profile-topBar' src="/public/img/person1.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}
