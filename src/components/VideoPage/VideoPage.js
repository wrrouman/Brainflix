import { useState } from "react";
import Videolist from "../Videolist/Videolist";
import "./VideoPage.scss";
import videosDetailsData from "../../data/video-details.json";
import Comments from "../Comments/Comments";
import { formatTimestamp } from "../../Toolbelt/utilities";
import likesIcon from "../../assets/Icons/likes.svg";
import ViewsIcon from "../../assets/Icons/views.svg";

// VideoPage is going to keep track of "state" of itself, and the data for its child components

// What we want, is whenever a <li> is clicked on NextVideos, VideoPage will update the state of
// which ID it intends to render

// 1. import videoDetails DONE
// 2. write a helper function, that takes in an ID, and returns the matching video object with the same ID

function VideoPage() {
  const [videoData, setVideoData] = useState(videosDetailsData[0]);
  const getVideoDetailsById = (newVideoId) => {
    // .find() method is available on JavaScript Arrays:
    // const matchingVideo = videos.find((video) => (video.id === videoId) )
    // under the hood, it is running a for loop, and running the logic written in the second set of ()
    // against every item in the array. If that logic returns false, it skips and moves on to the next item
    // if it returns true, it stops the loop, and stores that object in the variable you named
  
    //  // if it finds zero matches, it returns undefined.
    const matchingVideoDetails = videosDetailsData.find(
      (videoDetail) => videoDetail.id === newVideoId
    );
    setVideoData(matchingVideoDetails);
  };
  const updateVideoId = (newVideoId) => {
    getVideoDetailsById(newVideoId);
  };

  return (
    <>
      <video style={{ width: "100%" }} poster={videoData.image} controls />
      <div className="video__content__container">
        <div className="video__details__and__comments">
          <h2 className="video__current--playing">{videoData.title}</h2>
          <div className="video__details">
            <div className="video__channel--timestamp">
            <h3 className="video__channel-name">By {videoData.channel}</h3>
            <p className="video__timestamp">{formatTimestamp(videoData.timestamp)}</p>
            </div>
            <div className="video__views--likes">
            <div className="video__views">
              <img src={ViewsIcon} />
              <p className="video__views-count">{videoData.views}</p>
            </div>
            <div className="video__likes">
              <img  src={likesIcon} />
              <p className="video__likes-count">{videoData.likes}</p>
            </div>
            </div>
          </div>
          <p className="video__description">{videoData.description}</p>
          <Comments names={videoData.comments} />
        </div>
        <Videolist
          currentVideoId={videoData.id}
          handleClickVideo={updateVideoId}
        />
      </div>
    </>
  );
}

export default VideoPage;
