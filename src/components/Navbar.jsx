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

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h5" sx={{display: { xs: "none", sm: "block" } }}>LOGO</Typography>
                <Pets sx={{display: { xs: "block", sm: "none" } }}/>

                <Search>
                    <InputBase placeholder='Search...'/>
                </Search>

                <Box display="flex" gap="20px">
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
            </StyledToolbar>
        </AppBar>
    )
}
