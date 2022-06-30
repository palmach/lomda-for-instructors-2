import React, { useEffect, useState } from "react";
import "./EndPart.css";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Answers from "../../Components/answers/Answers";

import { Markup } from "interweave";
import Text from "./../../Text.json";

function EndPart(props) {
  const [part, setPart] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    props.resetPage(props.statPage);
  }, []);

  return (
    <div className="end-part page">
      {part === 0 ? (
        <div className=" big-text-cont text-speech make-scroll">
          <Markup className="" content={Text[props.pageNum]["text"]} />
          {/* <Markup content={Text[props.pageNum]["text"][moveToPart]["headline"]} /> */}
          <div className="btn start-btn" onClick={() => setPart(1)}>
            הבא
          </div>
        </div>
      ) : (
        <div className="test-page"> 
          <p className=' small-margin pic-text text-side bold-text centerd'>מודרך יקר, הגעת לתום התדרוך!</p>
          <p className=' small-margin pic-text text-side bold-text centerd'>לסיום התהליך אנא לחצו כאן למילוי מבחן הבקיאות.</p>
          <a href="https://forms.gle/4webxjucGHqT5cma9" target="_blank" rel="noreferrer">
          <div
            className="btn start-btn"
            //להוסיף שבלחיצה עובר לקישור של המבחן
            >
            למבחן
          </div>

          </a>
            <p className=' small-margin pic-text text-side bold-text centerd'>תודה על שיתוף הפעולה!</p>
            <p className=' small-margin pic-text text-side bold-text centerd'>במידה וקיימים פערים, אנא פנו לאיש קשר שהפנה אתכם.</p>
          <div
            className="btn start-btn" onClick={() => navigate("/about")}
            >
            אודות
          </div>
        </div>
      )}
    </div>
  );
}

export default EndPart;
