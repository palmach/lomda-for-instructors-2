import React, { useEffect, useState, useRef } from "react";
import "./PrinciplesPart.css";
import gsap from "gsap";

import PrinciplesShape from "../../Components/principlesShape/PrinciplesShape";
import TextNoSmallTitle from "../textNoSmallTitle/TextNoSmallTitle";

import { Markup } from "interweave";
import Text from "./../../Text.json";

function PrinciplesPart(props) {
  const [isMoving, setIsMoving] = useState(false);
  const [moveToPart, setMoveToPart] = useState(0);

  const colorRef = useRef();
  useEffect(() => {
    props.resetPage(props.statPage);
  }, []);

  const backToPic = () => {
    setIsMoving(false);
  };

  return (
    <div className=" page">
      {isMoving ? (
        <div  className={`page `}>
          <Markup
            //   className="question text-questions"
            content={Text[props.pageNum]["texts"][moveToPart]["headline"]}
          />
          <div className=" text-speech make-scroll">
            <Markup
              //   className="question text-questions"
              content={Text[props.pageNum]["texts"][moveToPart]["text"]}
            />
            <div className="btn start-btn" onClick={backToPic}>
              הבא
            </div>
          </div>
        </div>
      ) : (
        // <TextNoSmallTitle pageNum={props.pageNum} isMoving={isMoving} moveToPart={moveToPart}  setIsMoving={setIsMoving} />
        <div className={`principles-part page`}>
          <Markup
            // className="principle-headline"
            content={Text[props.pageNum]["headlin"]}
          />
          <PrinciplesShape
            pageNum={props.pageNum}
            setIsMoving={setIsMoving}
            setMoveToPart={setMoveToPart}
          />
          <Markup
            //   className="instructors-headline"
            content={Text[props.pageNum]["orders"]}
          />
        </div>
      )}
    </div>
  );
}

export default PrinciplesPart;
