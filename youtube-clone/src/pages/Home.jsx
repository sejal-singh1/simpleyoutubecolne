
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import VideoList from '../components/VideoList';
import { fetchVideos } from '../../api';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Popular');

  useEffect(() => {
    fetchVideos(selectedCategory).then(setVideos);
  }, [selectedCategory]);

  return (
    <div className="home">
      <Sidebar
        categories={['Popular', 'Music', 'Sports', 'News']}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <VideoList videos={videos} />
    </div>
  );
};

export default Home;
