import { BASE_URL } from "./baseURL";
import axios from "axios";

//get all
export const getAllProducts = async(name)=>{
    let Products;
    let URL;
    if (!name) {
        URL = BASE_URL+'/product';
    }
    else{
        URL = BASE_URL+`/product/?name=${name}`
    }
    await axios.get(URL)
    .then(res =>{
        Products = res.data;
    })

    return Products
}
//get by id
export const getProductssByID = async(id)=>{
    let Product;
    await axios.get(`${BASE_URL}/product/${id}`)
    .then(res =>{
        Product = res.data;
    })

    return Product
}
//delete
export const deleteProductsByID = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/product/${id}`).then(res=>{
        message = res.data
    })
    return message
}
//post
export const postProducts = (payload)=>{
    axios.post(`${BASE_URL}/product`,payload)
}
//edit
export const editProductsByID = (id,payload)=>{
    axios.put(`${BASE_URL}/product/${id}`,payload)
}