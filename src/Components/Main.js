import Information from "./Information";
import Player from "./Player";

function Main({ videoStatus }) {
  return (
    <main className="">
      <Player videoId={videoStatus.videoId} />
      <Information videoStatus={videoStatus} />
    </main>
  );
}

export default Main;
