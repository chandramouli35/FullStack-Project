// import React from "react";
// import YouTube from "react-youtube";

// const VideoPlayer = ({ videoUrl }) => {
//   // Check if videoUrl is not undefined and is a string
//   if (typeof videoUrl !== "string") {
//     return <div>No video URL provided</div>;
//   }

//   // Extract the video ID from the URL
//   const videoId = videoUrl.match(
//     /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/
//   );

//   // Check if videoId is not null
//   if (!videoId) {
//     return <div>Invalid video URL</div>;
//   }

//   // Options for the YouTube player
//   const opts = {
//     height: "390",
//     width: "640",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return <YouTube videoId={videoId[1]} opts={opts} />;
// };

// export default VideoPlayer;

import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoUrl }) => {
  // Check if videoUrl is not undefined and is a string
  if (typeof videoUrl !== "string") {
    return <div>No video URL provided</div>;
  }

  // Extract the video ID from the URL
  const videoId = videoUrl.match(
    /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/
  );

  // Check if videoId is not null
  if (!videoId) {
    return <div>Invalid video URL</div>;
  }

  // Options for the YouTube player
  const opts = {
    height: "150", // Decrease the height here
    width: "266",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId[1]} opts={opts} />;
};

export default VideoPlayer;
