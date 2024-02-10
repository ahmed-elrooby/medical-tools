import React from 'react'
import Lottie from 'lottie-react';
import animation from "../../Images/Animation - 1707301363943.json"
import sentd from "../../Images/Animation - 1707306170780.json"
import "./Contact.css"
import {motion} from 'framer-motion'

import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {
    const [state, handleSubmit] = useForm("xbjngqrb");

    return<>
    <div className="contact mt-4 mb-4">
        <motion.div 
                                    initial={{scale:0}}
                                    transition={{
                                        duration:1,
                                        type:"tween",
        
        
                                    }}
                                    whileInView={{
                                        scale:1
        
                                    }}
        
        
        className="container">
            <div className="row">
                <div className="col-12 col-lg-6 col-md-6">
                <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="email" className="form-label text-capitalize">Email address</label>
                            <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" required/>
                            <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                        </div>
                        <div class="mb-3">
                            <label for="message" className="form-label text-capitalize">write your message</label>
                            <textarea  id="message"name="message" className="form-control" placeholder="Leave your message here" style={{height: "300px"}}></textarea>
                            <ValidationError 
                                            prefix="Message" 
                                            field="message"
                                            errors={state.errors}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">{state.succeeded?"submited":"submit"}</button>
                        {state.succeeded && (<div className=' test bg-warrning d-flex g-1 align-items-center text-capitalize text-center '>your message has been send <Lottie   loop={false} animationData={sentd}style={{width:"50px"}}/></div>)}

                        </form>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                    <Lottie animationData={animation}
                    style={{height:"550px"}}
                    />
                </div>


                
            </div>
        </motion.div>
    </div>
    </>
}








