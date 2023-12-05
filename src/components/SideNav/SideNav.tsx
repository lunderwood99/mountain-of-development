import { FunctionComponent } from "react";
import { List } from "@mui/material";
import { NestedList } from "./NestedList/NestedList";
import { ListItem } from "./ListItem/ListItem";

export const SideNav: FunctionComponent = () => {
  return(
    <div className='side-nav'>
      <List 
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
      >
        <ListItem item="1. Getting Started"/>
        <NestedList header="2. Hardware" items={["Audio Interfaces", "Microphones"]}/>
        <NestedList header="3. Software" items={["DAWs", "Plugins"]}/>
        <ListItem item="4. Advanced Resources" />
      </List>
    </div>
  )
}