import classes from "./Article.module.css";
import articleI from "../../assets/article.png";
const Article = ({ article }) => {
  return (
    <div>
      <div className={classes.imageContainer}>
        <div className={classes.mainTextContainer}>
          <div className={classes.leftTextContainer}>
            <p className={classes.leftText1}>by</p>
            <p className={classes.leftText2}>Josh Shepardson</p>
            <p className={classes.leftText3}>|</p>
            <p className={classes.leftText4}>@BChad50</p>
            <p className={classes.leftText5}>|</p>
            <p className={classes.leftText6}>Featured Writer</p>
          </div>
          <div className={classes.rightTextContainer}>
            <p>Jun 24, 2021</p>
          </div>
        </div>
        <img src={articleI} alt="article" width="100%" />
      </div>
      <div className={classes.articleContainer}>
        <p className={classes.textSmall}>{article.smallText}</p>
        {article.desc1.map((art, i) => (
          <p className={classes.textDescription} key={i}>
            {art}
            {}
          </p>
        ))}

        <p className={classes.textQuote}>{article.quote}</p>
        {article.desc2.map((art, i) => (
          <p className={classes.textDescription} key={i}>
            {art}
            {}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Article;
