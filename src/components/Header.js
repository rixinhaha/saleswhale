import React from 'react';
import '../style.css';
import { MdArrowDropDown } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header(props)
{

    return(
        <div className="header_wrapper">
            <div className="header_left">
              <div className="app_name_wrapper">
                <p className="app_name_text">NARWHAL</p>
              </div>
              <div className="app_page_title_wrapper">
                <p className="app_page_title_text">Teams</p>
              </div>
            </div>
            <div className="header_right">
              <div className="notification_wrapper">
                <IoMdNotificationsOutline style={{width: 23, height: 'auto',}}/>
                <div className="notif_circle">
                  {props.user.notifications_count}
                </div>
              </div>
              <div className="app_page_title_wrapper">
               <p className="user_welcome_text">Hello, {props.user.name}</p>
              </div>
              <div className="avatar_headerbar_wrapper"><img className="avatar_image" src={props.user.avatar}/></div>
              <MdArrowDropDown style={{ marginTop: 24, marginRight:14, }}/>
            </div>
        </div>
    )
}


export default Header;