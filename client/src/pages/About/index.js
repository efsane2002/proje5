import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Card } from "antd";
import { useNewContext } from "../../context/NewContext";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import style from "./index.module.css"
import { deleteProductsByID, getAllProducts } from "../../api/request";
import { Helmet } from "react-helmet";

const About = () => {
  const[products,setProducts] = useNewContext();
 const navigate=useNavigate()
  useEffect(()=>{
    getAllProducts().then(res=>{
      setProducts(res);
    })
  },[setProducts])
  function handleDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductsByID(id);
        setProducts(products.filter((x)=>x._id!==id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
 function handleClick(){
    navigate(`/detail`)

 }
  return (
    <>
    <Helmet>
      <title>Product page</title>
    </Helmet>
    <h1 style={{width:"400px",paddingTop:"100px", margin:"0 auto"}}>ABOUT OUR BIZPRO</h1>
    <p style={{width:"850px", margin:"10px auto",textAlign:"center"}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
    <div style={{ width: "80%", margin: "50px auto"}}>
      <div style={{display:'flex',alignItems:'baseline'}}>
      <TextField onChange={(e)=>{
        getAllProducts(e.target.value).then(res=>{
          setProducts(res);
        })
     }} style={{marginBottom:'15px'}} id="outlined-basic" label="Search" variant="outlined" />
      </div>
      <Grid  container spacing={2}>
        {products && products.map((product)=>{
          return <Grid key={product._id} item lg={3} md={6} sm={12}>
          <Card
            hoverable
            cover={
                <div style={{width:"120px",height:"120px",borderRadius:"50%",border:"1px solid red",display:"flex",justifyContent:"center", alignItems:"center",margin:"20px auto"}} className={style.icon}><i className={`${product.icon}`} style={{margin:"0 auto",fontSize:"40px"}}></i></div>
            }
          >
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
            <Typography style={{marginBottom:'7px'}}><Link to={`/product/${product._id}`}>
                {product.name}</Link></Typography>
            <Typography style={{marginBottom:'7px'}}>{product.paragraf}</Typography>
            </div>
            <Button onClick={()=>handleDelete(product._id)} variant="contained" color="error" style={{height:"30px"}}>Delete</Button>
          </div>
          <button onClick={()=>handleClick()} style={{ marginLeft:"25px",marginTop:"40px",width:"160px", height:"40px",border:"1px solid red",backgroundColor:"white",marginLeft:"80px"}} className={style.btn2}>More Details</button>
          </Card>
        </Grid>
        })}
      </Grid>
    </div>
    </>
  );
}
export default About;
