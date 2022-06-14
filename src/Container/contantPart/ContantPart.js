// ContantPart
import React, { useEffect, useRef } from "react";
import "./ContantPart.css";
import gsap from "gsap";
import ContantSape from "../../Components/contantShape/ContantSape";

function ContantPart(props) {
  const colorRef = useRef();

  return (
    <div
    //   className={`ContantPart normal-text ${props.answerClass}`}
    //   onClick={answerQuestion}
    //   ref={colorRef}
    >
        <ContantSape/>
    </div>
  );
}

export default ContantPart;
