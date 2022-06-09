import React, { useEffect } from "react";
import "./TextSmallTitle.css";
import gsap from "gsap";

import { Markup } from "interweave";
import Text from "./../../Text.json";
import { useNavigate } from "react-router-dom";

function TextSmallTitle(props) {
  const navigate = useNavigate();

  useEffect(() => {
    // if (props.statPage < props.pageNum) {
    props.resetPage(props.statPage);
    // }
  }, []);

  useEffect(() => {
    if (props.pageNum === 6) {
      gsap.to(".small-spirit-pic", { duration: 0.75, opacity: 1, delay: 0.75 });
    }
    if (props.pageNum === 7) {
      gsap.to(".delay", { duration: 0.75, opacity: 1, delay: 0.75 });
    }
  }, [props.pageNum]);

  console.log(props.pageNum);
  console.log(Text[props.pageNum]["pic"]);
  const handleClick = () => {
    // if (Text[props.pageNum]["next"]==="same") {
    if (props.pageNum === 7) {
      navigate("/principles");
    }
    props.changePage();
    // } else {
    //   console.log("helo");
    // }
  };

  return (
    <div className="text-with-small-title page">
      <Markup
        //   className="instructors-headline"
        content={Text[props.pageNum]["headlin"]}
      />
      <div className={`text-speech ${props.pageNum === 7 && "big-speech"}`}>
        <Markup
          //   className="question text-questions"
          content={Text[props.pageNum]["smallHeadline"]}
        />
        {Text[props.pageNum]["type"] === "with-pics" && (
          <Markup className="pics-cont" content={Text[props.pageNum]["pic"]} />
        )}
        <Markup
          className="normal-text qustions"
          content={Text[props.pageNum]["text"]}
        />
      </div>
      <div className="btn next-btn" onClick={handleClick}>
        הבא
      </div>
    </div>
  );
}

export default TextSmallTitle;
