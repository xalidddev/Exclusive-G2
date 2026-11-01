import { useState } from "react"
import { Heart } from "lucide-react"

const LikeButton = () => {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)} className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[50%] bg-white">
      <Heart size={18} className={liked ? "fill-[#DB4444] text-[#DB4444]" : "text-black"} />
    </button>
  )
}

export default LikeButton
