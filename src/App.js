import {useState, useEffect} from "react";

import Header from "./Components/Header";
import Main from "./Components/Main"
import Sidebar from "./Components/Sidebar"

const API= "AIzaSyBpcqgcks6xRZYJWGb5hNvEItBzOHUyfgg";
function App() {
  const [videoStatus, setVideoStatus] = useState({
    videoId: null,
    title: null,
    channelTitle: null,
  })
  console.log("videoStatus", videoStatus)

  useEffect(()=>{
    setVideoStatus({
      videoId: "6D1K_bguPrc",
      title: "Videos for Dogs to Watch Extravaganza : Dog Watch TV - 8 Hours of Birds and Squirrel Fun for Dogs ✅",
      channelTitle: "Paul Dinning",
    })
  }, [])

  return (
    <>
      <Header API={API} handleVidUpdate={e=>setVideoStatus(e)} />

      <div className="grid md:grid-3x-2x gap-5 contain pt-6">
        <Main videoStatus={videoStatus} />
        <Sidebar videoId={videoStatus.videoId} API={API} handleVidUpdate={e=>setVideoStatus(e)} />
      </div>
    </>
  );
}

export default App;
