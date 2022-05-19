import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";

const listItems = [
    {
        id: 1,
        icon: Home,
        label: 'HomePage'
    },
    {
        id: 2,
        icon: Article,
        label: 'Pages'
    }, {
        id: 2,
        icon: Group,
        label: 'Groups'
    }
    ,{
        id: 2,
        icon: Storefront,
        label: 'Marketplace'
    },
    {
        id: 2,
        icon: Person,
        label: 'Friends'
    },
    {
        id: 2,
        icon: Settings,
        label: 'Settings'
    },
    {
        id: 2,
        icon: AccountBox,
        label: 'Profile'
    }
]

export const Sidebar = () => {
    return (
        <Box
            flex={1}
            p={2}
            sx={{display: {xs: 'none', sm: 'block'}}}
            >
            <Box position={"fixed"}>
                <List>
                    {listItems.map((item) =>{
                        return(
                            <ListItem key={`${item.id}__${item.label}`}>
                                <ListItemButton component='a' href='#aa'>
                                    <ListItemIcon>
                                        <item.icon/>
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}

                    {/* <ListItem>
                        <ListItemButton>
                            <ListItemIcon>

                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem> */}
                </List>
            </Box>
        </Box>
    )
}
