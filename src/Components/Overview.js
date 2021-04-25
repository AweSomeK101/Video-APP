import { FiShare2, FiBookmark } from "react-icons/fi";
import { FaPlusCircle, FaStar, FaRegStar, FaDotCircle } from "react-icons/fa";
import {FiEye} from "react-icons/fi"

function Overview({videoStatus}) {
  return (
    <section className="w-11/12 m-auto py-10">
      <div className="flex justify-between items-center pb-5 md:w-70p">
        <ul className="flex text-sm text-green-300">
          <li className="pr-4">Dog</li>
          <li className="pr-4">Car</li>
          <li className="pr-4">Catnip</li>
          <li className="pr-4">Youtube</li>
        </ul>
        <FaPlusCircle className="text-green-300" />
      </div>

      <div className="grid md:grid-3x-2x">
        <div className="pb-8">
          <h2 className="text-3xl pb-5">{videoStatus.title}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            quos non hic? A odit aut, corporis blanditiis harum cum similique
            iure ut nihil placeat architecto provident et nemo quo quidem nulla
            enim dolor doloribus atque. Totam, possimus fugiat? A labore neque
            consequuntur aliquid error quasi quidem? Eligendi, natus! Obcaecati,
            eos?
          </p>
        </div>

        <div className="grid justify-items-end gap-2 md:flex md:flex-col md:items-end ">
          <ul className="flex ">
            <li>
              <FiShare2 className="text-4xl pl-3" />
            </li>
            <li>
              <FiBookmark className="text-4xl pl-3" />
            </li>
          </ul>

          <div className="flex ">
            <FaStar className="text-4xl text-yellow-400 pl-3" />
            <FaStar className="text-4xl text-yellow-400 pl-3" />
            <FaStar className="text-4xl text-yellow-400 pl-3" />
            <FaRegStar className="text-4xl text-yellow-400 pl-3" />
            <FaRegStar className="text-4xl text-yellow-400 pl-3" />
          </div>

          <ul className="flex  text-xs font-semibold">
            <li><FiEye className="inline"/> 1.5K </li>
            <li className="pl-3"><FaDotCircle className="inline"/> 2 days ago </li>
          </ul>
        </div>


      </div>
    </section>
  );
}

export default Overview;
