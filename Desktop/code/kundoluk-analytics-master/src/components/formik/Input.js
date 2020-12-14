import React from 'react';
import PT from 'prop-types';
import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

Input.propTypes = {
  label: PT.string,
  name: PT.string,
  icon: PT.element,
  unit: PT.string,
};

function Input(props) {
  const { label, name, icon, unit, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <div className="form-control-input">
        {icon ? <span className="form-control-input-icon">{icon}</span> : null}
        <Field id={name} name={name} {...rest} />
        {unit ? <span className="form-control-input-unit">{unit}</span> : null}
      </div>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
