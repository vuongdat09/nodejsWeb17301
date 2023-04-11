import instance from "./instace";
import iProduct from "../interface/product";

export const getAllProducts = () => {
    return instance.get("/products")
}

export const getONeProducts = (id: number | string) => {
    return instance.get("/products/" + id)
}
export const addProducts = (product: iProduct) => {
    return instance.post("/products", product , {
        headers:{
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("token")||"{}").accessToken
        }
    })
}

export const updateProducts = (product: iProduct) => {
    return instance.put("/products/" + product._id, product, {
        headers :{
            Authorization :"Bearer " + JSON.parse(localStorage.getItem("token")||"{}").accessToken
        }
    })
}
export const deleteProduct = (id: number | string) => {
    return instance.delete("/products/" + id, {
        headers: {
            Authorization: 'Bearer ' +  JSON.parse(localStorage.getItem("token")||"{}").accessToken

             //the token is a variable which holds the token
        }
    })
}

