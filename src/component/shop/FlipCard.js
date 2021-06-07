import React, { useState } from "react";
import { Card } from "semantic-ui-react";

const FlipCard = ({ FrontCard, BackCard, style, flipped }) => {
  ///if no flipped setted, default is not flipped

  const [isFlipped, setisFlipped] = useState(flipped ? flipped : false);

  const unflippedStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
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
    backfaceVisibility: "hidden"

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
      style={{
        height: "20vh",
        backgroundColor: "transparent",
        perspective: "1000px",
      }}
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
          {
            <Card
              header={"back"}
              style={{ height: "100%" }}
              onClick={() => setisFlipped(!isFlipped)}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
