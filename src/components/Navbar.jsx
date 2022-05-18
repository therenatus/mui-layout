import { Pets, Notifications, Mail } from '@mui/icons-material';
import { AppBar, Box, InputBase, styled, Toolbar, Typography, Badge } from '@mui/material'
import React from 'react'

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

    const Icons = styled()
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h5" sx={{display: { xs: "none", sm: "block" } }}>LOGO</Typography>
                <Pets sx={{display: { xs: "block", sm: "none" } }}/>

                <Search>
                    <InputBase placeholder='Search...'/>
                </Search>

                <Icons>
                    <Badge badgeContent={4} color="primary">
                        <Mail color="action" />
                    </Badge>

                    <Badge badgeContent={4} color="primary">
                        <Notifications color="action" />
                    </Badge>
                </Icons>
                
            </StyledToolbar>
        </AppBar>
    )
}
