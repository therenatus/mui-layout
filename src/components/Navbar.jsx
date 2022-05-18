import React from 'react'
import { AvatarBox } from './Avatar';
import { Pets, Notifications, Mail } from '@mui/icons-material';
import { AppBar, Box, InputBase, styled, Toolbar, Typography, Badge } from '@mui/material';

export const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between',
    });

    const Search = styled('div')(({theme}) => ({
        backgroundColor: 'white',
        borderRadius: theme.shape.borderRadius,
        width: "35%",
        padding: '0 8px',
    }));

    const Icons = styled(Box)(({theme}) => ({
        display: 'none',
        alignItems: 'center',
        gap: '20px',
        [theme.breakpoints.up('sm')]:{
            display: 'flex',
        }
    }))

    // const UserBox = styled(Box)(({theme}) => ({
    //     display: 'flex',
    //     alignItems: 'center',
    //     gap: '20px',
    //     [theme.breakpoints.up('sm')]:{
    //         display: 'none',
    //     }
    // }))
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h5" sx={{display: { xs: "none", sm: "block" } }}>LOGO</Typography>
                <Pets sx={{display: { xs: "block", sm: "none" } }}/>

                <Search>
                    <InputBase placeholder='Search...'/>
                </Search>

                <Box>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <Mail color="white" />
                        </Badge>

                        <Badge badgeContent={4} color="error">
                            <Notifications color="white" />
                        </Badge>
                    </Icons>
                    <AvatarBox />

                </Box>

                {/* <UserBox>
                    <Avatar src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg"/>
                    <Typography>Rinad M</Typography>
                </UserBox> */}
                
            </StyledToolbar>
            {/* <Menu
                id="account-menu"
                open={true}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
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
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
            </Menu> */}
        </AppBar>
    )
}
