import React, { useState } from 'react'

import { Star, StarHalf, Heart, Eye } from 'lucide-react'
import coat from '../../assets/Minaye/coat.png'
import cooler from '../../assets/Minaye/cooler.png'
import bag from '../../assets/Minaye/bag.png'
import bookself from '../../assets/Minaye/bookself.png'

const BestSelling = () => {
  const [heart1, setHeart1] = useState(false)
  const [heart2, setHeart2] = useState(false)
  const [heart3, setHeart3] = useState(false)
  const [heart4, setHeart4] = useState(false)

  const heartBtn = "size-[46px] rounded-full bg-white flex items-center justify-center cursor-pointer"

  return (
    <main className='w-full min-h-screen flex flex-col justify-evenly gap-10 items-center'>
      <div className="container h-[100%] w-[87%] flex flex-col gap-10 font-semibold text-5xl">
        <div className="month flex justify-between w-[10%] items-center">
          <div className="rectangle bg-brand h-[54px] w-[27px] rounded-[7px]"></div>
          <h1 className="font-semibold text-[20px] text-brand">This Month</h1>
        </div>

        <div className="text h-[75px] w-full flex justify-between">
          <h1 className='font-medium text-5xl'>Best Selling Products</h1>

          <button className='w-[200px] h-[70px] bg-brand font-normal text-[20px] text-white rounded-[7px] justify-center items-center cursor-pointer'>View All</button>
        </div>

        <div className="cards h-[1000px] w-full flex justify-between items-center">

          <div className="card1 h-[600px] flex flex-col gap-5">
            <div className='relative w-[345px] h-[330px] bg-soft rounded-[5px] flex items-center justify-center'>
              <img src={coat} alt="The north coat" className="w-[250px] h-[250px] object-contain" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button onClick={() => setHeart1(!heart1)} className={heartBtn}>
                  <Heart size={22} className={heart1 ? 'fill-brand text-brand' : 'text-black'} />
                </button>
                <button className={heartBtn}>
                  <Eye size={22} />
                </button>
              </div>
            </div>
            <div className="txt h-[130px]">
              <p className="text-start text-2xl font-medium">The north coat</p>
              <div className="price flex gap-7">
                <p className='text-xl font-extralight text-red-500'>$260</p>
                <p className='text-xl font-extralight text-[rgba(0,0,0,0.45)] line-through'>$360</p>
              </div>
              <div className="flex gap-5">
                <div className="stars flex gap-1 text-center">
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                </div>
                <div>
                  <p className='text-[20px] font-extralight text-center text-[rgba(0,0,0,0.45)]'>(65)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card2 h-[600px] flex flex-col gap-5">
            <div className='relative w-[345px] h-[330px] bg-soft rounded-[5px] flex items-center justify-center'>
              <img src={bag} alt="Gucci duffle bag" className="w-[250px] h-[250px] object-contain" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button onClick={() => setHeart2(!heart2)} className={heartBtn}>
                  <Heart size={22} className={heart2 ? 'fill-brand text-brand' : 'text-black'} />
                </button>
                <button className={heartBtn}>
                  <Eye size={22} />
                </button>
              </div>
            </div>
            <div className="txt h-[130px]">
              <p className="text-start text-2xl font-medium">Gucci duffle bag</p>
              <div className="price flex gap-7">
                <p className='text-xl font-extralight text-red-500'>$960</p>
                <p className='text-xl font-extralight text-[rgba(0,0,0,0.45)] line-through'>$1160</p>
              </div>
              <div className="flex gap-5">
                <div className="stars flex gap-1 text-center">
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <StarHalf size={22} fill="#FFAD33" color="#FFAD33" />
                </div>
                <div>
                  <p className='text-[20px] font-extralight text-center text-[rgba(0,0,0,0.45)]'>(65)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card3 h-[600px] flex flex-col gap-5">
            <div className='relative w-[345px] h-[330px] bg-soft rounded-[5px] flex items-center justify-center'>
              <img src={cooler} alt="RGB liquid CPU Cooler" className="w-[250px] h-[250px] object-contain" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button onClick={() => setHeart3(!heart3)} className={heartBtn}>
                  <Heart size={22} className={heart3 ? 'fill-brand text-brand' : 'text-black'} />
                </button>
                <button className={heartBtn}>
                  <Eye size={22} />
                </button>
              </div>
            </div>
            <div className="txt h-[130px]">
              <p className="text-start text-2xl font-medium">RGB liquid CPU Cooler</p>
              <div className="price flex gap-7">
                <p className='text-xl font-extralight text-red-500'>$160</p>
                <p className='text-xl font-extralight text-[rgba(0,0,0,0.45)] line-through'>$170</p>
              </div>
              <div className="flex gap-5">
                <div className="stars flex gap-1 text-center">
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <StarHalf size={22} fill="#FFAD33" color="#FFAD33" />
                </div>
                <div>
                  <p className='text-[20px] font-extralight text-center text-[rgba(0,0,0,0.45)]'>(65)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card4 h-[600px] flex flex-col gap-5">
            <div className='relative w-[345px] h-[330px] bg-soft rounded-[5px] flex items-center justify-center'>
              <img src={bookself} alt="Small Bookshelf" className="w-[250px] h-[250px] object-contain" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button onClick={() => setHeart4(!heart4)} className={heartBtn}>
                  <Heart size={22} className={heart4 ? 'fill-brand text-brand' : 'text-black'} />
                </button>
                <button className={heartBtn}>
                  <Eye size={22} />
                </button>
              </div>
            </div>
            <div className="txt h-[130px]">
              <p className="text-start text-2xl font-medium">Small Bookshelf</p>
              <div className="price flex gap-7">
                <p className='text-xl font-extralight text-red-500'>$360</p>
              </div>
              <div className="flex gap-5">
                <div className="stars flex gap-1 text-center">
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                  <Star size={22} fill="#FFAD33" color="#FFAD33" />
                </div>
                <div>
                  <p className='text-[20px] font-extralight text-center text-[rgba(0,0,0,0.45)]'>(65)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default BestSelling