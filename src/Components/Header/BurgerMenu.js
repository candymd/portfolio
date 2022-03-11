import React, { useState } from "react";
import Header from "./Header";
import './Header.css'
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";


export default function MainNavigation() {
  /*
  react useState hook to save the current open/close state of the drawer,
  normally variables dissapear afte the function was executed
  */
  const [open, setState] = useState(false);

  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBar sx={{ backgroundColor: "transparent", boxShadow: 'none', display: "flex",
    alignItems: "flex-end"}}>
      <IconButton
        edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer(true)} sx={{
          mr: 2,
          display: {
            xs: "block",
            sm: "none",
          }, 
        }}
      >
        <MenuIcon sx={{padding: "6px", width: "60px", height: "60px", fontSize: "50px", color: "#3A2C6D", backgroundColor: "#D6FFF6", borderRadius: "50%", border: "1px solid #3A2C6D"}} />
      </IconButton>

      <Drawer 
        anchor="right" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <Box sx={ {p: 15,
                  height: 1,
                  backgroundColor: "#3A2C6D", fontSize: 100,}} className="box">
          <Header close={toggleDrawer(false)}/>
        </Box>
      </Drawer>
    </AppBar>
  
  );
}
