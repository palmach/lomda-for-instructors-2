import React, { useEffect } from "react";
import "./FirstPage.css";
import { useNavigate } from "react-router-dom";
import TextNoSmallTitle from "../textNoSmallTitle/TextNoSmallTitle";
import gsap from "gsap";

// import { Markup } from "interweave";
// import Text from "./../../Text.json";

function FirstPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    // if (props.statPage < props.pageNum) {
      props.resetPage(props.statPage);
    // }
  }, []);

  return (
    <div className="first-page page">
      <div className="logos-cont">
        <div className="logo1 logo"></div>
        <div className="logo2 logo"></div>
      </div>
      {props.pageNum === 0 ? (
        <div className="page">
          <p className="big-headline">זהות ותודעה יהודית בצה"ל</p>
          <p className="big-small-headline">
            תדרוך ודגשים מרכזיים למדריכים ומרצים
          </p>
          <div
            className="btn start-btn"
            onClick={() => {
              props.changePage();
            }}
          >
            התחל לומדה
          </div>
        </div>
      ) : (
        <TextNoSmallTitle
          changePage={props.changePage}
          pageNum={props.pageNum}
        />
      )}
    </div>
  );
}

export default FirstPage;
