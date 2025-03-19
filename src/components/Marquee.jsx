import React from 'react'
import { motion } from 'framer-motion'

export default function Marquee({slogans}) {
  return (
    <div className='mx-auto overflow-hidden'>
      <div className='flex bg-red-600'>
        <motion.div 
        initial ={{x:0}}
        animate={{x: "-100%"}}
        transition={{duration:30, repeat: Infinity, ease: "linear"}}
        className='flex flex-shrink-0'>
            {
                slogans.map((slogan, index) => {
                    return <h3 className='text-2xl font-heading text-white py-4 pr-20' key={index}>{slogan}</h3>
                })
            }
        </motion.div>
        <motion.div 
        initial ={{x:0}}
        animate={{x: "-100%"}}
        transition={{duration:30, repeat: Infinity, ease: "linear"}}
        className='flex flex-shrink-0'>
            {
                slogans.map((slogan, index) => {
                    return <h3 className='text-2xl font-heading text-white py-4 pr-20' key={index}>{slogan}</h3>
                })
            }
        </motion.div>
      </div>
    </div>
  )
}
