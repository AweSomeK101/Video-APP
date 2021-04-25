import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaSearch } from "react-icons/fa";

function Header({ API, handleVidUpdate }) {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [vid, setVid] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API}&type=video&videoSyndicated=true`
    )
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) return res.json();
        throw Error(res.statusText);
      })
      .then((data) => setVid(data.items))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    let obj = {};
    if (vid !== []) {
      for (let index = 0; index < vid.length; index++) {
        if (vid[index].snippet) {
          obj = {
            videoId: vid[index].id.videoId,
            title: vid[index].snippet.title,
            channelTitle: vid[index].snippet.channelTitle,
          };
          break;
        }
      }
      handleVidUpdate(obj)
      setIsOpen(false);
    }
  }, [vid]);

  return (
    <header className="py-4 shadow-lg">
      <div className="flex justify-between items-center contain">
        <h1 className="text-5xl font-bold text-primary">Video</h1>
        <FaSearch className="text-3xl cursor-pointer" onClick={()=>setIsOpen(true)} />
      </div>

      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className="absolute top-1/2 left-1/2 transform-50 w-80 md:max-w-xl bg-white rounded-3xl p-10">
        <form className="grid place-items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            id="query"
            className="bg-purple-200 text-black shadow-xl drop-shadow-xl text-lg rounded-xl py-4 px-4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-primary text-white py-2 px-3 rounded-md m-4"
            >
              search
            </button>
            <button
              className="bg-red-500 text-white py-2 px-3 rounded-md m-4"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </header>
  );
}

export default Header;
