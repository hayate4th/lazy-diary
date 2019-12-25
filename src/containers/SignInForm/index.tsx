import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import SignInFormComponent from "../../components/SignInForm";
import { UserAuthenticationFormData } from "../../types/UserAuthenticationForm";
import {
  firebaseAuth,
  getFieldNameAndMessageFromError
} from "../../utils/firebaseAuth";

interface Props {
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSigningIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const checkIfFieldsAreEmpty = (fieldValues: UserAuthenticationFormData) => {
  const { email, password } = fieldValues;
  return email.length === 0 || password.length === 0;
};

const SignInForm: React.FC<Props> = ({ setIsSignedIn, setIsSigningIn }) => {
  const [signInButtonIsDisabled, setSignInButtonIsDisabled] = useState(false);

  // TODO: Cut out onSubmit handler to a different function
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const { email, password } = values;
      try {
        const { user } = await firebaseAuth.signInWithEmailAndPassword(
          email,
          password
        );

        if (!user?.emailVerified) {
          setFieldError("email", "Email is not verified");
          setSubmitting(false);
          return;
        }

        setIsSignedIn(true);
        setIsSigningIn(false);
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
    setSignInButtonIsDisabled(checkIfFieldsAreEmpty(formik.values));
  }, [formik.values]);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    formik.setFieldValue(fieldName, event.currentTarget.value);
  };

  return (
    <SignInFormComponent
      signInButtonIsDisabled={formik.isSubmitting || signInButtonIsDisabled}
      formValues={formik.values}
      formErrors={formik.errors}
      handleSubmit={formik.handleSubmit}
      inputChangeHandler={inputChangeHandler}
    />
  );
};

export const VisibleForTesting = {
  checkIfFieldsAreEmpty
};

export default SignInForm;
