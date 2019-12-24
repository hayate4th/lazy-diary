import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import firebase from "firebase";

import SignUpFormComponent from "../../components/SignUpForm";
import { SignUpFormData } from "../../types/SignUpForm";

const firebaseConfig = {
  apiKey: "AIzaSyCyy16LnICw-2tGLqtAPbotujq8N58sL-8",
  authDomain: "lazy-diary.firebaseapp.com",
  databaseURL: "https://lazy-diary.firebaseio.com",
  projectId: "lazy-diary",
  storageBucket: "lazy-diary.appspot.com",
  messagingSenderId: "126252487591",
  appId: "1:126252487591:web:1f24a8c20d8481f9cf5c82"
};
firebase.initializeApp(firebaseConfig);

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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmationPassword: ""
    },
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const { email, password, confirmationPassword } = values;
      if (!checkIfPasswordsAreSame(password, confirmationPassword)) {
        setFieldError("confirmationPassword", "passwords are not the same");
        setSubmitting(false);
        return;
      }
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        window.location.reload();
      } catch (e) {
        console.log(e);
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
