import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../../Products/Products";
import './ToolDetails.css'
import {motion} from 'framer-motion'
export default function ToolDetails() {
    const { id } = useParams();
    const tool = products.find(product => product.id === parseInt(id));


    return <>
    <div className="container">
        <div className="row g-5 p-3 mt-5">
        <motion.div 
                                    initial={{x:-200}}
                                    transition={{
                                        duration:0.3,
                                        type:"tween",
        
        
                                    }}
                                    whileInView={{
                                        x:0
        
                                    }}
        
        className="col-12 col-lg-6 col-md-6  ">
            <div className="imgTool">
                <img src={tool.img} className='w-100' alt="imgTool" />
            </div>
        </motion.div>
        <motion.div
                                    initial={{x:90}}
                                    transition={{
                                        duration:1,
                                        type:"tween",
        
        
                                    }}
                                    whileInView={{
                                        x:0
        
                                    }}
        
        className="col-12 col-lg-6 col-md-6 ">
            <div className="toolDetails">
            <h1>{tool.title}</h1>
            <p>{tool.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, minus distinctio eaque sint reiciendis unde, quae quidem delectus vel impedit recusandae, magni incidunt eos mollitia perspiciatis consectetur voluptas aperiam obcaecati?</p>
            <span>{tool.price} EGP</span>
            </div>
        </motion.div>
        </div>
    </div>
    </> 
}
