import React, { useEffect, useState, useMemo } from "react";
import "./QuestionsPart.css";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Answers from "../../Components/answers/Answers";
import TextNoSmallTitle from "../textNoSmallTitle/TextNoSmallTitle";

import { Markup } from "interweave";
import Text from "./../../Text.json";

function QuestionsPart(props) {
  const [questionCaunter, setQuestionCaunter] = useState(1);
  const [rndQuestion, setRndQuestion] = useState([]);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [clickCaunter, setClickCaunter] = useState(0);
  const [isAnswerd, setIsAnswerd] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions = useMemo(() => {
    setRndQuestion(props.createRndNum(rndQuestion));
  }, [rndQuestion]);

  const navigate = useNavigate();

  useEffect(() => {
    //restart the page counter
    props.resetPage(props.statPage);
    setCurrQuestion(0);
  }, []);

  useEffect(() => {
    //when a question is changed make botton colors and next button disapper
    setIsAnswerd(false);
  }, [questionCaunter]);

  useEffect(() => {
    // if changed from mult question to yes/no questions set the counter and the current question num
    if (clickCaunter === 2) {
      console.log("09898");
      setQuestionCaunter((prev) => prev + 1);
      setCurrQuestion(rndQuestion[questionCaunter - 1]);
    }
  }, [clickCaunter]);

  const handleClick = () => {
    setClickCaunter((prev) => prev + 1);
    if (questionCaunter <= 2) {
      if (isAnswerd) {
        if (clickCaunter > 1) {
          setIsAnswerd(false);
          setQuestionCaunter((prev) => prev + 1);

          setCurrQuestion(rndQuestion[questionCaunter - 1]);
        } else if (clickCaunter === 1) {
          setIsAnswerd(true);
        }
      }
    } else {
      navigate("/dear-instructors");
    }
  };
  console.log("currQuestion " + currQuestion);
  console.log("isCorrect " + isCorrect);

  return (
    <div className="questions-part">
      {props.pageNum === 2 ? (
        <TextNoSmallTitle
          //sand to explain about questions
          changePage={props.changePage}
          pageNum={props.pageNum}
          setPageNum={props.setPageNum}
          statPage={2}
          resetPage={props.resetPage}
        />
      ) : (
        <div className="questions-part ">
          <h1 className="small-headline question-headline">
            שאלה {questionCaunter}
          </h1>
          {questionCaunter === 1 ? (
            clickCaunter === 0 ? (
              //quote part in question 1
              <div className="text-speech make-scroll normal-text quote">
                <Markup
                  className="text-speech normal-text quote"
                  content={Text[props.pageNum]["speech"]}
                />
                <div className="btn question-btn" onClick={handleClick}>
                  הבא
                </div>
              </div>
            ) : (
              clickCaunter === 1 && (
                <div className="questions-part make-scroll">
                  <h1 className="question-text">
                    {Text[props.pageNum]["mult-question"]}
                  </h1>
                  {Text[props.pageNum]["mult-answers"].map((ans, index) => {
                    //create multipul questions
                    return (
                      <Answers
                        ansNum={index}
                        key={index}
                        cont={ans}
                        corectAns={Text[props.pageNum]["answer"]}
                        setIsAnswerd={setIsAnswerd}
                        isAnswerd={isAnswerd}
                        answerClass="multi-ans"
                        isCorrect={isCorrect}
                        setIsCorrect={setIsCorrect}
                      />
                    );
                  })}
                  <p className={`explain-text explain-mult ${isCorrect &&"try-again"}`}>
                    {isCorrect &&
                      //if is answerd wrong the try again text will show
                      "נסה שוב"}
                    {isAnswerd &&
                      //if is answerd corrct the try again text will show
                      Text[props.pageNum]["explain-mult"]}
                  </p>
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
                  //create right and wrong buttons
                  ansNum={1}
                  cont={"נכון"}
                  corectAns={Text[props.pageNum]["y-n-answers"][currQuestion]}
                  setIsAnswerd={setIsAnswerd}
                  isAnswerd={isAnswerd}
                  answerClass="true-false"
                  isCorrect={isCorrect}
                  setIsCorrect={setIsCorrect}
                />
                <Answers
                  ansNum={0}
                  cont={"לא נכון"}
                  corectAns={Text[props.pageNum]["y-n-answers"][currQuestion]}
                  setIsAnswerd={setIsAnswerd}
                  isAnswerd={isAnswerd}
                  answerClass="true-false"
                  isCorrect={isCorrect}
                  setIsCorrect={setIsCorrect}
                />
              </div>
            </div>
          )}
          {isAnswerd && (
            <div className=" after-question ">
              {questionCaunter > 1 && (
                <p className={`explain-text explain-mult ${isCorrect &&"try-again"}`}>
                  {isCorrect &&
                    //if is answerd wrong the try again text will show
                    "נסה שוב"}
                  {isAnswerd &&
                    //if is answerd corrct the try again text will show
                    Text[props.pageNum]["explains"][currQuestion]}
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
