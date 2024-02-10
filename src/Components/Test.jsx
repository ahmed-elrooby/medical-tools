import React from 'react'
import {motion} from "framer-motion"

export default function Test() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <motion.button
        initial={{x:-100}}
        animate={{x:0}}
        transition={{
            duration:2,
            type:"spring",
            stiffness:500,
            mass:0.5,
            damping:3,

        }}
        whileDrag={{
            scale:0.3
        }}
        drag="x"
        dragConstraints={{left:0,right:150}}
        whileHover={{
            scale:1.1,
            textShadow: "1px 1px 1px rgba(255 255 255),"
        }}
        whileTap={{
            scale:0.8
        }}
        className='btn btn-outline-primary'>click
        </motion.button>
        </div>
    )
    }
