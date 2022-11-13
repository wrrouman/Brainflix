import "./NextVideos.scss";
import videosData from "../../data/videos.json";

// props.updateVideoId

function NextVideos(props) {
  console.log(videosData);

  const renderVideoLink = (videoData) => {
    return (
      <li
        key={videoData.id}
        onClick={() => {
          props.updateVideoId(videoData.id);
        }}
      >
        <div className="nextVideo-container">
          <img className="nextVideo-image" src={videoData.image} />

          <div className="videoDetails-container">
            <h4>{videoData.title}</h4>
            <h5>{videoData.channel}</h5>
          </div>
        </div>
      </li>
    );
  };

  return (
    <>
      <h3>Next Videos</h3>
      <ul>{videosData.map((videoData) => renderVideoLink(videoData))}</ul>
    </>
  );
}

export default NextVideos;
