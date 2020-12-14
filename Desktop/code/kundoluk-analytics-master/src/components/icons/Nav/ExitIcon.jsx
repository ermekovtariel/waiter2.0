import React, { PureComponent } from 'react';

export default class ExitIcon extends PureComponent {
  render() {
    return (
      <div className="IconsContents">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 11.5556L3.55556 8L8 4.44444V7.11111H16V8.88889H8V11.5556Z"
            fill="#949BEB"
          />
          <path
            d="M1.77778 0H9.77778C10.7582 0 11.5556 0.797333 11.5556 1.77778V5.33333H9.77778V1.77778H1.77778V14.2222H9.77778V10.6667H11.5556V14.2222C11.5556 15.2027 10.7582 16 9.77778 16H1.77778C0.797333 16 0 15.2027 0 14.2222V1.77778C0 0.797333 0.797333 0 1.77778 0Z"
            fill="#949BEB"
          />
        </svg>
      </div>
    );
  }
}
