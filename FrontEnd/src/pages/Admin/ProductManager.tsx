import React from 'react'
import iProduct from '../../interface/product'
import { Link } from 'react-router-dom'


type Props = {
    product: iProduct[]
    onRemove: Function
}

const ProductManager = ({ product, onRemove }: Props) => {
    return (
        <div className="container mt-4">
            <h2>Employee Records</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product && product.map((item) => {
                        return <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.desc}</td>
                            <td>{item.price}</td>
                            <td> <img src={item.image} alt="" /></td>
                            <td>
                                <button className="btn btn-primary" ><Link to={`/admin/products/${item._id}/update`}>Edit</Link></button>
                                <button className="btn btn-danger" onClick={() => onRemove(item._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager