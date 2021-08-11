import classes from "./Home2.module.css";
import TopBar from "./sections/TopBar/TopBar";
import Podcast from "./sections/Podcast/Podcast";
import Highlights from "./sections/Highlights/Highlights";
import Videos from "./sections/Videos/Videos";
import News from "./sections/News/News";
import Aboutus from "./sections/Aboutus/Aboutus";
import dotsBack1 from "./assets/dotsBack.png";
const Home2 = () => {
  return (
    <div>
      <div>
        <TopBar />
      </div>
      <div style={{ position: "relative" }}>
        <div className={classes.dotsOverlay}>
          <img src={dotsBack1} alt="dotsBack1" width="700px" />
        </div>
        <div>
          <Podcast />
        </div>
        <div>
          <Highlights />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className={classes.dotsOverlay2}>
          <img src={dotsBack1} alt="dotsBack1" width="700px" />
        </div>
        <div>
          <Videos />
        </div>
        <div>
          <News />
        </div>
        <div>
          <Aboutus />
        </div>
      </div>
    </div>
  );
};
export default Home2;
