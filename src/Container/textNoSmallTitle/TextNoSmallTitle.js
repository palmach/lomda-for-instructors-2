import React, { useEffect } from "react";
import "./TextNoSmallTitle.css";
import gsap from "gsap";

import { Markup } from "interweave";
import Text from "./../../Text.json";
import { useNavigate } from "react-router-dom";

function TextNoSmallTitle(props) {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (props.statPage < props.pageNum) {
      props.resetPage(props.statPage);
    }
  }, []);

  const clickStart = () => {
    if (props.pageNum === 1) {
      props.changePage();
      navigate("/questions");
    } else {
        props.changePage();    }
  };

  return (
    <div className="text-no-small-title page">
     
        {/* <div className="page"> */}
          {Text[props.pageNum]["pic"] === "y" && (
            <div className="sound-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103.85 74.46"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="sound-color"
                      d="M53.69,0a4.68,4.68,0,0,0-3.43,1.45L24.86,17.7h-20a4.7,4.7,0,0,0-3.43,1.45A4.7,4.7,0,0,0,0,22.59V51.87a4.69,4.69,0,0,0,1.45,3.44,4.69,4.69,0,0,0,3.43,1.44h20L50.26,73a4.88,4.88,0,0,0,8.31-3.43V4.88a4.71,4.71,0,0,0-1.44-3.43A4.73,4.73,0,0,0,53.69,0Z"
                    />
                    <path
                      className="sound-color"
                      d="M81.08,48a19.65,19.65,0,0,0,0-21.62,17.53,17.53,0,0,0-8.58-7.09,4.17,4.17,0,0,0-1.91-.38,4.72,4.72,0,0,0-3.43,1.41,4.63,4.63,0,0,0-1.45,3.47,4.09,4.09,0,0,0,.92,2.7,8.88,8.88,0,0,0,2.21,1.91c.86.54,1.73,1.12,2.59,1.76a7.55,7.55,0,0,1,2.21,2.7,9.33,9.33,0,0,1,.92,4.35,9.33,9.33,0,0,1-.92,4.35,7.55,7.55,0,0,1-2.21,2.7c-.86.64-1.73,1.23-2.59,1.76A9.09,9.09,0,0,0,66.63,48a4.1,4.1,0,0,0-.92,2.71,4.68,4.68,0,0,0,1.45,3.47,4.76,4.76,0,0,0,3.43,1.41,4.3,4.3,0,0,0,1.91-.38A18.07,18.07,0,0,0,81.08,48Z"
                    />
                    <path
                      className="sound-color"
                      d="M80.2,1.31a5.35,5.35,0,0,0-2-.38,4.69,4.69,0,0,0-3.43,1.44,4.69,4.69,0,0,0-1.45,3.44,4.85,4.85,0,0,0,3,4.5,47.48,47.48,0,0,1,5.8,3.35,29.22,29.22,0,0,1,8.81,36.8A28.83,28.83,0,0,1,82.11,60.8a47.48,47.48,0,0,1-5.8,3.35,4.85,4.85,0,0,0-3,4.5,4.69,4.69,0,0,0,1.45,3.44,4.75,4.75,0,0,0,3.51,1.45,5.16,5.16,0,0,0,1.9-.39A37.55,37.55,0,0,0,97.36,58.78a39,39,0,0,0,0-43.1A37.61,37.61,0,0,0,80.2,1.31Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          )}
          <Markup
            //   className="question text-questions"
            content={Text[props.pageNum]["headlin"]}
          />
          <Markup
            //   className="question text-questions"
            content={Text[props.pageNum]["text"]}
          />
          <div className="btn start-btn" onClick={clickStart}>
         { Text[props.pageNum]["btn"]}
          </div>

    </div>
  );
}

export default TextNoSmallTitle;
