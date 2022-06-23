// ContantPart
import React, { useEffect, useState, useRef } from "react";
import "./ContantPart.css";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";

// import PrinciplesShape from "../../Components/principlesShape/PrinciplesShape";
import ContantSape from "../../Components/contantShape/ContantSape"
import { Markup } from "interweave";
import Text from "./../../Text.json";

function ContantPart(props) {
  const [isMoving, setIsMoving] = useState(false);

  // const [showBtnIn, setShowBtnIn] = useState(4);
  const [moveToPart, setMoveToPart] = useState();
  const [partsCounter, setPartsCounter] = useState(0);
  const [changeArray, setChangeArray] = useState(["", "", "", "",""]);

  const navigate = useNavigate();
  useEffect(() => {
    props.resetPage(props.statPage);
    console.log(props.pageNum);
  }, []);

  const backToPic = () => {
    if (changeArray[moveToPart] === "") {
      setPartsCounter((prev) => prev + 1);
      let newArray = [...changeArray];
      newArray[moveToPart] = "1";
      setChangeArray(newArray);
    }

    setIsMoving(false);
  };
  const handleClick = () => {
    console.log("kjppp");
    navigate("/end");
  };

  return (
    <div className=" page">
      {isMoving ? (
        <div className="page big-text-cont"  >
          <Markup
            content={Text[props.pageNum]["texts"][moveToPart]["headline"]}
          />
          <div className=" text-speech make-scroll">
            <Markup
              content={Text[props.pageNum]["texts"][moveToPart]["text"]}
            />
            <div className="btn start-btn" onClick={backToPic}>
              הבא
            </div>
          </div>
        </div>
      ) : (
        <div className={`principles-part page`}>
          <Markup
            content={Text[props.pageNum]["headlin"]}
          />
          <ContantSape
            pageNum={props.pageNum}
            setIsMoving={setIsMoving}
            setMoveToPart={setMoveToPart}
            moveToPart={moveToPart}
            partsCounter={partsCounter}
            setChangeArray={setChangeArray}
            changeArray={changeArray}
          />
        
          <Markup
            content={Text[props.pageNum]["orders"]}
          />

          {partsCounter === 5 && (
            <div className="btn question-btn" onClick={handleClick}>
              הבא
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ContantPart;
