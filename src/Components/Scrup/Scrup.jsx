import React from 'react';
import {scru} from "../objects/scrup"
import { Link } from 'react-router-dom';
import {motion}  from "framer-motion"


export default function Scrup() {
    return <>
    <div className="cards pt-5">
        <div className="container">
            <h1 className="text-center pt-2 pb-2 mb-4 text-capitalize">scrup</h1>
            <div className="row g-2">

                    {
                        scru.map((md,idx)=> 
                        <div key={idx} className="col-12 col-lg-3 col-md-4">


                            <Link to={`/scrupdetails/${md.id}`}>
                                <motion.div
                                                            initial={{y:200}}
                                                            transition={{
                                                                duration:0.4,
                                                                type:"tween",
                                
                                
                                                            }}
                                                            whileInView={{
                                                                y:0
                                
                                                            }}
                                
                                className="card" >
                                        <img src={md.img} className="card-img-top border" alt="..."/>
                                        <div class="card-body">
                                            <h5 className="card-title text-capitalize">{md.title}</h5>
                                            <p className="card-text">{md.description}</p>
                                            <span className=" d-block text-capitalize">price: {md.price}</span><br/>
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
