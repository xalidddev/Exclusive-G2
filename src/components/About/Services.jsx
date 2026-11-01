import delivery from '../../assets/About/s1.png'
import support from '../../assets/About/s2.png'
import guarantee from '../../assets/About/s3.png'

const services = [
  { img: delivery, title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
  { img: support, title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
  { img: guarantee, title: "MONEY BACK GUARANTEE", text: "We return money within 30 days" },
]

const Services = () => {
  return (
    <section className="flex min-h-[260px] w-[100%] items-start justify-center">

      <section className="flex w-[calc(100%-300px)] justify-center gap-[88px]">

        {services.map((item, index) => (
          <section key={index} className="flex w-[260px] flex-col items-center gap-[24px] text-center">
            <img src={item.img} className="h-[80px] w-[80px]" alt={item.title} />

            <section className="flex flex-col gap-[8px]">
              <h1 className="text-[20px] font-[600]">{item.title}</h1>
              <p className="text-[14px]">{item.text}</p>
            </section>
          </section>
        ))}

      </section>

    </section>
  )
}

export default Services
