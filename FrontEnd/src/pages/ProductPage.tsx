import React, { useEffect, useState } from 'react'
import iProduct from '../interface/product'
import { getAllProducts } from '../api/product'
import "../index.css"
import { Link } from 'react-router-dom'

const ProductPage = () => {
  const [product, setproduct] = useState<iProduct[]>([])
  useEffect(() => {
    (async () => {
      await getAllProducts().then(({ data }) => setproduct(data.data))
    })()
  }, [])
  return (
    <div className=" text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
      <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl">
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5">
              <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase inline-block">
                <p className="inline">
                  <svg className="w-3.5 h-3.5 mr-1" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </p>
                <p className="inline text-xs font-medium">New</p>
              </div>
              <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Write anything. Be creative.</a>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <p className="text-sm font-medium inline">author:</p>
                <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Jack Sparrow</a>
                <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, April 2021 ·</p>
                <p className="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="block">
              <img
                src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16 ">
          {product.map(item => {
            return (
              <div
                className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
                key={item._id}
              >
                <Link to={`/productDetail/${item._id}`} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-">
                  <img
                    src={item.image}
                    className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
                  />
                </Link>

                <p
                  className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block"
                >
                  Entertainment
                </p>
                <a className="text-lg font-bold sm:text-xl md:text-2xl"
                >Improving your day to the MAX</a>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam,
                </p>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <a
                    className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline"
                  >Jack Sparrow</a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                    · 23rd, March 2021 ·
                  </p>
                  <p
                    className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1"
                  >
                    1hr 20min. read
                  </p>
                </div>
              </div>

            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductPage