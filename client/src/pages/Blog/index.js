import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import style from "./index.module.css"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function Blog() {
  return (
    <div style={{overflow:"hidden",marginTop:"150px"}} >
        <div className={style.box5}>
            <div>
                <h1 style={{margin:"0 auto",width:"350px"}}>OUR LATEST BLOG</h1><br></br>
            </div>
        </div>
        <p style={{width:'800px',textAlign:"center",margin:"0px auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p><br></br>
        <div >
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} style={{width:"70%",margin:"0 auto"}}>
        <Grid item xs>
          <Item style={{height:"400px"}}>
            <img src='https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg.webp'style={{width:"100%"}} ></img>
            <h3 style={{textAlign:"start"}}>Playback: Akufo-Addo speaks to business community</h3>
            <h4 style={{textAlign:"start"}}>Posted by admin at 04 Feb, 2017</h4>
           <p style={{textAlign:"start"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... Read More</p>
          </Item>
        </Grid>
        <Grid item xs>
          <Item style={{height:"400px"}}>
            <img src='https://preview.colorlib.com/theme/bizpro/images/blog/8.jpg'style={{width:"100%",height:"260px"}}></img>
            <h3 style={{textAlign:"start"}} >Playback: Akufo-Addo speaks to business community</h3>
            <h4 style={{textAlign:"start"}}>Posted by admin at 04 Feb, 2017</h4>
            <p style={{textAlign:"start"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... Read More</p>
          </Item>
        </Grid>
        <Grid item xs>
          <Item style={{height:"400px"}}>
            <img src='https://preview.colorlib.com/theme/bizpro/images/blog/9.jpg'style={{width:"100%",height:"260px"}}></img>
            <h3 style={{textAlign:"start"}} >Playback: Akufo-Addo speaks to business community</h3>
            <h4 style={{textAlign:"start"}}>Posted by admin at 04 Feb, 2017</h4>
            <p style={{textAlign:"start"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... Read More</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </div>
        <br></br><br></br><br></br><br></br>
    </div>
  )
}
