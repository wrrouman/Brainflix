import "./Upload.scss";
import Header from "../../components/Header/Header";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

const Upload = () => {
  return (
    <>
      <Header />

      <div className="upload">
        <h2 className="upload__title">Upload Video</h2>
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
            <form id="publish" className="upload__section--comments">
              <div className="upload__section--containerA">
                <label className="upload__label--title">Title Your Video</label>
                <input
                  id="enter__video--title"
                  for="video title"
                  placeholder="Add a title to your video"
                ></input>
              </div>
              <div className="upload__section--containerB">
                <label className="upload__label--title">
                  Add a Video Description
                </label>
                <textarea
                  id="upload__description"
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        <div className="upload__section--containerC">
          <div className="upload__publish--button">
            <button id="publish__button">Publish</button>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="upload__cancel--container">
              <button id="cancel">Cancel</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Upload;
