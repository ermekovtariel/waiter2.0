import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { login } from '../../store/auth/actions';
import FormikControl from '../formik/FormikControl';
import LoginIcon from '../../assets/images/LoginIcon.png';

import './LoginForm.scss';
class LoginForm extends Component {
  static propTypes = {
    login: PT.func,
    error: PT.any,
  };
  render() {
    const initialValues = {
      username: '',
      password: '',
    };

    const validationSchema = Yup.object({
      username: Yup.string().required('Введите валидный логин!'),
      password: Yup.string().required('Введите валидный пароль!'),
    });

    const onSubmit = (values) => {
      this.props.login(values.username, values.password);
    };
    const { error } = this.props;
    return (
      <div className="login_form_block">
        <div className="login_form_title">
          <p>Вход</p>
        </div>
        {error ? (
          <div className="login_form_message">
            <p>{error}</p>
          </div>
        ) : null}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="login_form">
                <FormikControl
                  control="input"
                  type="username"
                  placeholder="Логин"
                  name="username"
                  // icon={<UsernameIcon />}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormikControl
                  control="input"
                  type="password"
                  placeholder="Пароль"
                  name="password"
                  // icon={<PasswordIcon />}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <button type="submit" disabled={!formik.isValid}>
                  Войти
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
