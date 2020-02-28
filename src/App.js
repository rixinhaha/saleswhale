import React from 'react';
import data from './data/data.json';
import "./style.css"
import 'typeface-roboto';
import Activity from './components/Activity.js';
import Teams from './components/Teams.js';
import Tab from './components/Tab.js';
import Sidebar from './components/Sidebar.js';
import Header from './components/Header.js'
import { FaPlus, FaSearch, } from "react-icons/fa";
import { Button } from '@material-ui/core';
import { MdLocationCity} from "react-icons/md";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...data,
      page: 'teams',
      selected_teams: data.teams,
      displayed_teams_info: {
        display_string: "All",
        display_count: data.teams.length,
      },
    };
  }

  

  team_selector = (value) =>
  {
    //value here refer to the values from the
    let teams;
    if(value===1)
    {
      teams = this.state.teams.filter(item=>
        item.is_favorited === true
      )
      this.setState({
        selected_teams: teams,
        displayed_teams_info: {
          display_string: "Favorite",
          display_count: teams.length,
        }
      })
    }
    else if(value===2)
    {
      teams = this.state.teams.filter(item=>
        item.is_archived === true
      )
      this.setState({
        selected_teams: teams,
        displayed_teams_info: {
          display_string: "Archived",
          display_count: teams.length,
        }
      })
    }
    else if(value===0)
    {
      this.setState({
        selected_teams: this.state.teams,
        displayed_teams_info: {
          display_string: "All",
          display_count: this.state.teams.length,
        }
      })
    }
  }

  favorite_team = (id) => { 
    let stateCopy  = Object.assign(this.state)
    console.log("here")
    stateCopy.teams.map((item)=>{
      if(item.id===id)
      {
        item.is_favorited=true
        console.log(item)
      }
    })
    this.setState(stateCopy);
  }

  unfavorite_team = (id) => {
    let stateCopy  = Object.assign(this.state)
    stateCopy.teams.map((item)=>{
      if(item.id===id)
      {
        item.is_favorited=false
        if(stateCopy.displayed_teams_info.display_string==="Favorite")
        stateCopy.selected_teams = stateCopy.selected_teams.filter((team)=>{
          return !(item===team)
        })
      }
    })
    this.setState(stateCopy);
  }

  render()
  {
    return(
      <div className="app">
        <Sidebar selected={this.state.page}/>
        <div className="final_wrapper">
        <Header user={this.state.current_user}/>
        <div className="overall_wrapper">
          <div className="dashboard_wrapper">
            <div className="team_header_wrapper">
              <div className="team_icon_wrapper">
                <MdLocationCity style={{ width: 29, height: 'auto', marginLeft: 17, color:"#A4A6A8", }}/>
                <p style={{ fontSize: 30, marginLeft: 3,}}>Teams</p>
              </div>
              <Button size='small'variant="contained" color="primary" className="create_new_team_button">
                <FaPlus style={{ marginRight: 10, }}/> 
                <p>CREATE NEW TEAM</p>
              </Button>
            </div>
            <div className="tab_search_wrapper">
              <Tab selected_teams={this.team_selector}/>
              <div>
                <FaSearch style={{ width: 12, height: "auto", marginBottom: -1, }}/>
                <input placeholder="Search team name..." className="search_field"></input>
              </div>
            </div>
            <div style={{ background: '#E5E5E5', flexGrow: 1,}}>
              <div className="team_activity_wrapper">
                  <div className="teams_display_wrapper">
                    <div className="team_selection_wrapper">
                      <p style={{color: "#000000", fontSize:20, marginLeft: 37, fontWeight: 600}}>{this.state.displayed_teams_info.display_string} Teams</p>
                      <p style={{color: "#7F7F7F", fontSize: 16, marginRight: 40, paddingTop: 8}}>Showing {this.state.displayed_teams_info.display_count} out of {this.state.teams.length} Teams</p>
                    </div>
                    <hr className="teams_divider"/>
                    <Teams favorite_team={this.favorite_team} unfavorite_team={this.unfavorite_team} teams={this.state.selected_teams}/>
                  </div>
                  <div>
                    <Activity activity={this.state.activities}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    )
  }
}


export default App;
