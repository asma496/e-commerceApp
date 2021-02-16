import React, { useContext , useState } from 'react'
import { ProductsContext } from '../global/ProductsContext'
import { CartContext } from '../global/CartContext'
import { motion } from "framer-motion"
import '../css/Home.css'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'




export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })


    return (
        <>
            {products.length !== 0 && <h1>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <motion.img src={product.ProductImg} alt="not found"
                            
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:5}}
                            />





                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                            </div>
                    <button className='addcart-btn'  onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                </div>
            ))}
        </div>
    </>    )
}