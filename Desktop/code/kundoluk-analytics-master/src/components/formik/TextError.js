import React from 'react';
import PT from 'prop-types';

TextError.propTypes = { children: PT.any };

function TextError(props) {
  return <div className="error">{props.children}</div>;
}

export default TextError;
