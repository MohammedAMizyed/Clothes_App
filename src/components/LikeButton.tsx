import likedI from "../assets/like000.svg"
import unLikedI from "../assets/like.svg"
export default function LikeButton({
  liked,
  onToggle,
}: {
  liked: boolean
  onToggle: () => void
}) {
  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        onToggle()
      }}
    >
      {liked ? (
        <img className="w-4 sm:w-9 " src={likedI} alt="icon" />
      ) : (
        <img className="w-4 sm:w-full " src={unLikedI} alt="icon" />
      )}
    </button>
  )
}
