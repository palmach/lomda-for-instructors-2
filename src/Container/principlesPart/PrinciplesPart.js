import React, { useEffect, useState, useRef } from "react";
import "./PrinciplesPart.css";
import gsap from "gsap";

import PrinciplesShape from "../../Components/principlesShape/PrinciplesShape";

import { Markup } from "interweave";
import Text from "./../../Text.json";

function PrinciplesPart(props) {
  const colorRef = useRef();

  useEffect(() => {
      props.resetPage(props.statPage);
  }, []);


  return (
    <div
    //   className={`PrinciplesPart normal-text ${props.answerClass}`}
    >
       <Markup
        //   className="instructors-headline"
        content={Text[props.pageNum]["headlin"]}
      />
      <PrinciplesShape />
       <Markup
        //   className="instructors-headline"
        content={Text[props.pageNum]["orders"]}
      />

    </div>
  );
}

export default PrinciplesPart;
