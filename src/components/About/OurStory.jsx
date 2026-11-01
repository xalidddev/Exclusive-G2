import { Link } from "react-router-dom"
import side from '../../assets/About/side.png'

const story = [
  "Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.",
  "Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.",
]

const OurStory = () => {
  return (
    <section className="flex w-[100%] justify-center">

      <section className="flex w-[calc(100%-300px)] flex-col gap-[60px]">

        <section className="flex h-[100px] items-end gap-[10px] text-[14px]">
          <Link to={"/"} className="text-gray-400">Home</Link>
          <p className="text-gray-400">/</p>
          <p className="font-[500]">About</p>
        </section>

        <section className="flex w-full items-center justify-between gap-[75px]">

          <section className="flex w-[40%] flex-col gap-[40px]">
            <h1 className="text-[54px] font-[600]">Our Story</h1>

            <section className="flex flex-col gap-[24px] text-[16px]">
              {story.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </section>
          </section>

          <img src={side} className="w-[55%] object-contain" alt="Our Story" />

        </section>

      </section>

    </section>
  )
}

export default OurStory
