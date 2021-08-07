import classes from "./InjuriesCard.module.css";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import avatar from "../../../../assets/avatar.svg";
const cardDetails = (image, name, pos, status, description) => (
  <div className={classes.cardDetails}>
    <div className={classes.cardFlex}>
      <div className={classes.avatar}>
        <img src={avatar} alt="avatar" width="55px" />
      </div>
      <div className={classes.cardSpan}>
        <p className={classes.firstP}>
          {name} <span>{pos}</span>
        </p>
        <div className={classes.secondFlex}>
          <div>
            <p className={classes.secondP}>Status</p>
          </div>
          <div
            className={clsx(
              classes.dot,
              status === "Out" ? classes.red : classes.yellow
            )}
          ></div>
          <div className={classes.status}>
            <p>{status}</p>
          </div>
          {/* <div className={classes.secondFlex2}>
           
          </div> */}
        </div>
      </div>
    </div>
    <div className={classes.cardDescription}>
      <p>{description}</p>
    </div>
  </div>
);
const InjuriesCard = ({ injuriesData }) => {
  return (
    <div>
      <div className={classes.cardMain}>
        <div className={classes.paper}>
          {injuriesData.map((id, i) => (
            <>
              <div className={classes.headerDiv} key={i}>
                <h2>{id.date}</h2>
              </div>
              <Grid container spacing={0}>
                {id.data.map((dt, i2) => (
                  <Grid item xs={4} key={i2}>
                    <div className={classes.card}>
                      <div className={classes.cardContainer}>
                        {cardDetails(
                          dt.image,
                          dt.name,
                          dt.pos,
                          dt.status,
                          dt.description
                        )}
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default InjuriesCard;
