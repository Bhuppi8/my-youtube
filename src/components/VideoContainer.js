import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="p-4 sm:p-6">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-x-4
          gap-y-8
        "
      >
        {videos.map((video) => (
          <Link to={"/watch?v="+ video.id} key={video.id}>
            <VideoCard
              info={video}
            />
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;