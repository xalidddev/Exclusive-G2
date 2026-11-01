const list = [1, 2, 3, 4, 5]

const Stars = ({ value, size = "text-[14px]" }) => {
  return (
    <section className={"flex gap-[2px] " + size}>
      {list.map((item) => (
        <i key={item} className={(value >= item ? "fa-solid fa-star text-[#ffaf37]" : value >= item - 0.5 ? "fa-solid fa-star-half-stroke text-[#ffaf37]" : "fa-solid fa-star text-gray-300")}></i>
      ))}
    </section>
  )
}

export default Stars
