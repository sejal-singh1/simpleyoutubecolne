import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchVideoDetails } from '../../api';

const Video = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchVideoDetails(id).then(setVideo);
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="video-detail">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default Video;
