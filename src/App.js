import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./Components/background/Background";
import FirstPage from "./Container/firstPage/FirstPage";
import TextNoSmallTitle from "./Container/textNoSmallTitle/TextNoSmallTitle";
import QuestionsPart from "./Container/questionsPart/QuestionsPart";
import TextSmallTitle from "./Container/textSmallTitle/TextSmallTitle";
import PrinciplesPart from "./Container/principlesPart/PrinciplesPart";

function App() {
  const [pageNum, setPageNum] = useState(0);

  const createRndNum= (rndQuestion)=>{
    rndQuestion.push(Math.floor(Math.random() * (5 - 0 + 1)) + 0);
    let num = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    while (rndQuestion[0] === num) {
      num = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    }
    rndQuestion.push(num);
    // console.log(rndQuestion);
    return (rndQuestion)
  }

  const changePage = () => {
    setPageNum((prev) => prev + 1);
  };
  const resetPage = (statPage) => {
    setPageNum(statPage);
  };

  return (
    <div className="App">
      <Background />
      <div className="glass">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<FirstPage changePage={changePage} pageNum={pageNum} setPageNum={setPageNum} statPage={0} resetPage={resetPage} />} />
            <Route
              exact
              path="/questions"
              element={
                <QuestionsPart createRndNum={createRndNum} changePage={changePage} pageNum={pageNum} setPageNum={setPageNum} statPage={2} resetPage={resetPage} />
              }
            ></Route>
            <Route
              exact
              path="/dear-instructors"
              element={
                <TextSmallTitle changePage={changePage} pageNum={pageNum} setPageNum={setPageNum} statPage={4} resetPage={resetPage} />
              }
            ></Route>
            <Route
              exact
              path="/principles"
              element={
                <PrinciplesPart changePage={changePage} pageNum={pageNum} setPageNum={setPageNum} statPage={8} resetPage={resetPage} />

                // <TextSmallTitle changePage={changePage} pageNum={pageNum} setPageNum={setPageNum} statPage={4} resetPage={resetPage} />
              }
            ></Route>
            <Route
              exact
              path="/end"
              // element={<LastPage pageNum={pageNum} setPageNum={setPageNum} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
