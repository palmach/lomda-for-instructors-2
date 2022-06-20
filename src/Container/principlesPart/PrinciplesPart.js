import React, { useEffect, useState, useRef } from "react";
import "./PrinciplesPart.css";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";

import PrinciplesShape from "../../Components/principlesShape/PrinciplesShape";
import ContantSape from "../../Components/contantShape/ContantSape"
import { Markup } from "interweave";
import Text from "./../../Text.json";

function PrinciplesPart(props) {
  const [isMoving, setIsMoving] = useState(false);

  // const [showBtnIn, setShowBtnIn] = useState(4);
  const [moveToPart, setMoveToPart] = useState();
  const [partsCounter, setPartsCounter] = useState(0);
  const [changeArray, setChangeArray] = useState(["", "", "", ""]);

  const navigate = useNavigate();
  useEffect(() => {
    props.resetPage(props.statPage);
    // setChangeArray(["", "", "", "",""]);
    console.log(props.pageNum);
    // if(props.pageNum===8){
    //   setShowBtnIn(3);
    // } else {
    //   setShowBtnIn(4);

    // }

    // console.log(showBtnIn);
  }, []);

  const backToPic = () => {
    if (changeArray[moveToPart] === "") {
      setPartsCounter((prev) => prev + 1);
      let newArray = [...changeArray];
      newArray[moveToPart] = "1";
      setChangeArray(newArray);
    }

    setIsMoving(false);
    console.log(partsCounter);
    // if (partsCounter === 4) {
    //   console.log("its 4");
    // }
  };
  const handleClick = () => {
    console.log("kjppp");
    navigate("/contant");
  };

  return (
    <div className=" page">
      {isMoving ? (
        <div className={`page `}>
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
          {/* {props.pageNum===8? */}
          <PrinciplesShape
            pageNum={props.pageNum}
            setIsMoving={setIsMoving}
            setMoveToPart={setMoveToPart}
            moveToPart={moveToPart}
            partsCounter={partsCounter}
            setChangeArray={setChangeArray}
            changeArray={changeArray}
          />
          {/* :
          <ContantSape
            pageNum={props.pageNum}
            setIsMoving={setIsMoving}
            setMoveToPart={setMoveToPart}
            moveToPart={moveToPart}
            partsCounter={partsCounter}
            setChangeArray={setChangeArray}
            changeArray={changeArray}
          />

          } */}
          <Markup
            //   className="instructors-headline"
            content={Text[props.pageNum]["orders"]}
          />
{/* 
          {
            partsCounter === showBtnIn && (
              <div className="btn question-btn" onClick={handleClick}>
                הבא
              </div>
            )
            
          } */}

          {partsCounter === 4 && (
            <div className="btn question-btn" onClick={handleClick}>
              הבא
            </div>
          )}
          {/* {props.pageNum===8?
          :
          partsCounter === 5 && (
            <div className="btn question-btn" onClick={handleClick}>
              הבא
            </div>
          )
        } */}
        </div>
      )}
    </div>
  );
}

export default PrinciplesPart;
