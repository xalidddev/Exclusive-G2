import img from '../../assets/Xalid/speaker.png'

const MusicBanner = () => {
  return <>


    <section className='flex w-full items-center justify-center'>


      <section className='w-[90%] h-[350px] bg-black flex justify-evenly items-center'>

        <section className='flex flex-col items-start gap-[30px]'>
          <p className='text-[#00FF66] font-[500]'>Categories</p>
          <h1 className='text-white text-[30px] w-[70%] font-[600]'>Enhance Your Music Experience</h1>

          <section className='flex gap-[20px]'>

            <section className='bg-white w-[50px] h-[50px] rounded-[50%] flex justify-center flex-col items-center'>
              <h5 className='text-[13px] font-[600]'>23</h5>
              <p className='text-[10px] font-[500]'>Hours</p>
            </section>

            <section className='bg-white w-[50px] h-[50px] rounded-[50%] flex justify-center flex-col items-center'>
              <h5 className='text-[13px] font-[600]'>05</h5>
              <p className='text-[10px] font-[500]'>Days</p>
            </section>

            <section className='bg-white w-[50px] h-[50px] rounded-[50%] flex justify-center flex-col items-center'>
              <h5 className='text-[13px] font-[600]'>59</h5>
              <p className='text-[10px] font-[500]'>Minutes</p>
            </section>


            <section className='bg-white w-[50px] h-[50px] rounded-[50%] flex justify-center flex-col items-center'>
              <h5 className='text-[13px] font-[600]'>35</h5>
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
