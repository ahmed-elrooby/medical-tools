import React from 'react'
import { useParams } from 'react-router-dom'
import { stesp } from '../../objects/Stethoscope'
import "./Stedetails.css"
import {motion} from 'framer-motion'

export default function SteDetails() {
    const {id} = useParams()
    let steTool = stesp.find(ste => ste.id === parseInt(id))
    // const tool = products.find(product => product.id === parseInt(id));

    return<>
    <div className="container">
        <div className="row p-4 mt-5 g-3">
        <motion.div 
                                    initial={{x:-200}}
                                    transition={{
                                        duration:0.3,
                                        type:"tween",
        
        
                                    }}
                                    whileInView={{
                                        x:0
        
                                    }}
        
        
        
        
        className="col-12 col-lg-6 col-md-6">
            <div className="img">
                <img src={steTool.img} className='w-100' alt="" />
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
        
        
        
        className="col-12 col-lg-6 col-md-6">
            <div className="data align-items-start">
                <h1>{steTool.title}</h1>
            <p>{steTool.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod dolores aut cumque molestias voluptates distinctio ipsa. Repellat at iure, dolores accusamus quaerat amet eum voluptatem
            quisquam rerum nobis optio!</p>
            <span>{steTool.price}</span>
            </div>
            
        </motion.div>
        </div>
    </div>
    
    </>
}
