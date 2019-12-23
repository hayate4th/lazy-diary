import React from "react";
import { useFormik } from "formik";

import SignUpFormComponent from "../../components/SignUpForm";

const SignUpForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmationPassword: ""
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    formik.setFieldValue(fieldName, event.currentTarget.value);
  };

  return (
    <SignUpFormComponent
      submitButtonIsDisabled={false}
      formValues={formik.values}
      handleSubmit={formik.handleSubmit}
      inputChangeHandler={inputChangeHandler}
    />
  );
};

export default SignUpForm;
