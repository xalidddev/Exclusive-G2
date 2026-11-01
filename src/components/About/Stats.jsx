const stats = [
  { icon: "fa-solid fa-shop", value: "10.5k", text: "Sellers active our site", active: false },
  { icon: "fa-solid fa-dollar-sign", value: "33k", text: "Monthly Product Sale", active: true },
  { icon: "fa-solid fa-bag-shopping", value: "45.5k", text: "Customer active in our site", active: false },
  { icon: "fa-solid fa-sack-dollar", value: "25k", text: "Annual gross sale in our site", active: false },
]

const Stats = () => {
  return (
    <section className="flex w-[100%] justify-center">

      <section className="flex w-[calc(100%-300px)] gap-[30px]">

        {stats.map((item, index) => (
          <section key={index} className={"flex h-[230px] flex-1 flex-col items-center justify-center gap-[24px] rounded-[4px] border-[1px] border-[rgba(0,0,0,0.3)] " + (item.active ? "border-[#DB4444] bg-[#DB4444] text-white shadow-[0px_2px_30px_rgba(219,68,68,0.3)]" : "bg-white")}>

            <section className="flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-[rgba(47,46,48,0.3)]">
              <section className={"flex h-[58px] w-[58px] items-center justify-center rounded-[50%] " + (item.active ? "bg-white text-black" : "bg-black text-white")}>
                <i className={item.icon + " text-[24px]"}></i>
              </section>
            </section>

            <section className="flex flex-col items-center gap-[12px]">
              <h1 className="text-[32px] font-[600]">{item.value}</h1>
              <p className="text-[16px]">{item.text}</p>
            </section>

          </section>
        ))}

      </section>

    </section>
  )
}

export default Stats
