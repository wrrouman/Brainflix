// import "./components.scss";
import "./Comments.scss";
import "../../styles/partials/_typography.scss";

const Comments = (props) => {
  console.log(Comments);
  return props.names.map((comment) => {
    return (
      <>
        <ul>
          <li className="comments__container">
            <div className="avatar__container"></div>
            <div>
              <div className="name__date--container">
                <p>{comment.name}</p>
                <p>{comment.timestamp}</p>
              </div>
              <p>{comment.comment}</p>
            </div>
          </li>
        </ul>
      </>
    );
  });
};

export default Comments;
