import { useState } from "react";
import NextVideos from "../NextVideos/NextVideos";
import "./VideoPage.scss";
import videosDetailsData from "../../data/video-details.json";

// VideoPage is going to keep track of "state" of itself, and the data for its child components

// What we want, is whenever a <li> is clicked on NextVideos, VideoPage will update the state of
// which ID it intends to render

// 1. import videoDetails DONE
// 2. write a helper function, that takes in an ID, and returns the matching video object with the same ID

function VideoPage() {
  const [videoData, setVideoData] = useState();
  const getVideoDetailsById = (newVideoId) => {
    // .find() method is available on JavaScript Arrays:
    // const matchingVideo = videos.find((video) => (video.id === videoId) )
    // under the hood, it is running a for loop, and running the logic written in the second set of ()
    // against every item in the array. If that logic returns false, it skips and moves on to the next item
    // if it returns true, it stops the loop, and stores that object in the variable you named
    // if it finds zero matches, it returns undefined.
    //
    const matchingVideoDetails = videosDetailsData.find(
      (videoDetail) => videoDetail.id === videoId
    );
    setVideoData(matchingVideoDetails);
  };
  const updateVideoId = (newVideoId) => {
    getVideoDetailsById(newVideoId);
  };

  return (
    <>
      <h2>{videoData.title}</h2>
      <NextVideos updateVideoId={updateVideoId} />
    </>
  );
}

export default VideoPage;
