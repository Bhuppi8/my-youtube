import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get('v');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="p-6">
      
      {/* Video */}
        <iframe
        width="1200"
        height="600"
        className="rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        />
      

      {/* Video information */}
      <div className="max-w-5xl mx-auto mt-5">
        <h1 className="text-xl font-bold">
          YouTube Video
        </h1>

        <p className="text-gray-500 mt-2">
          Video ID: {videoId}
        </p>
      </div>

    </div>
  );
};

export default WatchPage;