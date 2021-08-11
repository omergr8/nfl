import classes from "../News.module.css";
import Button from "@material-ui/core/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
const NewsArticle = ({ newsData }) => {
  return (
    <div>
      <div className={classes.articleMain}>
        {newsData.map((nd, i) => (
          <div className={classes.articleBackground} key={i}>
            <div className={classes.articleContainer}>
              <div className={classes.articleOverlay}></div>
              <div className={classes.articleTextContainer}>
                {" "}
                <div className={classes.onlyTextContainer}>
                  <h2 className={classes.articleHeading}>{nd.heading}</h2>
                  <p className={classes.articleText1}>{nd.text1}</p>
                  <p className={classes.articleText2}>{nd.text2}</p>
                </div>
                <div className={classes.iconContainer}>
                  <div>
                    <FiHeart />
                  </div>
                  <div>
                    <AiOutlineSend />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className={classes.viewAllButtonDiv}>
          <Button
            className={classes.viewAllButton}
            endIcon={<AiOutlineArrowRight />}
          >
            view all VIDEOS
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NewsArticle;
