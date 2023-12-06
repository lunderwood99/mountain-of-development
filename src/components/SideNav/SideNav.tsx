import { FunctionComponent } from "react";
import { List } from "@mui/material";
import { NestedList } from "./NestedList/NestedList";
import { ListItem } from "./ListItem/ListItem";
import { routes } from "../../routes"

export const SideNav: FunctionComponent = () => {
  const hardwareRoutes = Object.values(routes.hardware)
  const softwareRoutes = Object.values(routes.software)
  const techniqueRoutes = Object.values(routes.technique)

  return(
    <div className='side-nav'>
      <List 
        sx={{ width: '100%' }}
        component="nav"
      >
        <ListItem item="1. Getting Started" route={routes.gettingStarted}/>
        <NestedList header="2. Hardware" items={["Audio Interfaces", "Microphones"]} routes={hardwareRoutes}/>
        <NestedList header="3. Software" items={["DAWs", "Plugins"]} routes={softwareRoutes}/>
        <NestedList header="4. Technique" items={["Mixing", "Mastering"]} routes={techniqueRoutes}/>
        <ListItem item="5. Advanced Resources" route={routes.advancedResources}/>
      </List>
    </div>
  )
}