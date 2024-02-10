import React from 'react'
import {products} from '../Products/Products'
import "./Cards.css";
import { Link } from 'react-router-dom';
import{motion}from "framer-motion"

export default function Cards() 
{
    return<>
    <div className="cards pt-5">
        <div className="container">
            <motion.h1
            
            className="text-center pt-2 pb-2 mb-4 text-capitalize">our products</motion.h1>
            <div className="row g-2">
                    {
                        products.map((product,idx)=> 
                        <div key={idx} className="col-12 col-lg-3 col-md-4">
                            <Link to={`/tooldetails/${product.id}`}>
                            <motion.div 
                            initial={{y:200}}
                            transition={{
                                duration:0.6,
                                type:"tween"


                            }}
                            whileInView={{
                                y:0

                            }}
                            className="card" >
                                        <img src={product.img} className="card-img-top border" alt="..."/>
                                        <div class="card-body">
                                            <h5 className="card-title text-capitalize">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <span className=" d-block text-capitalize">price: {product.price}</span><br/>
                                            <a href="#" className="btn btn-primary">learn more</a>
                                        </div>
                                        </motion.div>
                            </Link>
                                </div>
                        )
                    }
                </div>
                </div>
                
            </div>
    </>
}
