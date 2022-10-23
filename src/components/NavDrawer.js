import {
    Drawer, Box, Typography, IconButton, Divider,
    List, ListItem, ListItemButton, ListItemText, ListItemIcon
} from "@mui/material";
import { ChevronRight, LoginRounded, LogoutRounded } from "@mui/icons-material";
import { useState } from 'react';

export default function NavDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                padding='2'
                aria-label='logo'
                onClick={() => setIsDrawerOpen(true)}
            >
                <ChevronRight />
            </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width='300px' textalign='center' role='presentation'>
                    <Typography variant='h6' component='div'>
                        WIZyWIG
                    </Typography>
                    <List>
                        {['Sign In', 'Sign Out'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton >
                                    <ListItemIcon >
                                        {index % 2 === 0 ? <LoginRounded /> : <LogoutRounded />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}