import VideoCard from './VideoCard';

const VideoList = ({ videos }) => (
  <div className="video-list">
    {videos.map((video) => (
      <VideoCard key={video.id.videoId} video={video} />
    ))}
  </div>
);

export default VideoList;
