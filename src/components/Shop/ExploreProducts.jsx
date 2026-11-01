import { products } from "./products.js"
import ProductCard from "./ProductCard.jsx"

const list = products.filter((item) => item.id > 8)

const ExploreProducts = () => {
  return (
    <section className="min-h-[800px] w-[100%] px-[150px]">

      <section className="flex items-center gap-5">
        <section className="h-[30px] w-[17px] rounded-[5px] bg-[red]"></section>
        <p>Our Products</p>
      </section>

      <section className="flex h-[100px] w-[100%] items-center justify-between">
        <h1 className="text-[30px] font-[500]">Explore Our Products</h1>

        <div className="flex gap-x-[10px]">
          <button className="flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#F5F5F5] hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300 hover:scale-[1.05]">
            <i className="fa-light fa-arrow-left"></i>
          </button>
          <button className="flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#F5F5F5] hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300 hover:scale-[1.05]">
            <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
      </section>

      <section className="card-all flex w-full flex-wrap justify-between gap-[30px]">

        {list.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}

      </section>

      <section className='w-full h-[80px] flex justify-center items-center'>
        <button className='font-[400] bg-[#DB4444] text-white w-[170px] h-[40px] rounded-[5px]'>View All Products</button>
      </section>

    </section>
  )
}

export default ExploreProducts
