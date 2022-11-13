// import "./components.scss";
import "./Comments.scss";
import { formatTimestamp } from "../../Toolbelt/utilities";
import CommentForm from "../Comment-Form/Comment-form";

const Comments = (props) => {
  console.log(Comments);
  return (
    <>
      <div className="comments">
        <p>{props.names.length} Comments</p>
        <CommentForm />
        <ul>
          {/* each li would be mapped */}
          {props.names.map((comment) => {
            return (
              <li className="comments__container">
                <div className="comments__avatar"></div>
                <div>
                  <div className="comments__nameDate">
                    <p className="comments__name">{comment.name}</p>
                    <p className="comments__time">
                      {formatTimestamp(comment.timestamp)}
                    </p>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Comments;
