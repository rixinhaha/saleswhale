import React from 'react';
import '../style.css';
import { Box, } from '@material-ui/core';




function Activity(props) {
    let messages = []
    props.activity.map((item)=>{
      if(item.action==="increased_quota")
      {
        messages.push(
          <p className="activity_message"><b>{item.person.name}</b> increased <b>{item.target}</b>'s quota.</p>
        )
      }
      else if(item.action==="archived_team")
      {
        messages.push(
          <p className="activity_message"><b>{item.person.name}</b> archived the team <b>{item.target}</b>.</p>
        )
      }
      else if(item.action==="added_leads")
      {
        messages.push(
          <p className="activity_message"><b>{item.person.name}</b> added new leads to <b>{item.target}</b>.</p>
        )
      }
    })
    

    let activityEntries = []

    props.activity.map((item, index)=>{
      activityEntries.push(
        <div key={index} className="activity_entry">
            <div className="avatar_wrapper"><img className="avatar_image" src={item.person.avatar}/></div>
            <div className="activity_entry_text_wrapper">
                <div className="activity_message_wrapper">{messages[index]}</div>
                <p style={{ fontSize: 13, marginTop: 3, marginBottom: 3, color: "#9e9e9e",}}>{item.created_at}</p>
            </div>
        </div>
      )
    })

    return (
        <Box bgcolor="background.paper" className="activity_container" style={{ paddingTop: 1, paddingBottom: 5,} }maxWidth='sm'>
        <p className="activity_header">Activity</p>
        <hr style={{ height: 1, backgroundColor: "#e3e3e3", border:"None", }}></hr>
        {activityEntries}
      </Box>
    );
}

export default Activity;