import classes from "./Common.module.css";

import downloadIcon from "../../assets/downloadIcon.svg";
import heartIcon from "../../assets/heartIcon.svg";
import verticleCard from "../../assets/verticleCard.png";
const VerticleOverlayCard = ({ data }) => {
  return (
    <div>
      <div className={classes.vocMain}>
        {data.map((d, i) => (
          <div className={classes.vocImageContainer}>
            <img src={verticleCard} alt="verticleCard" width="245px" />
            <div className={classes.vocOverlay} />
            <div className={classes.vocTextAbsoulte}>
              <div className={classes.vocTextContainer}>
                <p className={classes.vocText1}>{d.text1}</p>
                <p className={classes.vocText2}>{d.text2}</p>
                <p className={classes.vocText3}>{d.text3}</p>
                <div className={classes.vocIconDiv}>
                  <div>
                    <img src={downloadIcon} alt="download" width="15px" />
                  </div>
                  <div>
                    <img src={heartIcon} alt="heartIcon" width="15px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default VerticleOverlayCard;
