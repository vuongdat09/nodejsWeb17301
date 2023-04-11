import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import iProduct from '../../interface/product';
import { getONeProducts, updateProducts } from '../../api/product';
import Item from 'antd/es/list/Item';
interface iprops{
    onUpdate: Function
}
const UpdateProductPage = ({onUpdate}:iprops) => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        getONeProducts(id).then(res=>setProduct(res.data.message))
    },[])


    const { register, handleSubmit, watch, formState: { errors } } = useForm<iProduct>({values:product});
    const handleUpdate = (data:any) =>{
        onUpdate(data)
        navigate("/admin/products")
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(handleUpdate)}>
                <input type="text" {...register("name")} />
                <input type="text" {...register("price")} />
                <input type="text" {...register("desc")} />
                <input type="text" {...register("image")} />
                <input type="text" {...register("categoryId")} />
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdateProductPage