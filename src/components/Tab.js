import React from 'react';
import '../style.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function CenteredTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.selected_teams(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}    
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="All" />
        <Tab label="Favorites" />
        <Tab label="Archived" />
      </Tabs>
    </div>
  );
}

