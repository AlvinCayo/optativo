import React from "react";
import './styles/button.css'

export const Button = () => {
  return (
    <i className="circulo">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_3_41)">
          <circle cx="34" cy="32" r="20" fill="white" />
        </g>
        <path
          d="M31 27.6889V36.3111C31 37.4437 32.275 38.1075 33.2028 37.458L39.3615 33.1469C40.1577 32.5896 40.1577 31.4104 39.3615 30.8531L33.2028 26.542C32.275 25.8925 31 26.5563 31 27.6889Z"
          fill="#3C4158"
        />
        <defs>
          <filter
            id="filter0_bd_3_41"
            x="0"
            y="0"
            width="72"
            height="72"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_3_41"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="4" />
            <feGaussianBlur stdDeviation="8" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.235294 0 0 0 0 0.254902 0 0 0 0 0.345098 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_3_41"
              result="effect2_dropShadow_3_41"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_3_41"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </i>
  );
};
