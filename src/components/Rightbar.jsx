import React from 'react';
import { Box, Avatar, AvatarGroup, Typography, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';

const itemData = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
    },
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
    },
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'
    },
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8'
    },
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af'
    },
]

export const RightBar = () => {
    return (
        <Box
            flex={2}
            p={2}
            pr={5}
            sx={{display: {xs: 'none', sm: 'block'}}}
            >
            <Box position={"fixed"}>
                    <Typography variant='h4' fontWeight={100}>Online</Typography>
                    <AvatarGroup max={4} mt={10}>
                        <Avatar alt="Remy Sharp" src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Agnes Walker" src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                    <Typography variant='h4' fontWeight={100} mt={3}>Latest images</Typography>
                    <ImageList cols={3} rowHeight={164} gap={10}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    
                    <Typography variant='h4' fontWeight={100} mt={10}>Latest Conversation</Typography>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        </List>
            </Box>
        </Box>
    )
}
