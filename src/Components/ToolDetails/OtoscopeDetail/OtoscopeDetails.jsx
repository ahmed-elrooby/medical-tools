import React from 'react'
import { useParams } from 'react-router-dom';
import { Otosco } from '../../objects/otos';
import "./OtoscopeDetails.css"
import {motion} from 'framer-motion'
export default function OtoscopeDetails() {
    let {id} = useParams();
    let ototool = Otosco.find((ste)=> ste.id === parseInt(id))
    return<>
    <div className="container">
        <div className="row p-4 mt-5 g-4 ">
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
                    <img src={ototool.img} className='w-100' alt="otoscope" />
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
                        <h1>{ototool.title}</h1>
                        <p>{ototool.description}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, officiis doloribus vel atque et sed voluptatem deleniti. Laborum et delectus, repellendus rem, quaerat, facere molestiae quo consectetur sequi quas illum.</p>
                        <span>{ototool.price}</span>
                    </div>
                </motion.div>
                    </div>
                        </div>
    </>
}
