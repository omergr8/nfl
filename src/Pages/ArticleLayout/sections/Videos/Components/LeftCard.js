import classes from "../Videos.module.css";
import video1 from "../../../assets/video1.png";
import video2 from "../../../assets/video2.png";
import video3 from "../../../assets/video3.png";
import playIcon from "../../../assets/playIcon.svg";
const galleryData = [
  {
    id: 1,
    image: video1,
  },
  {
    id: 2,
    image: video2,
  },
  {
    id: 3,
    image: video3,
  },
];
const LeftCard = () => {
  return (
    <div>
      <div className={classes.leftCardContainer}>
        <div className={classes.leftCardFlex}>
          {galleryData.map((g, i) => (
            <div className={classes.leftGalleryContainer} key={i}>
              <img src={g.image} width={i === 1 ? "280" : "260"} alt="video1" />
              <div className={classes.leftCardOverlay}></div>
              <div className={classes.leftCardPlay}>
                <img src={playIcon} alt="playIcon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LeftCard;
