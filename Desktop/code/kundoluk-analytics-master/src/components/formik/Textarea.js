import React from 'react';
import PT from 'prop-types';
import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

Textarea.propTypes = { label: PT.string, name: PT.string };

function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Textarea;
