import React, { useEffect, useState } from "react";
import "./EndPart.css";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Answers from "../../Components/answers/Answers";

import { Markup } from "interweave";
import Text from "./../../Text.json";

function EndPart(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.resetPage(props.statPage);
  }, []);


  return (
    // <div className="end-part">
      <div className="page big-text-cont text-speech make-scroll">
        <Markup className="" content={Text[props.pageNum]["text"]} />
        {/* <Markup content={Text[props.pageNum]["text"][moveToPart]["headline"]} /> */}
        <div className="btn start-btn" >
          הבא
        </div>
      </div>
    // </div>
  );
}

export default EndPart;
