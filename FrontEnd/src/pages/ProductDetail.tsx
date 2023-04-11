import React, { useEffect, useState } from 'react'
import { getONeProducts } from '../api/product'
import { useParams } from 'react-router-dom'
import iProduct from '../interface/product'


const ProductDetail = () => {
    const [product,setProduct] = useState<iProduct>({})
    const {id} = useParams()
    useEffect(()=>{
        getONeProducts(id).then((res)=> setProduct(res.data.message))
    })
    return (
        <div>
            <div className="container">
                <h1>{product.name}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Description</h2>
                        <p>{product.desc}</p>
                        <h2>Details</h2>
                        <ul>
                            <li>Material: Cotton</li>
                            <li>Size: Medium</li>
                            <li>Color: Blue</li>
                        </ul>
                        <h2>Price</h2>
                        <p>{product.price}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail