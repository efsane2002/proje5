import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import style from "./index.module.css"
import { Helmet } from 'react-helmet';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function Team() {
  return (
    <div style={{overflow:"hidden"}} >
          <Helmet>
        <title>Team</title>
    </Helmet>
        <div className={style.box5}>
            <div>
                <h1>MEET OUR TEAM</h1><br></br>
            </div>
        </div>
        <p style={{width:'800px',textAlign:"center",margin:"0px auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p><br></br>
        <div >
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} style={{width:"70%",margin:"0 auto"}}>
        <Grid item xs>
          <Item style={{backgroundColor:"#E6E6E6"}}>
            <img src='https://preview.colorlib.com/theme/bizpro/images/team/1.jpg.webp'style={{width:"100%"}} ></img>
            <h3>Gonzalez Gina</h3>
            <h4>Web Developer</h4>
          </Item>
        </Grid>
        <Grid item xs>
          <Item style={{backgroundColor:"#E6E6E6"}}>
            <img src='https://preview.colorlib.com/theme/bizpro/images/team/2.jpg.webp'style={{width:"100%"}}></img>
            <h3>Holly Vincenzini</h3>
            <h4>Media Partner</h4>
          </Item>
        </Grid>
        <Grid item xs>
          <Item style={{backgroundColor:"#E6E6E6"}}>
            <img src='https://preview.colorlib.com/theme/bizpro/images/team/3.jpg.webp'style={{width:"100%"}}></img>
            <h3>Ramirez Minita</h3>
            <h4>Graphic Design</h4>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    </div>
  )
}
