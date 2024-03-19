import YouTube from "react-youtube";

// eslint-disable-next-line react/prop-types
const YouTubePlayer = ({ videoId }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <YouTube videoId={videoId} />
    </div>
  );
};

export default YouTubePlayer;
