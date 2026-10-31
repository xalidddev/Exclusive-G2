import dog from '../../assets/Xalid/dog.png'
import camera from '../../assets/Xalid/camera.png'
import cream from '../../assets/Xalid/cream.png'
import joystick from '../../assets/Xalid/joystick.png'
import ket from '../../assets/Xalid/ket.png'
import laptop from '../../assets/Xalid/laptop.png'
import mont from '../../assets/Xalid/mont.png'
import car from '../../assets/Xalid/car.png'

const card = [
  { img: dog, name: "Breed Dry Dog Food", price: 100, reviews: 35 },
  { img: camera, name: "CANON EOS DSLR Camera", price: 360, reviews: 95 },
  { img: cream, name: "Curology Product Set", price: 500, reviews: 145 },
  { img: joystick, name: "Curology Product Set", price: 660, reviews: 55 },
  { img: ket, name: "Jr. Zoom Soccer Cleats", price: 1165, reviews: 35 },
  { img: laptop, name: "ASUS FHD Gaming Laptop", price: 700, reviews: 325 },
  { img: mont, name: "Quilted Satin Jacket", price: 660, reviews: 55 },
  { img: car, name: "Kids Electric Car", price: 960, reviews: 65 },
]

const ExploreProducts = () => {
  return (
    <section className="min-h-[800px] w-[100%] px-14">

      <section className="flex items-center gap-5">
        <section className="h-[30px] w-[17px] rounded-[5px] bg-[red]"></section>
        <p>Our Products</p>
      </section>

      <section className="flex h-[100px] w-[100%] items-center justify-between">
        <h1 className="text-[30px] font-[500]">Explore Our Products</h1>

        <section>
          <i className="fa-thin fa-arrow-circle-left text-[30px]"></i>
          <i className="fa-thin fa-arrow-circle-right text-[30px]"></i>
        </section>
      </section>

      <section className="card-all flex w-full flex-wrap justify-center gap-[30px]">

        {card.map((item, index) => (
          <section key={index} className="all">

            <section className="card relative h-[230px] w-[210px] bg-[#F5F5F5]">

              <section className="absolute z-0 flex w-full flex-col items-end gap-[10px] pr-1 pt-2">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-eye"></i>
              </section>

              <section className="absolute z-1 flex h-full w-full items-center justify-center">
                <img src={item.img} className="w-[110px]" alt={item.name} />
              </section>

            </section>

            <section className="h-[auto] w-[210px]">
              <h1 className="font-[400]">{item.name}</h1>

              <section className="flex items-center justify-between">
                <p className="font-[500] text-[#DB4444]">${item.price}</p>

                <section className="flex">
                  <i className="fa-solid fa-star text-[#ffaf37]"></i>
                  <i className="fa-solid fa-star text-[#ffaf37]"></i>
                  <i className="fa-solid fa-star text-[#ffaf37]"></i>
                  <i className="fa-solid fa-star text-[#ffaf37]"></i>
                  <i className="fa-solid fa-star text-[#ffaf37]"></i>
                </section>

                <p>({item.reviews})</p>
              </section>
            </section>

          </section>
        ))}

      </section>

      <section className='w-full h-[80px] flex justify-center items-center'>
        <button className='font-[400] bg-[#DB4444] text-white w-[170px] h-[40px] rounded-[5px]'>View All Products</button>
      </section>

    </section>
  )
}

export default ExploreProducts