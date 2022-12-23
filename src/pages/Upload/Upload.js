import "./Upload.scss";
import Header from "../../components/Header/Header";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import { postVideos } from "../../components/api/api";
import { useState } from "react";
 
const Upload = () => {
  const [uploadStatus, setUploadStatus] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const videoData = {
      title: formData.get('title'),
      description: formData.get('description')
    }
    postVideos(videoData).then(res => setUploadStatus(res.data));
    console.log(videoData);
  };

  return (
    <>
      <Header />

      <div className="upload">
        <h2 className="upload__title">Upload Video</h2>
        {uploadStatus && <h3>Upload Successful!</h3>}
        <div className="upload__test-container">
          <div className="upload__container1">
            <div className="upload__section--thumbnail">VIDEO THUMBNAIL</div>
            <img
              src={UploadImage}
              className="upload__thumbnail--image"
              alt="bike"
            ></img>
          </div>

          <div className="upload__test2">
            <form
              onSubmit={handleSubmit}
              id="publish"
              className="upload__section--comments"
            >
              <div className="upload__section--containerA">
                <label className="upload__label--title">Title Your Video</label>
                <input
                  id="enter__video--title"
                  forhtml="video title"
                  name = "title"
                  placeholder="Add a title to your video"
                ></input>
              </div>
              <div className="upload__section--containerB">
                <label className="upload__label--title">
                  Add a Video Description
                </label>
                <textarea
                  id="upload__description"
                  name = "description"
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
              {/* <button type='submit'></button> */}
              <input type="submit" id="publish__button" value="Publish" />
              <div className="upload__section--containerC">
                <div className="upload__publish--button"></div>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="upload__cancel--container">
                    <button form="publish" type="submit" id="cancel">
                      Cancel
                    </button>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Upload;
