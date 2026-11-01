import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddToCart from '../Shop/AddToCart.jsx'

import { Star, StarHalf, Heart, Eye } from 'lucide-react'
import coat from '../../assets/Catalog/coat.png'
import cooler from '../../assets/Catalog/cooler.png'
import bag from '../../assets/Catalog/bag.png'
import bookself from '../../assets/Catalog/bookself.png'

const BestSelling = () => {
  const [heart1, setHeart1] = useState(false)
  const [heart2, setHeart2] = useState(false)
  const [heart3, setHeart3] = useState(false)
  const [heart4, setHeart4] = useState(false)

  const heartBtn = "size-[34px] rounded-full bg-white flex items-center justify-center cursor-pointer"

  return (
    <main className='w-full flex flex-col gap-10 items-center'>
      <div className="h-[100%] w-[calc(100%-300px)] flex flex-col gap-10 font-semibold text-5xl">
        <div className="month flex gap-4 w-fit items-center">
          <div className="rectangle bg-brand h-[54px] w-[27px] rounded-[7px]"></div>
          <h1 className="font-semibold text-[20px] text-brand">This Month</h1>
        </div>

        <div className="text h-[75px] w-full flex justify-between">
          <h1 className='font-medium text-5xl'>Best Selling Products</h1>

          <button className='w-[200px] h-[70px] bg-brand font-normal text-[20px] text-white rounded-[7px] justify-center items-center cursor-pointer'>View All</button>
        </div>

        <div className="cards w-full flex gap-[30px] justify-between items-start">

          <div className="card1 w-[270px] flex flex-col gap-4">
            <div className='group relative w-[270px] h-[250px] bg-soft rounded-[5px] flex items-center justify-center overflow-hidden'>
              <Link to="/product/5" className="absolute inset-0"></Link>
              <img src={coat} alt="The north coat" className="w-[172px] h-[172px] object-contain" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button onClick={() => setHeart1(!heart1)} className={heartBtn}>
                  <Heart size={18} className={heart1 ? 'fill-brand text-brand' : 'text-black'} />
                </button>
                <Link to="/product/5" className={heartBtn}>
                  <Eye size={18} />
                </Link>
              </div>
              <AddToCart id={5} />
            </div>
            <div className="txt flex flex-col gap-2">
              <Link to="/product/5" className="text-start text-[16px] font-medium">The north coat</Link>
              <div className="price flex gap-3">
                <p className='text-[16px] font-medium text-[#DB4444]'>$260</p>
                <p className='text-[16px] font-medium text-[rgba(0,0,0,0.45)] line-through'>$360</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="stars flex gap-[2px] text-center">
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                </div>
                <div>
                  <p className='text-[14px] font-medium text-center text-[rgba(0,0,0,0.45)]'>(65)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card2 w-[270px] flex flex-col gap-4">
            <div className='group relative w-[270px] h-[250px] bg-soft rounded-[5px] flex items-center justify-center overflow-hidden'>
              <Link to="/product/6" className="absolute inset-0"></Link>
              <img src={bag} alt="Gucci duffle bag" className="w-[172px] h-[172px] object-contain" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button onClick={() => setHeart2(!heart2)} className={heartBtn}>
                  <Heart size={18} className={heart2 ? 'fill-brand text-brand' : 'text-black'} />
                </button>
                <Link to="/product/6" className={heartBtn}>
                  <Eye size={18} />
                </Link>
              </div>
              <AddToCart id={6} />
            </div>
            <div className="txt flex flex-col gap-2">
              <Link to="/product/6" className="text-start text-[16px] font-medium">Gucci duffle bag</Link>
              <div className="price flex gap-3">
                <p className='text-[16px] font-medium text-[#DB4444]'>$960</p>
                <p className='text-[16px] font-medium text-[rgba(0,0,0,0.45)] line-through'>$1160</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="stars flex gap-[2px] text-center">
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <StarHalf size={16} fill="#FFAD33" color="#FFAD33" />
                </div>
                <div>
                  <p className='text-[14px] font-medium text-center text-[rgba(0,0,0,0.45)]'>(65)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card3 w-[270px] flex flex-col gap-4">
            <div className='group relative w-[270px] h-[250px] bg-soft rounded-[5px] flex items-center justify-center overflow-hidden'>
              <Link to="/product/7" className="absolute inset-0"></Link>
              <img src={cooler} alt="RGB liquid CPU Cooler" className="w-[172px] h-[172px] object-contain" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button onClick={() => setHeart3(!heart3)} className={heartBtn}>
                  <Heart size={18} className={heart3 ? 'fill-brand text-brand' : 'text-black'} />
                </button>
                <Link to="/product/7" className={heartBtn}>
                  <Eye size={18} />
                </Link>
              </div>
              <AddToCart id={7} />
            </div>
            <div className="txt flex flex-col gap-2">
              <Link to="/product/7" className="text-start text-[16px] font-medium">RGB liquid CPU Cooler</Link>
              <div className="price flex gap-3">
                <p className='text-[16px] font-medium text-[#DB4444]'>$160</p>
                <p className='text-[16px] font-medium text-[rgba(0,0,0,0.45)] line-through'>$170</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="stars flex gap-[2px] text-center">
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <StarHalf size={16} fill="#FFAD33" color="#FFAD33" />
                </div>
                <div>
                  <p className='text-[14px] font-medium text-center text-[rgba(0,0,0,0.45)]'>(65)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card4 w-[270px] flex flex-col gap-4">
            <div className='group relative w-[270px] h-[250px] bg-soft rounded-[5px] flex items-center justify-center overflow-hidden'>
              <Link to="/product/8" className="absolute inset-0"></Link>
              <img src={bookself} alt="Small Bookshelf" className="w-[172px] h-[172px] object-contain" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button onClick={() => setHeart4(!heart4)} className={heartBtn}>
                  <Heart size={18} className={heart4 ? 'fill-brand text-brand' : 'text-black'} />
                </button>
                <Link to="/product/8" className={heartBtn}>
                  <Eye size={18} />
                </Link>
              </div>
              <AddToCart id={8} />
            </div>
            <div className="txt flex flex-col gap-2">
              <Link to="/product/8" className="text-start text-[16px] font-medium">Small Bookshelf</Link>
              <div className="price flex gap-3">
                <p className='text-[16px] font-medium text-[#DB4444]'>$360</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="stars flex gap-[2px] text-center">
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                  <Star size={16} fill="#FFAD33" color="#FFAD33" />
                </div>
                <div>
                  <p className='text-[14px] font-medium text-center text-[rgba(0,0,0,0.45)]'>(65)</p>
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