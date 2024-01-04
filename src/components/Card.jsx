import React from 'react'
import Button from '@mui/material/Button';


function Card( { h1 , p , span , btn } ) {
  return (
    <div className='text-center sm:text-left'>
        <h1 className='font-black text-[20px] sm:text-[40px] sm:w-[70%] sm:m-auto sm:ml-[370px] dark:text-orange-500 text-white mb-[5px] mt-[5px]'>
            {h1}
        </h1>
        <p className='font-medium text-sky-600 sm:text-[20px] sm:font-mono sm:w-[50%] sm:mt-[10px] sm:mb-[20px] sm:m-auto dark:text-white mb-[10px]'>
            {p}
        </p>
        <div className='flex justify-evenly pb-[15px] sm:m-auto'>
        <span className='font-mono text-yellow-400 dark:text-white sm:text-[20px]'>
            {span}
        </span>
      <Button variant="contained" sx={{background:"red"}} className='dark:bg-orange-500'>{btn}</Button>
        </div>
    </div>
  )
}

export default Card

function Card2 ( { img1 , img2 , img3 , h1 , h2 ,h3 } ){
    return (
        <div className='flex justify-evenly pt-[40px] items-center sm:pb-[20px]'>
            <div className='w-[33%] text-center'>
            <img src={img1} alt="error" className='m-auto' />
            <h1> {h1} </h1>
            </div>
            <div className='w-[33%] text-center'>
            <img src={img2} alt="error" className='m-auto'/>
            <h1> {h2} </h1>
            </div>
            <div className='w-[33%] text-center'>
            <img src={img3} alt="error" className='m-auto'/>
            <h1> {h3} </h1>
            </div>
        </div>
    )
}
export { Card2 }