// YoutubeVideos.js
import React from "react";
import VideoPlayer from "./VideoPlayer";
import "./YoutubeVideos.css"; // Create a CSS file for styling

const YoutubeVideos = () => {
  const videoUrl = "https://youtu.be/Bz9N2VGnCfE?si=50lEunDvzZrd1WDd";

  return (
    <>
      <div className="Types-Of-content-Available">
        <p>Educational/Instructional Videos</p>
        <p>Entertainment</p>
        <p>Portfolio</p>
        <p>Interviews and Podcasts</p>
        <p>Travel Videos</p>
        <p>Food and Cooking Videos</p>
        <p>Fitness and Lifestyle</p>
        <p>Gaming</p>
        <p>DIY and Crafts</p>
        <p>Fashion and Beauty</p>
        <p>Vlogs</p>
        <p>Product Reviews</p>
        <p>Interviews and Podcasts</p>
        <p>Animation</p>
        <p>Science and Education</p>
        <p>Motivational and Inspirational</p>
        <p>Subhash Chandra Bose</p>
        <p>Chhatrapati Shivaji Maharaj</p>
      </div>
      <div className="video-container">
        <VideoPlayer videoUrl={videoUrl} />
        <VideoPlayer videoUrl={videoUrl} />
        <VideoPlayer videoUrl={videoUrl} />
        <VideoPlayer videoUrl={videoUrl} />
        <VideoPlayer videoUrl={videoUrl} />
      </div>
    </>
  );
};

export default YoutubeVideos;
