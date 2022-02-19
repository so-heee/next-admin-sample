import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import ChatIcon from '@mui/icons-material/Chat'
import Link from 'next/link'

export const mainListItems = (
  <div>
    <ListSubheader color="primary">General</ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon color="primary" />
      </ListItemIcon>
      <Link href="/dashboard">
        <ListItemText
          primary="Dashboard"
          primaryTypographyProps={{ fontSize: 13, fontWeight: 'bold' }}
        />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon color="primary" />
      </ListItemIcon>
      <Link href="/user">
        <ListItemText
          primary="User"
          primaryTypographyProps={{ fontSize: 13, fontWeight: 'bold' }}
        />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ChatIcon color="primary" />
      </ListItemIcon>
      <Link href="/tweet">
        <ListItemText
          primary="Tweet"
          primaryTypographyProps={{ fontSize: 13, fontWeight: 'bold' }}
        />
      </Link>
    </ListItemButton>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader color="primary">Supervisor</ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <SupervisorAccountIcon color="primary" />
      </ListItemIcon>
      <ListItemText
        primary="Account"
        primaryTypographyProps={{ fontSize: 13, fontWeight: 'bold' }}
      />
    </ListItemButton>
  </div>
)
