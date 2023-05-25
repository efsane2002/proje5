import React from 'react'
import style from "./index.module.css"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Team from '../Team';
import About from '../About';
import Blog from '../Blog';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <div style={{height:"90vh"}} className={style.div2}>
        <div className={style.box}>
        <ChevronLeftIcon style={{color:"white",fontSize:"34px"}}/>
        <ChevronRightIcon style={{color:"white",fontSize:"34px",position:"absolute",right:"0px"}}/>
            <div className={style.box1}>
            <h1 style={{color:"white"}}>HELLO WE'RE BIZPRO</h1>
            <h5 style={{color:"white",fontSize:"20px",fontWeight:"normal",width:"400px",margin:"20px auto"}}>SUB HEAD,MOTTO OR MISSION SUBTITLE</h5>
            <button style={{border:"1px solid red", width:"170px",height:"50px",backgroundColor:"black",color:"white",margin:"0 auto",display:"block"}} className={style.button}>SEE OUR PROJECTS</button>
            </div>
        </div>
    </div>
    <About></About>
    <Team></Team>
    <Blog></Blog>
    </>
  )
}
