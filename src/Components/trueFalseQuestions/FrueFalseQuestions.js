import React, { useEffect, useState } from "react";
import "./FrueFalseQuestions.css";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Answers from "../answers/Answers";

// import { Markup } from "interweave";
// import Text from "./../../Text.json";

function  FrueFalseQuestions(props) {
  const [questionNum, setQuestionNum] = useState(0);
  const [questionCaunter, setQuestionCaunter] = useState(1);


  const navigate = useNavigate();

    // useEffect(() => {
    // //   gsap.to(".questions-part", { opacity: 0, duration: 0.25, delay: 2.15 });
    //     // יתנס פה אפקט שמזיז את הטקסט 
    //   }, []);

  return (
    <div className="questions-part">
        <Answers cont={"נכון"}  questionNum={props.questionNum} ans={0} />
        <Answers cont={"לא נכון"}  questionNum={props.questionNum} ans={1} />
    </div>
  );
}

export default  FrueFalseQuestions;
