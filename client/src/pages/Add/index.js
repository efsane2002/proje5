import React from "react";
import { useFormik } from 'formik';
import { Button, TextField } from "@mui/material";
import { ProductSchema } from "../../validation/ProductValidation";
import Swal from "sweetalert2";
import { postProducts } from "../../api/request";
import { useNavigate } from "react-router-dom";
import { useNewContext } from "../../context/NewContext";
const Add = () => {
  const navigate = useNavigate();
  const[products,setProducts] = useNewContext();

  function handleSubmit(values, actions) {
    postProducts(values)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/');
    setProducts([...products, values]);
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      paragraf: "",
      icon: "",
    },
    validationSchema: ProductSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          border: "1px solid #eee",
          width: "50%",
          height: "400px",
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          type="text"
          id="outlined-basic"
          value={formik.values.name}
          label="Name"
          variant="outlined"
          error={formik.errors.name && formik.touched.name ? true : false}
        />
        {formik.errors.name && formik.touched.name && <p style={{color:'red'}}>{formik.errors.name}</p>}
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="paragraf"
          type="text"
          value={formik.values.paragraf}
          error={formik.errors.paragraf && formik.touched.paragraf ? true : false}
          id="outlined-basic"
          label="paragraf"
          variant="outlined"
        />
         {formik.errors.paragraf && formik.touched.paragraf && <p style={{color:'red'}}>{formik.errors.paragraf}</p>}
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.icon}
          error={formik.errors.icon && formik.touched.icon ? true : false}
          name="icon"
          type="text"
          id="outlined-basic"
          label="icon"
          variant="outlined"
        />
         {formik.errors.icon && formik.touched.icon && <p style={{color:'red'}}>{formik.errors.icon}</p>}

        <Button
          style={{ display: "block", margin: "10px auto" }}
          type="submit"
          variant="contained"
          color="warning"
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default Add;