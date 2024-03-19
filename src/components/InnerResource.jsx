import YouTubePlayer from "./Resources/Youtube";

const InnerResource = ({ videoId }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-8 bg-slate-200">
        <div className="p-12">
          <div className="mb-4">
            <h1 className="text-4xl">Title</h1>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl">Description</h1>
          </div>
        </div>
        <div className="p-20 min-h-lg w-full flex items-center justify-center ">
          <YouTubePlayer videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default InnerResource;
