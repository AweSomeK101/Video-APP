import { useState, useEffect } from "react";
import Recommend from "./Recommend";

function Sidebar({ videoId, API, handleVidUpdate }) {
  const [videoArr, setVideoArr] = useState([]);
  

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&key=${API}&type=video&maxResults=10&videoSyndicated=true`
    )
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) return res.json();
        throw Error(res.statusText);
      })
      .then((data) =>  setVideoArr(data.items))
      .catch((err) => console.log(err));
  }, [videoId]);


  let recommend= videoArr.map(vid=> {
      if(vid.snippet){
          return <Recommend title={vid.snippet.title} thumb={vid.snippet.thumbnails.medium.url} channel={vid.snippet.channelTitle} videoId={vid.id.videoId} handleVidUpdate={handleVidUpdate} />
      }
  } )


  return (
    <aside className="pl-5">
      <h4 className="text-lg text-gray-500 bg-gray-200 py-2 px-4 font-semibold rounded-3xl inline">
        Recommended
      </h4>

      <ul className="mt-5">
        {recommend}
      </ul>
    </aside>
  );
}

export default Sidebar;
