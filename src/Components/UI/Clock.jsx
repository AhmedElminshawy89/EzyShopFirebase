import React, { useEffect, useState } from 'react'

export default function () {

    const [Days,setDays]=useState()
    const [Hours,setHours]=useState()
    const [Minutes,setMinutes]=useState()
    const [Seconds,setSeconds]=useState()

    const countDown =()=>{
        const destination = new Date('oct 12 2023').getTime();

        let interval = setInterval(() => {

            const now = new Date().getTime();
            const difference = destination - now;
            const Days = Math.floor(difference / (1000 *60*60*24));
            const Hours = Math.floor(difference % (1000 *60*60*24) / (1000*60*60));
            const Minutes = Math.floor(difference % (1000 *60*60) / (1000*60));
            const Seconds = Math.floor(difference % (1000 *60) / (1000));

            if(destination<0) clearInterval(interval.current)
            else{
                setDays(Days)
                setHours(Hours)
                setMinutes(Minutes)
                setSeconds(Seconds)
            }
            
        });
    }
    useEffect(()=>{
        countDown()
    },[])

  return (
    <div className="clock-wrapper d-flex aligm-items-center flex-wrap-wrap gap-3">
        <div className="clock-data d-flex aligm-items-center gap-3">
            <div className="div text-center">
                <h1 className='text-white fs-3 mb-2'>{Days}</h1>
                <h5 className='text-white fs-6 '>Days</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className="clock-data d-flex aligm-items-center gap-3">
            <div className="div text-center">
                <h1 className='text-white fs-3 mb-2'>{Hours}</h1>
                <h5 className='text-white fs-6 '>Hours</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className="clock-data d-flex aligm-items-center gap-3">
            <div className="div text-center">
                <h1 className='text-white fs-3 mb-2'>{Minutes}</h1>
                <h5 className='text-white fs-6 '>Minutes</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className="clock-data d-flex aligm-items-center gap-3">
            <div className="div text-center">
                <h1 className='text-white fs-3 mb-2'>{Seconds}</h1>
                <h5 className='text-white fs-6 '>Seconds</h5>
            </div>
        </div>
    </div>
  )
}
