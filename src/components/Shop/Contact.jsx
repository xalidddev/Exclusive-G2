import { Link } from "react-router-dom"

const info = [
  {
    icon: "fa-solid fa-phone",
    title: "Call To Us",
    lines: ["We are available 24/7, 7 days a week.", "Phone: +8801611112222"],
  },
  {
    icon: "fa-regular fa-envelope",
    title: "Write To US",
    lines: ["Fill out our form and we will contact you within 24 hours.", "Emails: customer@exclusive.com", "Emails: support@exclusive.com"],
  },
]

const fields = [
  { text: "Your Name *", type: "text" },
  { text: "Your Email *", type: "email" },
  { text: "Your Phone *", type: "tel" },
]

const Contact = () => {
  return (
    <section className="flex min-h-[600px] w-[100%] justify-center">

      <section className="flex w-[calc(100%-300px)] flex-col gap-[60px]">

        <section className="flex h-[100px] items-end gap-[10px] text-[14px]">
          <Link to={"/"} className="text-gray-400">Home</Link>
          <p className="text-gray-400">/</p>
          <p className="font-[500]">Contact</p>
        </section>

        <section className="flex w-full items-start gap-[30px]">

          <section className="flex min-h-[457px] w-[340px] shrink-0 items-center justify-center rounded-[4px] bg-white shadow-[0px_1px_13px_rgba(0,0,0,0.1)]">

            <section className="flex w-[80%] flex-col gap-[30px]">

              {info.map((item, index) => (
                <section key={index} className="flex flex-col gap-[30px]">

                  <section className="flex flex-col gap-[24px]">

                    <section className="flex items-center gap-[16px]">
                      <section className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#DB4444]">
                        <i className={item.icon + " text-[16px] text-white"}></i>
                      </section>
                      <h1 className="text-[16px] font-[500]">{item.title}</h1>
                    </section>

                    <section className="flex flex-col gap-[16px] text-[14px]">
                      {item.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </section>

                  </section>

                  {index === 0 && <section className="h-[1px] w-full bg-gray-400"></section>}

                </section>
              ))}

            </section>

          </section>

          <section className="flex min-h-[457px] flex-1 items-center justify-center rounded-[4px] bg-white shadow-[0px_1px_13px_rgba(0,0,0,0.1)]">

            <section className="flex w-[94%] flex-col gap-[30px]">

              <section className="flex w-full gap-[16px]">
                {fields.map((item, index) => (
                  <input key={index} type={item.type} placeholder={item.text} className="h-[50px] min-w-0 flex-1 rounded-[4px] bg-[#F5F5F5] indent-[16px] text-[16px] outline-none" />
                ))}
              </section>

              <textarea placeholder="Your Message" className="h-[207px] w-full resize-none rounded-[4px] bg-[#F5F5F5] indent-[16px] text-[16px] outline-none"></textarea>

              <section className="flex w-full justify-end">
                <button className="h-[56px] w-[215px] rounded-[4px] bg-[#DB4444] text-[16px] font-[500] text-white">Send Message</button>
              </section>

            </section>

          </section>

        </section>

      </section>

    </section>
  )
}

export default Contact
