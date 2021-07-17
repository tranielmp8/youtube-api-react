import React from "react";
import VideoItem from "./VideoItem";
// instead of props we are deconstructoring
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

// Without deconstructoring
// const VideoList = (props) => {
//   return <div>{props.videos.length}</div>;
// };

// export default VideoList;
