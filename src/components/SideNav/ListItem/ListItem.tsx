import { FunctionComponent } from "react";
import { ListItemButton, ListItemText } from "@mui/material";

interface ListItemProps {
  item: string
}

export const ListItem: FunctionComponent<ListItemProps> = ({ item }) => {
  return (
    <>
      <ListItemButton >
        <ListItemText primary={item} />
      </ListItemButton>
    </>
  )
}