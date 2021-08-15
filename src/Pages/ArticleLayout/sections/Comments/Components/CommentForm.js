import classes from "../Comments.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import React, { useState, useEffect } from "react";
import DisplayComments from "./DisplayComments";
const commentData = [
  {
    name: "Jose Perez",
    comment: ` Political parties and the government involve them in discussions of
            the most significant public issues. When developing policies, social
            scientists and experts act as either “advocates” or “brokers” of
            knowledge—they either insist on a close approach to solving problems
            or help citizens and politicians understand who benefits and who
            loses as a result of a particular decision.`,
  },
  {
    name: "Jose Perez",
    comment: ` Political parties and the government involve them in discussions of
            the most significant public issues. When developing policies, social
            scientists and experts act as either “advocates” or “brokers” of
            knowledge—they either insist on a close approach to solving problems
            or help citizens and politicians understand who benefits and who
            loses as a result of a particular decision.`,
  },
];
const CommentForm = () => {
  const [commentText, setCommentText] = useState("");
  const [name_, setName_] = useState("");
  const [email_, setEmail_] = useState("");
  const [checked_, setChecked_] = useState(false);
  const [commentData_, setCommentData] = useState(commentData);
  const handleSubmit = (event) => {
    const obj = {
      name: name_,
      comment: commentText,
    };
    setCommentData([...commentData_, obj]);
    event.preventDefault();
  };
  return (
    <div>
      <div className={classes.commentForm}>
        <form className={classes.formMain} onSubmit={handleSubmit}>
          <div>
            {" "}
            <textarea
              className={classes.textArea}
              placeholder="Comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>

          <div>
            <input
              className={classes.nameField}
              type="text"
              placeholder="Name"
              value={name_}
              onChange={(e) => setName_(e.target.value)}
            />
          </div>
          <div>
            <input
              className={classes.emailField}
              type="text"
              placeholder="Email"
              value={email_}
              onChange={(e) => setEmail_(e.target.value)}
            />
          </div>
          <div className={classes.checkBoxDiv}>
            <div className={classes.checkBox1}>
              <Checkbox
                defaultChecked
                className={classes.checkBox2}
                checked={checked_}
                onChange={(e) => setChecked_(e.target.checked)}
                // style={classes.checkBox2}
                // color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
            <p>
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>
          <div>
            <input
              className={classes.addButton}
              type="submit"
              value="Add Comment"
            />
          </div>
        </form>
      </div>
      <div>
        <DisplayComments commentData={commentData_} />
      </div>
    </div>
  );
};
export default CommentForm;
