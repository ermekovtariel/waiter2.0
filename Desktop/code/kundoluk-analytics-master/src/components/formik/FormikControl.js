import React from 'react';
import PT from 'prop-types';

import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

FormikControl.propTypes = { control: PT.string };

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
