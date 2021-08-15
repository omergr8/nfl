import classes from "./Comments.module.css";
import CommentForm from "./Components/CommentForm";
const Comments = () => {
  return (
    <div>
      <div className={classes.commentTop}>
        <p>Submit a Comment</p>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <CommentForm />
    </div>
  );
};
export default Comments;
