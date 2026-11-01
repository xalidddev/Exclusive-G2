import tom from '../../assets/About/image 46.png'
import emma from '../../assets/About/image 51.png'
import will from '../../assets/About/image 47.png'

const team = [
  { img: tom, name: "Tom Cruise", job: "Founder & Chairman" },
  { img: emma, name: "Emma Watson", job: "Managing Director" },
  { img: will, name: "Will Smith", job: "Product Designer" },
]

const social = ["fa-brands fa-twitter", "fa-brands fa-instagram", "fa-brands fa-linkedin-in"]

const dots = [0, 1, 2, 3, 4]

const Team = () => {
  return (
    <section className="flex w-[100%] justify-center">

      <section className="flex w-[calc(100%-300px)] flex-col gap-[50px]">

        <section className="flex w-full gap-[30px]">

          {team.map((item, index) => (
            <section key={index} className="flex flex-1 flex-col gap-[24px]">

              <section className="flex h-[430px] w-full items-end justify-center rounded-[4px] bg-[#F5F5F5]">
                <img src={item.img} className="h-[392px] object-contain" alt={item.name} />
              </section>

              <section className="flex flex-col gap-[8px]">
                <h1 className="text-[32px] font-[500]">{item.name}</h1>
                <p className="text-[16px]">{item.job}</p>
              </section>

              <section className="flex items-center gap-[16px] text-[20px]">
                {social.map((icon, i) => (
                  <i key={i} className={icon}></i>
                ))}
              </section>

            </section>
          ))}

        </section>

        <section className="flex w-full items-center justify-center gap-[12px]">
          {dots.map((item) => (
            <section key={item} className={"h-[12px] w-[12px] rounded-[50%] " + (item === 2 ? "bg-[#DB4444]" : "bg-[#B3B3B3]")}></section>
          ))}
        </section>

      </section>

    </section>
  )
}

export default Team
