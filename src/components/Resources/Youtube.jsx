// YouTubePlayer.js
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
  return (
    <div className="">
      <YouTube videoId={videoId} />
    </div>
  );
};

export default YouTubePlayer;
