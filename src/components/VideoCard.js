import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const {
    channelTitle,
    thumbnails,
    title,
  } = snippet;

  return (
    <div className="cursor-pointer group">

      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="
            w-full
            aspect-video
            object-cover
            transition-transform
            duration-200
            group-hover:scale-105
          "
        />
      </div>

      {/* Video information */}
      <div className="flex gap-3 mt-3">

        {/* Channel avatar */}
        <div className="flex-shrink-0">
          <div
            className="
              w-9
              h-9
              rounded-full
              bg-gray-300
              flex
              items-center
              justify-center
              text-sm
              font-semibold
            "
          >
            {channelTitle?.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Text */}
        <div className="min-w-0">

          {/* Title */}
          <h2
            className="
              font-semibold
              text-sm
              leading-5
              text-gray-900
              line-clamp-2
            "
          >
            {title}
          </h2>

          {/* Channel name */}
          <p className="text-sm text-gray-500 mt-1">
            {channelTitle}
          </p>

          {/* Views */}
          <p className="text-sm text-gray-500">
            {Number(statistics?.viewCount).toLocaleString()} views
          </p>

        </div>

      </div>
    </div>
  );
};

export default VideoCard;