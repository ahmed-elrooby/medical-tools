import React from 'react'
import { useParams } from 'react-router-dom'
import { thermometer } from '../../objects/therm';
import "./Therm.css"
import {motion} from 'framer-motion'

export default function ThermDetails() {
    let {id}=useParams();
    let termdet = thermometer.find((ste)=> ste.id === parseInt(id))
    return <>
    <div className="container">
        <div className="row p-3 mt-5 g-3">
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
                <img src={termdet.img} className='w-100' alt="" />
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
                <h1>{termdet.title}</h1>
                <p>{termdet.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates suscipit consequatur ex numquam ipsa, fuga, quia dicta repudiandae esse libero ea aut quidem. Assumenda aut natus, eius blanditiis saepe fugiat!</p>
                <span>{termdet.price}</span>
            </div>
        </motion.div>
        </div>
    </div>
    
    
    </>
}
