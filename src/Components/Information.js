import { useState } from "react";
import Button from "./Button";
import Overview from "./Overview"
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegEdit, FaRegCommentAlt } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

function Information({videoStatus}) {
  const [active, setActive] = useState("overview");

  return (
    <section className="py-5 w-11/12 m-auto">
      <ul className="flex flex-wrap">
        <Button
          Icon={IoMdInformationCircleOutline}
          active={active}
          id="overview"
          handleActive={(e) => setActive(e)}
        />
        <Button
          Icon={FaRegEdit}
          active={active}
          id="notes"
          handleActive={(e) => setActive(e)}
        />
        <Button
          Icon={FiBookOpen}
          active={active}
          id="reading material"
          handleActive={(e) => setActive(e)}
        />
        <Button
          Icon={FaRegCommentAlt}
          active={active}
          id="discussion forum"
          handleActive={(e) => setActive(e)}
        />
      </ul>

      { active==="overview"? <Overview videoStatus={videoStatus} />: <div className="h-60"></div> }
    </section>
  );
}

export default Information;
