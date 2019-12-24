import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import SignUpFormComponent from "../../components/SignUpForm";
import { SignUpFormData } from "../../types/SignUpForm";
import {
  firebaseAuth,
  getFieldNameAndMessageFromError
} from "../../utils/firebaseAuth";

const checkIfFieldsAreEmpty = (fieldValues: SignUpFormData) => {
  const { email, password, confirmationPassword } = fieldValues;
  return (
    email.length === 0 ||
    password.length === 0 ||
    confirmationPassword.length === 0
  );
};

const checkIfPasswordsAreSame = (
  password: string,
  confirmationPassword: string
) => {
  // Should not be true if either of them are empty strings
  // If either of them are empty checkIfFieldsAreEmpty should disable submit button, but in case
  if (password === "" || confirmationPassword === "") return false;
  return password === confirmationPassword;
};

const SignUpForm: React.FC = () => {
  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState(false);

  // TODO: Cut out onSubmit handler to a different function
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmationPassword: ""
    },
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const { email, password, confirmationPassword } = values;
      if (!checkIfPasswordsAreSame(password, confirmationPassword)) {
        setFieldError("confirmationPassword", "Passwords are not the same");
        setSubmitting(false);
        return;
      }

      try {
        await firebaseAuth.createUserWithEmailAndPassword(email, "password");
        window.location.reload();
      } catch (error) {
        const [fieldName, errorMessage] = getFieldNameAndMessageFromError(
          error
        );
        setFieldError(fieldName, errorMessage);
        setSubmitting(false);
      }
    }
  });

  // TODO: Is this correct?
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
      formErrors={formik.errors}
    />
  );
};

export const VisibleForTesting = {
  checkIfFieldsAreEmpty,
  checkIfPasswordsAreSame
};

export default SignUpForm;
