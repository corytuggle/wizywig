import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { useState } from 'react';
import { Link } from "react-router-dom";

import '../css/drawers.css';
import '../css/login.css';

export default function AboutDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
      <IconButton
        size='large'
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
          <Typography component='div'>
            <br /><strong>About Us:</strong><br /><br />
            WIZyWIG gets its name from the acronym "wysiwyg",
            which is commonly pronounced as<br />"wiz-ee-wig", and stands
            for "What you see is what you get". It has become
            synonymous with Rich Text Editors, and in technical circles
            you'll often hear of a Rich Text Editor being referred to as
            a "wysiwyg editor".<br /><br />
            WIZyWIG was created with one goal in mind: to help you get
            over your writer's block. With our colorful themes and adaptive
            interface, you'll find your fingers flying across the keys
            and reaching your typing goals in no time at all!<br /><br />
            Open our "Compostion Drawer" by clicking the "hamburger" icon
            to the right of your screen, and explore all of the wonderful
            features WIZyWIG has to offer!
          </Typography>
          <Link to="/login"><button id='login-button'>Register & Login</button></Link>
        </Box>
      </Drawer>
    </>
  )
}
