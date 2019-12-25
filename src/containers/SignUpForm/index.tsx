import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import SignUpFormComponent from "../../components/SignUpForm";
import { SignUpFormData } from "../../types/SignUpForm";
import {
  firebaseAuth,
  getFieldNameAndMessageFromError
} from "../../utils/firebaseAuth";

interface Props {
  setHasSignedUp: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const SignUpForm: React.FC<Props> = ({ setHasSignedUp }) => {
  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState(false);

  const onSubmitHandler = async (
    values: SignUpFormData,
    setSubmitting: (isSubmitting: boolean) => void,
    setFieldError: (field: string, message: string) => void
  ) => {
    const { email, password, confirmationPassword } = values;
    if (!checkIfPasswordsAreSame(password, confirmationPassword)) {
      setFieldError("confirmationPassword", "Passwords are not the same");
      setSubmitting(false);
      return;
    }

    try {
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await user?.sendEmailVerification();
      setHasSignedUp(true);
    } catch (error) {
      const [fieldName, errorMessage] = getFieldNameAndMessageFromError(error);
      setFieldError(fieldName, errorMessage);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmationPassword: ""
    },
    onSubmit: (values, { setSubmitting, setFieldError }) =>
      onSubmitHandler(values, setSubmitting, setFieldError)
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
      formErrors={formik.errors}
      handleSubmit={formik.handleSubmit}
      inputChangeHandler={inputChangeHandler}
    />
  );
};

export const VisibleForTesting = {
  checkIfFieldsAreEmpty,
  checkIfPasswordsAreSame
};

export default SignUpForm;
