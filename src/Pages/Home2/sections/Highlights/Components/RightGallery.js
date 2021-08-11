import classes from "../Highlights.module.css";
import React from "react";
import Button from "@material-ui/core/Button";
import highGallery1 from "../../../assets/highGallery1.svg";
import highGallery2 from "../../../assets/highGallery2.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
const highGallery1Data = [
  {
    id: 1,
    image: highGallery1,
  },
  {
    id: 2,
    image: highGallery2,
  },
  {
    id: 3,
    image: highGallery1,
  },
];
const RightGallery = () => {
  const ref = React.useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div>
      <div className={classes.mainGalleryFlex}>
        <div className={classes.rightGallerryContainer} ref={ref}>
          <div className={classes.rightContainer}>
            <div className={classes.upperGallery}>
              {highGallery1Data.map((hd, i) => (
                <div className={classes.rightGalleryImage} key={i}>
                  <img src={hd.image} alt="highGallery1" width="255px" />
                  <div className={classes.rightGalleryImageOverlay}></div>
                  <div className={classes.rightGalleryImageText}>
                    <p>Matchup Previews + Week 5 </p>
                    <p>Injury Analysis with Dr. David Chao</p>
                    <p>(2020 Fantasy Football)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.upperGallery}>
              {highGallery1Data.map((hd, i) => (
                <div className={classes.rightGalleryImage} key={i}>
                  <img src={hd.image} alt="highGallery1" width="255px" />
                  <div className={classes.rightGalleryImageOverlay}></div>
                  <div className={classes.rightGalleryImageText}>
                    <p>Matchup Previews + Week 5 </p>
                    <p>Injury Analysis with Dr. David Chao</p>
                    <p>(2020 Fantasy Football)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.arrowIcons}>
          {" "}
          <div onClick={() => scroll(100)}>
            <AiOutlineArrowRight />
          </div>
          <div onClick={() => scroll(-100)} className={classes.arrowIconsLeft}>
            <AiOutlineArrowLeft />
          </div>
        </div>
      </div>
      <div className={classes.viewAllButtonDiv}>
        <Button
          className={classes.viewAllButton}
          endIcon={<AiOutlineArrowRight />}
        >
          view all HIGHLIGHTS WEEK
        </Button>
      </div>
    </div>
  );
};
export default RightGallery;
