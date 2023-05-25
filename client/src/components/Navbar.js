import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import style from "./index.module.css"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"rgba(0,0,0,0.1)",position:"fixed",zIndex:"99"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <ul className={style.ul}>
            <img src='https://preview.colorlib.com/theme/bizpro/images/logo/logo.png.webp' style={{marginLeft:"100px"}}></img>
            <div className={style.div}>
             <li>
            <Link to="/" style={{textDecoration: "none",color:"red",fontSize:"18px"}}>Home</Link>
            </li>
            <li>
            <Link to="/about" style={{textDecoration: "none",color:"white",fontSize:"18px"}}>About</Link>
            </li>
            <li>
            <Link to="/blog" style={{textDecoration: "none",color:"white",fontSize:"18px"}} >Blog</Link>
            </li>
            <li>
            <Link to="/clients" style={{textDecoration: "none",color:"white",fontSize:"18px"}} >Clients</Link>
            </li>
            <li>
            <Link to="/contact"style={{textDecoration: "none",color:"white",fontSize:"18px"}} >Contact</Link>
            </li>
            <li>
            <Link to="/portfolio" style={{textDecoration: "none",color:"white",fontSize:"18px"}}>Portfolio</Link>
            </li>
            <li>
            <Link to="/pricing" style={{textDecoration: "none",color:"white",fontSize:"18px"}}>Pricing</Link>
            </li>
            <li>
            <Link to="/services" style={{textDecoration: "none",color:"white",fontSize:"18px"}}>Services</Link>
            </li>
            <li>
            <Link to="/skill" style={{textDecoration: "none",color:"white",fontSize:"18px"}}>Skill</Link>
            </li>
            <li>
            <Link to="/team"style={{textDecoration: "none",color:"white",fontSize:"18px"}} >Team</Link>
            </li>
            <li>
                <Link to="/add" style={{textDecoration:"none",color:"white",fontSize:"18px"}}>Add</Link>
            </li>
            </div>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}