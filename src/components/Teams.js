import React from 'react';
import "../style.css"
import { Box, Divider } from '@material-ui/core';
import { IoIosChatboxes } from 'react-icons/io'
import { MdGroup } from "react-icons/md";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

function Teams(props)
{
    let allTeams = props.teams.map((item)=>{
        let starIcon;
        if(item.is_favorited===false)
        {
            starIcon=(
                <div className="star_wrapper"
                    onClick={()=>{
                        console.log("here")
                        props.favorite_team(item.id)
                    }
                }
                >
                <TiStarOutline style={{ color: '#c4c4c4', marginRight: 14, width: 20, height: 'auto', marginTop: -36,}}/>
                </div>
            )
        }
        else if(item.is_favorited===true)
        {
            starIcon = (
                <div className="star_wrapper">
                <TiStarFullOutline onClick={()=>{
                    props.unfavorite_team(item.id)
                }} style={{ color: "#F8CE43", marginRight: 14, width: 20, height: 'auto', marginTop: -39,}}/>
                </div>
            )
        }
        let created_or_archived;
        if(item.is_archived===false)
        {
            created_or_archived =(
                <p style={{fontSize:14, color: '#a6a6a6', marginTop:2,}}>Created {item.created_at}</p>
            )
        }
        else
        {
            created_or_archived =(
                <p style={{fontSize:14, color: '#a6a6a6', marginTop:2,}}>Archived</p>
            )
        }
        return(
          <div key={item.id} className="team_entry_grid_item">
            <Box className="team_entry_wrapper">
              <div className="team_entry_row1">
                <div className="company_logo_wrapper">
                  <div>
                    <img className="company_logo" src={item.image}/>
                  </div>
                </div>
                <div className="company_title_wrapper">
                    <b style={{fontSize:15,}}>{item.name}</b>
                    {created_or_archived}
                </div>
                {starIcon}
              </div>
              <Box component="div" style={{ fontSize: 13, width: "auto", height: 50, paddingRight: 4, marginTop: -16, marginBottom:10  }} whiteSpace="normal"  overflow="hidden" textOverflow="ellipsis">{item.description}</Box>
              <Divider style={{
                marginLeft: -7,
              }}/>
              <div className="team_entry_row3">
                  <IoIosChatboxes style={{  marginTop: -3, width: 20, height:'auto', marginRight: 3}}/>
                  <p style={{ fontSize: 14, marginLeft: 5, marginRight: 3}}>{item.campaigns_count} Campaigns</p>
                  <MdGroup style={{  marginTop: -2, marginLeft: 5, width: 20, height:'auto',  marginRight: 3}}/>
                  <p style={{ fontSize: 14, marginLeft: 5, marginRight: 3}}>{item.leads_count} Leads</p>
              </div>
            </Box>
          </div>
        )
    })
    
    return (
        <div className="centralize_grid">
            <div className="grid_wrapper">
                {allTeams}
            </div>
        </div>
    )
}

export default Teams;