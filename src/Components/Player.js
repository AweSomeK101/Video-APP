import ReactPlayer from "react-player/youtube";

function Player({ videoId }) {
  return (
    <div>
      <div className="rounded-3xl overflow-hidden">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          controls={true}
        />
      </div>
        <div className="flex w-11/12 m-auto justify-center items-center">
          <div className="w-11/12 m-auto bg-gray-300 h-1.5 rounded-lg overflow-hidden my-1">
            <div className="w-70p h-full bg-primary"></div>
          </div>
          <p className="text-gray-500 pl-4">10:45</p>
        </div>
    </div>
  );
}

export default Player;
