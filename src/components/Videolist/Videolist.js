import "./Videolist.scss";
import videos from "../../data/videos.json";
import videosdetails from "../../data/video-details.json";
import { Link } from "react-router-dom";
import { staticImages } from "../api/api";

function Videolist(props) {
  // everything before the return statement, is the "brain" of the component

  const filterVideoDetails = props.videosData.filter((video) => {
    return video.id !== props.currentVideoId;
  });

  return (
    <div className="videos">
      <p className="videos__title">NEXT VIDEOS</p>
      {
        //use props.videos and remove import videos
        filterVideoDetails.map((video) => {
          return (
            <Link to={`/${video.id}`} style={{ textDecoration: "none" }}>
              <div
                className="videos__container"
                onClick={() => props.handleClickVideo(video.id)}
              >
                <div className="videos__image-container">
                  <img className="videos__image" src={staticImages + video.image}></img>
                </div>
                <div className="videos__subcontainer1">
                  <p className="videos__subtitle">{video.title}</p>
                  <p className="videos__channel">{video.channel}</p>
                </div>
              </div>
            </Link>
          );
        })
      }
    </div>
  );
}
export default Videolist;
