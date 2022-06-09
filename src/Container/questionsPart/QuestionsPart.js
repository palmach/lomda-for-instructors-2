import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import "./QuestionsPart.css";
import { useNavigate } from "react-router-dom";
import FrueFalseQuestions from "./../../Components/trueFalseQuestions/FrueFalseQuestions";
import gsap from "gsap";
import Answers from "../../Components/answers/Answers";
import TextNoSmallTitle from "../textNoSmallTitle/TextNoSmallTitle";
import { BottomScrollListener } from "react-bottom-scroll-listener";

import { Markup } from "interweave";
import Text from "./../../Text.json";

function QuestionsPart(props) {
  const [questionNum, setQuestionNum] = useState(0);
  const [questionCaunter, setQuestionCaunter] = useState(1);
  
  const [rndQuestion, setRndQuestion] = useState([]);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [clickCaunter, setClickCaunter] = useState(0);
  const [isAnswerd, setIsAnswerd] = useState(false);

  const questions = useMemo(() => {
    setRndQuestion(props.createRndNum(rndQuestion));
  }, [rndQuestion])

  
  const scrollRef=useRef()
  const navigate = useNavigate();

  console.log(rndQuestion);

  useEffect(() => {
    // if (props.statPage < props.pageNum || props.pageNum === 0) {
    props.resetPage(props.statPage);
    setCurrQuestion(0);
    console.log(rndQuestion);
  }, []);

  useEffect(() => {
    setIsAnswerd(false);
  }, [questionCaunter]);

  useEffect(() => {
    if (clickCaunter === 2) {
      setQuestionCaunter((prev) => prev + 1);
    }
  }, [clickCaunter]);

  const handleClick = () => {
    setClickCaunter((prev) => prev + 1);
    if (questionCaunter <= 2) {
      if (isAnswerd) {
        if (questionCaunter >= 1) {
          setQuestionCaunter((prev) => prev + 1);
          setCurrQuestion(rndQuestion[questionCaunter - 1]);
        } else {
          setIsAnswerd(false);
        }
      }
    } else {
      navigate("/dear-instructors");
    }
  };
  console.log("currQuestion " +currQuestion);

  const handleContainerOnBottom = () => {
    setIsAnswerd(true);
  };

  // const onScroll = (e) => {
  //   console.log("bip1");
  //   // }
  //   // if (scrollRef.current) {
  //   //   const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
  //   //   console.log(" scrollHeight-scrollTop "+ (scrollHeight-scrollTop));
  //   //   console.log("scrollHeight " + scrollHeight);
  //   //   if (clientHeight === scrollHeight-scrollTop) {
  //   //     console.log("bip");
  //   //     setIsAnswerd(true);
  //   //   }
  //   // }
  // };

  return (
    <div className="questions-part">
      {props.pageNum === 2 ? (
        <TextNoSmallTitle
          changePage={props.changePage}
          pageNum={props.pageNum}
          setPageNum={props.setPageNum}
          statPage={2}
          resetPage={props.resetPage}
        />
      ) : (
        <div className="questions-part">
          <h1 className="small-headline question-headline">
            שאלה {questionCaunter}
          </h1>
          {questionCaunter === 1 ? (
            clickCaunter === 0 ? (
              // <BottomScrollListener onBottom={handleContainerOnBottom}>
                // {(scrollRef) => (
                  <div
                    className="text-speech normal-text quote"
                    // onScroll={onScroll}
                    ref={scrollRef}
                  >
                    <Markup
                      className="text-speech normal-text quote"
                      content={Text[props.pageNum]["speech"]}
                    />
                  </div>
                // )}
              // </BottomScrollListener>
            ) : (
              clickCaunter === 1 && (
                <div className="questions-part">
                  <h1 className="question-text">
                    {Text[props.pageNum]["mult-question"]}
                  </h1>
                  {Text[props.pageNum]["mult-answers"].map((ans, index) => {
                    return (
                      <Answers
                        ansNum={index}
                        key={index}
                        cont={ans}
                        corectAns={Text[props.pageNum]["answer"]}
                        setIsAnswerd={setIsAnswerd}
                        isAnswerd={isAnswerd}
                        answerClass="multi-ans"
                      />
                    );
                  })}
                  {isAnswerd && (
                    <p className="explain-text explain-mult">
                      {Text[props.pageNum]["explain-mult"] }
                    </p>
                  )}
                </div>
              )
            )
          ) : (
            <div className="questions-part">
              <h1 className="question-text">
                {Text[props.pageNum]["y-n-questions"][currQuestion]}
              </h1>
              <div className="true-false-cont">
                <Answers
                  ansNum={1}
                  cont={"נכון"}
                  corectAns={Text[props.pageNum]["y-n-answers"][currQuestion]}
                  setIsAnswerd={setIsAnswerd}
                  isAnswerd={isAnswerd}
                  answerClass="true-false"
                />
                <Answers
                  ansNum={0}
                  cont={"לא נכון"}
                  corectAns={Text[props.pageNum]["y-n-answers"][currQuestion]}
                  setIsAnswerd={setIsAnswerd}
                  isAnswerd={isAnswerd}
                  answerClass="true-false"
                />
              </div>
            </div>
            // <FrueFalseQuestions questionNum={questionNum} rndQuestion={rndQuestion} handleClick={handleClick} />
          )}
          {isAnswerd && (
            <div className=" after-question ">
              {questionCaunter > 1 && (
                <p className="explain-text">
                  {Text[props.pageNum]["explains"][currQuestion]}
                  {/* {Text[props.pageNum]["explains"][currQuestion]} */}
                </p>
              )}
              <div className="btn question-btn" onClick={handleClick}>
                הבא
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuestionsPart;
