import React, { useState } from 'react';
import { Fab, Tooltip, Modal, Typography, Box, styled, Avatar, TextField, Button, Stack } from '@mui/material';
import { Add as AddIcon, EmojiEmotions, Image, LinkSharp, VideoCameraBack } from '@mui/icons-material'; 

export const Add = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const StyledModal = styled(Modal)(({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }));

    const UserBox = styled(Box)(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    }))

    return (
        <>
            <Tooltip title="Add" placement="top" sx={{position: 'fixed', bottom: 20, left:{xs: "calc(50% - 25px)", md: 20}}}>
                <Fab color="primary" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box width={400}
                    height={280}
                    p={3}
                    borderRadius={5}
                    bgcolor="white">
                    <Typography variant="h6" component="h2" color="gray" textAlign="center">
                        CreatePost
                    </Typography>
                    <UserBox >
                        <Avatar src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg"/>
                        <Typography>Rinad M</Typography>
                    </UserBox>

                    <TextField
                        id="standard-multiline-static"
                        label="Create post"
                        sx={{width: '100%', marginTop: '10px'}}
                        multiline
                        rows={3}
                        placeholder="Default Value"
                        variant="standard"
                    />
                    <Stack direction="row" gap={3} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color='secondary'/>
                        <VideoCameraBack color='success'/>
                        <LinkSharp color='error'/>
                    </Stack>
                    <Button variant="contained" sx={{width: '100%', marginTop: '20px'}}>
                        Post
                    </Button>
                </Box>
            </StyledModal>
        </>
    )
}
