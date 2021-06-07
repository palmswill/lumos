import React, { useState } from "react";
import { Card } from "semantic-ui-react";

const FlipCard = ({ FrontCard, BackCard, style, flipped }) => {
  ///if no flipped setted, default is not flipped

  const [isFlipped, setisFlipped] = useState(flipped ? flipped : false);

  const unflippedStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.8s",
    transformStyle: "preserved-3d",
  };

  const flippedStyle = {
    ...unflippedStyle,
    transform: "rotateY(180deg)",
  };

  //shared style for both front & back
  const shardCardStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    WebkitBackfaceVisibility: "hidden",
    transformStyle: "preserved-3d",
    backfaceVisibility: "hidden",

    opacity: "0.99",
  };

  const frontCardStyle = {
    ...shardCardStyle,
  };

  const backCardStyle = {
    ...shardCardStyle,
    transform: "rotateY(180deg)",
  };

  return (
    <div
      className="flip-card"
      style={{ height: "20vh", backgroundColor: "transparent" }}
    >
      <div
        className="flip-card-inner"
        style={isFlipped ? flippedStyle : unflippedStyle}
      >
        <div className="front" style={shardCardStyle}>
          {
            <Card
              header={"front"}
              meta={isFlipped ? "yes" : "no"}
              style={{ height: "100%" }}
              onClick={() => setisFlipped(!isFlipped)}
            />
          }
        </div>
        <div className="back" style={backCardStyle}>
          {<Card header={"back"} />}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
