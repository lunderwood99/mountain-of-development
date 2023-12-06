import { FunctionComponent, useState } from "react"
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { ListItem } from "../ListItem/ListItem";

interface NestedListProps {
  header: string
  items: string[]
  routes: string[]
}

export const NestedList: FunctionComponent<NestedListProps> = ({
  header,
  items,
  routes
}) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return(
    <>
      <ListItemButton onClick={handleClick}>
          <ListItemText primary={header} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" sx={{ pl: 4, pt: 0, pb: 0 }}>
            {items.map((item, index) => (
              <ListItem item={item} route={routes[index]} key={index}/>
            ))}
          </List>
        </Collapse>
    </>
  )
}