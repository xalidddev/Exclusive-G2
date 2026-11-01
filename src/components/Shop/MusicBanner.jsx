import { useEffect, useState } from 'react'
import img from '../../assets/Shop/speaker.png'

const MusicBanner = () => {
  const [time, setTime] = useState(5 * 86400 + 23 * 3600 + 59 * 60 + 35)

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000)
    return () => clearInterval(timer)
  }, [])

  const two = (n) => String(n).padStart(2, '0')
  const days = two(Math.floor(time / 86400))
  const hours = two(Math.floor((time % 86400) / 3600))
  const minutes = two(Math.floor((time % 3600) / 60))
  const seconds = two(time % 60)

  return <>


    <section className='flex w-full items-center justify-center'>


      <section className='w-[calc(100%-300px)] h-[350px] bg-black flex justify-evenly items-center'>

        <section className='flex flex-col items-start gap-[30px]'>
          <p className='text-[#00FF66] font-[500]'>Categories</p>
          <h1 className='text-white text-[30px] w-[70%] font-[600]'>Enhance Your Music Experience</h1>

          <section className='flex gap-[20px]'>

            <section className='bg-white w-[50px] h-[50px] rounded-[50%] flex justify-center flex-col items-center'>
              <h5 className='text-[13px] font-[600]'>{hours}</h5>
              <p className='text-[10px] font-[500]'>Hours</p>
            </section>

            <section className='bg-white w-[50px] h-[50px] rounded-[50%] flex justify-center flex-col items-center'>
              <h5 className='text-[13px] font-[600]'>{days}</h5>
              <p className='text-[10px] font-[500]'>Days</p>
            </section>

            <section className='bg-white w-[50px] h-[50px] rounded-[50%] flex justify-center flex-col items-center'>
              <h5 className='text-[13px] font-[600]'>{minutes}</h5>
              <p className='text-[10px] font-[500]'>Minutes</p>
            </section>


            <section className='bg-white w-[50px] h-[50px] rounded-[50%] flex justify-center flex-col items-center'>
              <h5 className='text-[13px] font-[600]'>{seconds}</h5>
              <p className='text-[10px] font-[500]'>Seconds</p>
            </section>



          </section>


          <button className=' border-0 bg-[#00FF66] font-[400] text-white w-[160px] h-[45px] rounded-[5px] hover:opacity-90'>Buy Now!</button>
        </section>

        <img className='w-[40%] [filter:drop-shadow(-16px_17px_67px_rgba(255,255,255,0.45))]' src={img}></img>

      </section>

    </section>

  </>
}

export default MusicBanner
