// AboutPage

import React from "react";
import "./AboutPage.css";

function AboutPage(props) {
  return (
    <div className="about-page">
        <p className="about-headline">אודות</p>
        <p className="about-text"><span className="about-titles">ראש מדור מט"ח: </span>רס''ן מור יהלומי-דהאן</p>
        <p className="about-text"><span className="about-titles">מפקדת הדיגיטל: </span>סגן יעל חפץ</p>
        <p className="about-text"><span className="about-titles">מפקדת סטודיו: </span>סג''ם שיר יפה</p>
        <p className="about-text"><span className="about-titles">מפתחת הלומדה: </span>סמל זוהר סלע</p>
        <p className="about-text"><span className="about-titles">עיצוב: </span>סמל אריאל ליכטמן</p>
        <p className="about-text"><span className="about-titles">מומחה התוכן: </span>סרן לישי מירזזדה</p>
        {/* <p className="about-text"><span className="about-titles">מאשר מקצועי: </span>רס"ן רעות שלום</p> */}
    </div>
  );
}

export default AboutPage;
