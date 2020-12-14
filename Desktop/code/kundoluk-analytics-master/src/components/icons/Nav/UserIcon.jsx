import React, { PureComponent } from 'react';

export default class UserIcon extends PureComponent {
  render() {
    return (
      <div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="22.75"
            fill="#C4C4C4"
            stroke="#4D58DE"
            strokeWidth="1.5"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="48"
            height="48"
          >
            <circle
              cx="24"
              cy="24"
              r="22.75"
              fill="#C4C4C4"
              stroke="#4D58DE"
              strokeWidth="1.5"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M31 21C31 24.866 27.866 28 24 28C20.134 28 17 24.866 17 21C17 17.134 20.134 14 24 14C27.866 14 31 17.134 31 21Z"
              fill="#4D58DE"
            />
            <path
              d="M40 46H8C8.488 37.0766 15.4649 30 24 30C32.5351 30 39.512 37.0766 40 46Z"
              fill="#4D58DE"
            />
          </g>
        </svg>
      </div>
    );
  }
}
