import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaStar, FaRegStar, FaDotCircle } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

function Recommend({ title, thumb, channel, videoId, handleVidUpdate }) {
  function handleClick() {
    let obj = {
      videoId: videoId,
      title: title,
      channelTitle: channel,
    };
    handleVidUpdate(obj)
  }

  return (
    <li className="grid md:grid-3way my-5">
      <div className="max-w-xxs">
        <div className="relative cursor-pointer" onClick={handleClick}>
          <img
            src={thumb}
            alt="thumbnail"
            className="w-full rounded-lg shadow-lg drop-shadow-lg "
          />
          <p className="absolute top-3/4 right-3 bg-primary text-white text-xs px-2 rounded-lg">
            4:15
          </p>
        </div>
        <div className="w-11/12 m-auto bg-gray-300 h-1.5 rounded-lg overflow-hidden my-1">
          <div className="w-70p h-full bg-primary"></div>
        </div>
      </div>

      <div className="flex flex-col justify-between pb-5 px-2 w-full">
        <div>
          <h4 onClick={handleClick} className="cursor-pointer">{title}</h4>
          <p className="text-sm text-gray-500">{channel}</p>
        </div>
        <div className="grid justify-items-start  md:flex md:flex-col md:items-start ">
          <div className="flex ">
            <FaStar className="text-2xl text-yellow-400 pr-3" />
            <FaStar className="text-2xl text-yellow-400 pr-3" />
            <FaStar className="text-2xl text-yellow-400 pr-3" />
            <FaRegStar className="text-2xl text-yellow-400 pr-3" />
            <FaRegStar className="text-2xl text-yellow-400 pr-3" />
          </div>

          <ul className="flex  text-xs font-semibold">
            <li className="pr-3">
              <FiEye className="inline" /> 1.5K{" "}
            </li>
            <li>
              <FaDotCircle className="inline" /> 2 days ago{" "}
            </li>
          </ul>
        </div>
      </div>

      <HiOutlineDotsVertical className="text-2xl" />
    </li>
  );
}

export default Recommend;
