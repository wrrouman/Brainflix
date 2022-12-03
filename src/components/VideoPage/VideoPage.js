import { useState, useEffect } from "react";
import Videolist from "../Videolist/Videolist";
import "./VideoPage.scss";
// import videosDetailsData from "../../data/video-details.json";
import Comments from "../Comments/Comments";
import { formatTimestamp } from "../../Toolbelt/utilities";
import likesIcon from "../../assets/Icons/likes.svg";
import ViewsIcon from "../../assets/Icons/views.svg";
import { getVideos, getVideoById } from "../api/api";
import { useParams } from "react-router-dom";

// VideoPage is going to keep track of "state" of itself, and the data for its child components

// What we want, is whenever a <li> is clicked on NextVideos, VideoPage will update the state of
// which ID it intends to render

function VideoPage({videosData}) {

  // the useState and useParams are the initial setup for parts of our component
  // 2 requirements:
  // need the component to have a memory (track which video data to be showing) 
  // need the component to know what the id is in the URL box of the browser (if it is there)


  // react gives a getter and a setter to use in order to control the components memory
  // getter -> read the value videoData
  // setter -> write a new value setVideoData

  const [videoData, setVideoData] = useState();

  // useParams gives access to any parameters written in the browser URL box
  // id will either be a string, or undefined
  // that 'truthiness' is what will be used to let the component decide whether to use id or not
  let {id}= useParams();
  console.log('useParams returned', id)

  // lifecycle of the component, which will run updates if the conditions we are looking for are met
  useEffect(() => {
    // use the API helper function we wrote in api.js
    getVideoById(id ? id : videosData[0].id)
    .then(res => {
      setVideoData(res.data)
    })
  }, [id])
  // this ending array, contains the state I want to "watch"
  // every time the value of id changes, either because a new video link was clicked
  // or the component is starting for the first time
  return (
    // the return for the video page component 
    <>
    {/* // if video data is truthy, the data will render */}
      {videoData &&  (
        <>
          <video style={{ width: "100%" }} poster={videoData.image} controls />
          <div className="video__content__container">
            <div className="video__details__and__comments">
              <h2 className="video__current--playing">{videoData.title}</h2>
              <div className="video__details">
                <div className="video__channel--timestamp">
                  <h3 className="video__channel-name">
                    By {videoData.channel}
                  </h3>
                  <p className="video__timestamp">
                    {formatTimestamp(videoData.timestamp)}
                  </p>
                </div>
                <div className="video__views--likes">
                  <div className="video__views">
                    <img src={ViewsIcon} />
                    <p className="video__views-count">{videoData.views}</p>
                  </div>
                  <div className="video__likes">
                    <img src={likesIcon} />
                    <p className="video__likes-count">{videoData.likes}</p>
                  </div>
                </div>
              </div>
              <p className="video__description">{videoData.description}</p>
              <Comments names={videoData.comments} />
            </div>
            <Videolist
              currentVideoId={videoData.id}
              videosData={videosData}
            />
          </div>
        </>
      )}
    </>
  );
}

export default VideoPage;
