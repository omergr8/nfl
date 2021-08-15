import classes from "./Common.module.css";
import Button from "@material-ui/core/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import newsBack from "../../assets/newsBack.png";
const NewsCard = ({ newsData }) => {
  return (
    <div>
      <div className={classes.articleMain}>
        {newsData.map((nd, i) => (
          <div className={classes.imageContainer} key={i}>
            <img src={newsBack} alt="newsBack" width="100%" />
            <div className={classes.imageOverlay} />
            <div className={classes.textAbsolute}>
              <div className={classes.textContainer}>
                <h2 className={classes.articleHeading}>{nd.heading}</h2>
                <p className={classes.articleText1}>{nd.text1}</p>
                <p className={classes.articleText2}>{nd.text2}</p>
              </div>
            </div>
            <div className={classes.iconAbsolute}>
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
        ))}
        <div className={classes.viewAllButtonDiv}>
          <Button
            className={classes.viewAllButton}
            endIcon={<AiOutlineArrowRight />}
          >
            view all articles
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
