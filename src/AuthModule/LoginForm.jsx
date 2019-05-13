import React from "react";
import { Field } from "formik";
import { withFormik } from "formik";
import * as Yup from "yup";
import { visibility_on, visibility_off } from "../assets";

import Button from "../common/components/Button";
import FormHelperText from "../common/components/FormHelperText";
import {
  FormWrapper,
  BorderLine,
  LoginInput,
  ShowHideButton,
  FieldButtonContainer
} from "./Login.style";

const LoginInformationForm = ({
  errors,
  values,
  touched,
  isSubmitting,
  setFieldValue,
  postAuthData,
  setIsAuth
}) => {
  return (
    <FormWrapper>
      <LoginInput
        name="username"
        type="text"
        placeholder="Username"
        autoComplete="off"
      />
      <BorderLine />
      <FormHelperText
        error={touched.username && errors.username && errors.username}
      />
      <FieldButtonContainer>
        <LoginInput
          name="password"
          type={values.passwordInputType}
          placeholder="Password"
        />
        <ShowHideButton
          onClick={() =>
            setFieldValue(
              "passwordInputType",
              values.passwordInputType === "password" ? "text" : "password",
              false
            )
          }
          src={
            values.passwordInputType === "password"
              ? visibility_on
              : visibility_off
          }
        />
      </FieldButtonContainer>
      <BorderLine />
      <FormHelperText
        error={touched.password && errors.password && errors.password}
      />

      <Button
        label="login"
        type={{
          size: "big",
          margin: "bigMargin",
          fontSize: "bigFont"
        }}
        disabled={isSubmitting}
      />

      <label>
        Remember me
        <Field type="checkbox" name="remember" checked={values.remember} />
      </label>
    </FormWrapper>
  );
};

const LoginForm = withFormik({
  mapPropsToValues({ username, password, remember, passwordInputType }) {
    return {
      username: username || "",
      password: password || "",
      remember: remember || false,
      passwordInputType: passwordInputType || "password"
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    if (values.username === "andrew") {
      setErrors({ username: "Username is required" });
    } else {
      try {
        props.postAuthData({
          username: values.username,
          password: values.password,
          remember: values.remember
        });
      } catch (e) {
        console.error(e);
      }
    }
    setSubmitting(false);
  },
  validateOnBlur: false,
  validateOnChange: false
})(LoginInformationForm);

export default LoginForm;
