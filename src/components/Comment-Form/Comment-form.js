import avatar from "../../assets/images/Mohan-muruge.jpg";
import addIcon from "../../assets/Icons/add_comment.svg";


function CommentForm() {
  return (
    <>
        <p>JOIN THE CONVERSATION</p>
      <img id="avatar" src={avatar} alt="avatar" />

      <form>
        <textarea></textarea>
        <button type="submit">COMMENT</button>
      </form>
    </>
  );
}

export default CommentForm;
