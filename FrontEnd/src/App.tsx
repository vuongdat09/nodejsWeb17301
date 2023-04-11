import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootMain from './components/MainLayout/RootMain'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import RootLayout from './components/AdminLayout/RootLayout'
import ProductManager from './pages/Admin/ProductManager'
import iProduct from './interface/product'
import { getAllProducts, deleteProduct, addProducts, updateProducts } from './api/product'
import SignIn from './pages/User/SignIn'
import Signup from './pages/User/Signup'
import ProductAdd from './pages/Admin/ProductAdd'
import UpdateProductPage from './pages/Admin/ProductUpdate'
import { useNavigate } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'


const App = () => {
  const navigate = useNavigate()
  const [product, setproduct] = useState<iProduct[]>([])

  useEffect(() => {
    getAllProducts().then(({ data }) => setproduct(data.data))
  }, [])

  const onHandleRemove = (id: number|string) => {
    deleteProduct(id).then(() => setproduct(product.filter((item) => item._id !== id)))
  }

  const onHandleAdd = (product:iProduct)=>{
    addProducts(product).then(({data})=>setproduct([...product, data.data]))
  }

  const onHandlesubmint = (products:iProduct) =>{
    updateProducts(products).then((res)=>setproduct(product.map((item) => {
      console.log(res.data);
      if(item._id === products._id){
        return res.data
      }
    })))
  }
  return (
    <Routes>
      <Route path='/' element={<RootMain />}>
        <Route index element={<HomePage product={product} />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<SignIn />} />
        <Route path='/productDetail/:id' element={<ProductDetail />}/>
      </Route>
      <Route path='/admin' element={<RootLayout />}>
        <Route path='/admin/products' element={<ProductManager product={product} onRemove={onHandleRemove} />} />
        <Route path='/admin/products/add' element={<ProductAdd onAdd={onHandleAdd}/>}/>
        <Route path='/admin/products/:id/update' element={<UpdateProductPage onUpdate={onHandlesubmint}/>}/>
      </Route>
    </Routes>
  )
}
export default App