import React from 'react'
import { useParams } from 'react-router-dom'
import { scru } from '../../objects/scrup';
import {motion} from 'framer-motion'

export default function ScrupDetails() {

    let {id} = useParams();
    let scr = scru.find((md)=> md.id === parseInt(id))
    
    return <>
    <div className="container">
        <div className="row p-4 mt-5 g-4">
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
                    <img src={scr.img} className='w-100' alt="" />
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
                    <div className="data">
                    <h1>{scr.title}</h1>
                    <p>{scr.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda modi quod facilis velit. Saepe molestiae animi hic. Consectetur, quis. Ratione culpa provident laborum iusto facilis nesciunt, possimus enim sint rem.</p>
                    <span>{scr.price}</span>
                </div>
                </motion.div>
                
            </div>
        </div>
    </> 
}
