import React, { useEffect, useState, useRef } from "react";
import "./PrinciplesPart.css";
import gsap from "gsap";

import PrinciplesShape from "../../Components/principlesShape/PrinciplesShape";

// import { Markup } from "interweave";
import Text from "./../../Text.json";

function PrinciplesPart(props) {
  const colorRef = useRef();

  //   const [questionNum, setQuestionNum] = useState(0);
  //   const [questionCaunter, setQuestionCaunter] = useState(1);

  return (
    <div
    //   className={`PrinciplesPart normal-text ${props.answerClass}`}
    //   onClick={answerQuestion}
    //   ref={colorRef}
    >
      <PrinciplesShape/>
    </div>
  );
}

export default PrinciplesPart;
