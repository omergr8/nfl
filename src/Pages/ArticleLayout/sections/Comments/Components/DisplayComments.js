import classes from "../Comments.module.css";
import React, { useState, useEffect } from "react";
import avatar from "../../../assets/avatar.svg";
const DisplayComments = ({ commentData }) => {
  useEffect(() => {
    // console.log("hdi", commentData);
  }, [commentData]);
  return (
    <div className={classes.dcMain}>
      {commentData.map((cd, i) => (
        <div className={classes.dcFlex} key={i}>
          <div className={classes.dcAvatar}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={classes.dcComment}>
            <p>{cd.name}</p>
            <p className={classes.dcCommentDesc}>{cd.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DisplayComments;
