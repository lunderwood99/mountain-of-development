import { type FunctionComponent } from 'react'
import { ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

interface ListItemProps {
  item: string
  route: string
}

export const ListItem: FunctionComponent<ListItemProps> = ({ item, route }) => {
  return (
    <>
      <Link to={route} className='list-item__link'>
        <ListItemButton >
          <ListItemText primary={item} />
        </ListItemButton>
      </Link>
    </>
  )
}
