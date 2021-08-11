import classes from "../Podcast.module.css";
import React from "react";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import pod1 from "../../../assets/pod1.svg";
import pod2 from "../../../assets/pod2.svg";
import pod3 from "../../../assets/pod3.svg";
import playIcon from "../../../assets/playIcon.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import itemData from "./itemData";
import HeadIcon from "../../../../Draft/sections/DraftVideo/Components/HeadIcon";

const VideoGallery = () => {
  const ref = React.useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div>
      <div className={classes.galleryFlex}>
        <div className={classes.galleryHeading}>
          <h2>Podcast</h2>
          <div className={classes.podcastBar}>
            <HeadIcon />
          </div>
        </div>
        <div className={classes.galleryImageContainer} ref={ref}>
          <div className={classes.galleryImageFlex}>
            <div className={classes.imageDiv}>
              <img src={pod1} alt="pod1" width="250px" />
              <div className={classes.absoluteOverlay}></div>
              <div className={classes.absoluteText}>
                <p>Week 5 Fantasy Projections + Notes</p>
              </div>
              <div className={classes.absolutePlayIcon}>
                <img src={playIcon} alt="playIcon" />
              </div>
            </div>

            <div className={classes.imageDiv}>
              <img src={pod1} alt="pod1" width="250px" />
              <div className={classes.absoluteOverlay}></div>
              <div className={classes.absoluteText}>
                <p>Week 5 Fantasy Projections + Notes</p>
              </div>
              <div className={classes.absolutePlayIcon}>
                <img src={playIcon} alt="playIcon" />
              </div>
            </div>

            <div className={classes.imageDiv}>
              <img src={pod1} alt="pod1" width="250px" />
              <div className={classes.absoluteOverlay}></div>
              <div className={classes.absoluteText}>
                <p>Week 5 Fantasy Projections + Notes</p>
              </div>
              <div className={classes.absolutePlayIcon}>
                <img src={playIcon} alt="playIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.arrowIcons}>
          <div onClick={() => scroll(100)}>
            <AiOutlineArrowRight />
          </div>
          <div onClick={() => scroll(-100)} className={classes.arrowIconsLeft}>
            <AiOutlineArrowLeft />
          </div>
        </div>
      </div>
      <div className={classes.viewAllButtonDiv}>
        <Button className={classes.viewAllButton}>view all PODCAST</Button>
      </div>
    </div>
  );
};
export default VideoGallery;
