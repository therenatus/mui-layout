import { Settings, Logout, PersonAdd } from '@mui/icons-material';
import { Box, styled, Typography, Avatar, MenuItem, Menu, ListItemIcon, Divider } from '@mui/material'
import React, { useState } from 'react'

export const AvatarBox = () => {

    const [open, setOpen] = useState(false)

    const UserBox = styled(Box)(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    }))
    return (
        <Box>
            <UserBox >
                <Avatar src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg" onClick={()=> setOpen(true)}/>
                <Typography>Rinad M</Typography>
            </UserBox>
            <Menu
                id="account-menu"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: .5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    )
}
