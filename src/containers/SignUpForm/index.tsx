import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import SignUpFormComponent from "../../components/SignUpForm";
import { SignUpFormData } from "../../types/SignUpForm";

const checkIfFieldsAreEmpty = (fieldValues: SignUpFormData) => {
  const { email, password, confirmationPassword } = fieldValues;
  return (
    email.length === 0 ||
    password.length === 0 ||
    confirmationPassword.length === 0
  );
};

const SignUpForm: React.FC = () => {
  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmationPassword: ""
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
    }
  });

  // TODO: Is this correct?
  // TODO: Can this be a custom hook?
  useEffect(() => {
    setSubmitButtonIsDisabled(checkIfFieldsAreEmpty(formik.values));
  }, [formik.values]);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    formik.setFieldValue(fieldName, event.currentTarget.value);
  };

  return (
    <SignUpFormComponent
      submitButtonIsDisabled={formik.isSubmitting || submitButtonIsDisabled}
      formValues={formik.values}
      handleSubmit={formik.handleSubmit}
      inputChangeHandler={inputChangeHandler}
    />
  );
};

export const VisibleForTesting = {
  checkIfFieldsAreEmpty
};

export default SignUpForm;
