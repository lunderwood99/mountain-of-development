import { FunctionComponent, useState } from "react"
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface NestedListProps {
  header: string
  items: string[]
}

export const NestedList: FunctionComponent<NestedListProps> = ({
  header,
  items,
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
          <List component="div" sx={{ pt: 0, pb: 0 }}>
            {items.map((item, index) => (
              <ListItemButton sx={{ pl: 4, pt: 1, pb: 1}} key={index}>
                <ListItemText primary={item}/>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
    </>
  )
}