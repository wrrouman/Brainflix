import avatar from "../../assets/images/Mohan-muruge.jpg";
import addIcon from "../../assets/Icons/add_comment.svg";
import "../Comment-Form/Comment-Form.scss";

function CommentForm() {
  return (
    <>
     <p className="conversation">JOIN THE CONVERSATION</p>
      <div className="new__comment-container">
        <img id="avatar_comment" src={avatar} alt="avatar" />

        <form>
          <div className="comment__button-contsiner ">
            <textarea
              className="textbox"
              placeholder="Add a new comment"
            ></textarea>
            <button className="comment__button" type="submit">
              COMMENT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CommentForm;
