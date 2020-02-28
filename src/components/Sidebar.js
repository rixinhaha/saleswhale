import React from 'react';
import '../style.css';
import { MdLocationCity, MdHelpOutline } from "react-icons/md";
import { GiSpermWhale } from "react-icons/gi";
import { IoMdChatboxes, IoIosPulse } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

function Sidebar(props)
{
    let styles = [
        "icon_wrapper",
        "icon_wrapper",
        "icon_wrapper",
        "icon_wrapper",
        "icon_wrapper",
        "icon_wrapper",
    ]
    
    if(props.selected==="teams")
    {
        styles[2]="selected_icon_wrapper"
    }

    return(
        <div className="sidebar">
          <div className="nav_icons_wrapper">
            <div className={styles[0]}><GiSpermWhale className="logo"/></div>
            <div className={styles[1]}><IoMdChatboxes className="nav_icons"/></div>
            <div className={styles[2]}><MdLocationCity className="nav_icons"/></div>
            <div className={styles[3]}><FaRegUser className="nav_icons"/></div>
            <div className={styles[4]}><IoIosPulse className="nav_icons"/></div>
          </div>
          <div className="help_icon_wrapper">
            <div className={styles[5]}><MdHelpOutline className="nav_icons"/></div>
          </div>
        </div> 
    )
}


export default Sidebar;