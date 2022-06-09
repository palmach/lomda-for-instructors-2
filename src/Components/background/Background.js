import React from "react";
import "./Background.css";

function Background(props) {
  return (
    <div className="background">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2135.09 2670.15"
        className="background-bals"
      >
        <defs>
          <linearGradient
            id="New_Gradient_Swatch_copy_6"
            x1="375.89"
            y1="510.02"
            x2="1875.82"
            y2="2009.94"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#e4f3fd" />
            <stop offset="0.21" stopColor="#e0f1fc" />
            <stop offset="1" stopColor="#4ab3d8" />
          </linearGradient>
          <linearGradient
            id="linear-gradient"
            x1="2312.88"
            y1="2019.42"
            x2="2873.04"
            y2="2019.42"
            gradientTransform="translate(3959.85 -1776.54) rotate(99.19)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.24" stopColor="#75f2f2" />
            <stop offset="1" stopColor="#2689c6" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="3485.72"
            y1="2981.31"
            x2="4237.2"
            y2="2981.31"
            gradientTransform="translate(5074.15 -1283.59) rotate(99.19)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-3"
            x1="2321.07"
            y1="3203.22"
            x2="3132.41"
            y2="3203.22"
            gradientTransform="translate(4268.08 -918.37) rotate(99.19)"
            xlinkHref="#linear-gradient"
          />
          {/* <linearGradient
            id="New_Gradient_Swatch_copy_6-2"
            x1="443.27"
            y1="576.13"
            x2="1808.78"
            y2="1941.63"
            xlinkHref="#New_Gradient_Swatch_copy_6"
          /> */}
        </defs>
        <g  className="cls-1">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              {/* <rect
                 className="cls-2"
                x="585.93"
                y="299.98"
                width="1079.85"
                height="1920"
              /> */}
              <circle
                 className="bal1"
                cx="1552.12"
                cy="460.64"
                r="280.09"
                transform="translate(128.88 1232.43) rotate(-45)"
              />
              <circle
                 className="bal3"
                cx="1514.22"
                cy="2052.19"
                r="375.75"
                transform="translate(-1007.61 1671.79) rotate(-45)"
              />
              <circle
                 className="bal2"
                cx="670.32"
                cy="1261.78"
                r="405.68"
                transform="translate(-695.88 843.56) rotate(-45)"
              />
            </g>
          </g>
        </g>
      </svg>
     </div>
  );
}

export default Background;
