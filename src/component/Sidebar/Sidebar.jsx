import React, { useContext, useState } from 'react';
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended, setEntented] =  useState(false)
    const {onSent, prevPromts,setPrevPromt,newChat} = useContext(Context);
    const loadPromt = async (promt) => {
        setRecentPromt(promt);
        await onSent(promt)
    }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setEntented(prev =>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPromts.map((item,index)=>{
                  return (
                    <div onClick={()=> loadPromt(item)} className="recent-entry">
                      <img src={assets.message_icon} />
                      <p>{item.slice(0,18)}...</p>
                    </div>
                  );
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
