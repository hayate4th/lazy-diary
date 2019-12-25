import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import SignInFormComponent from "../../components/SignInForm";
import { UserAuthenticationData } from "../../types/UserAuthentication";
import {
  firebaseAuth,
  getFieldNameAndMessageFromError
} from "../../utils/firebaseAuth";
import { checkIfFieldsAreEmpty } from "../../utils/userAuthentication";

interface Props {
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSigningIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInForm: React.FC<Props> = ({ setIsSignedIn, setIsSigningIn }) => {
  const [signInButtonIsDisabled, setSignInButtonIsDisabled] = useState(false);

  const onSubmitHandler = async (
    values: UserAuthenticationData,
    setSubmitting: (isSubmitting: boolean) => void,
    setFieldError: (field: string, message: string) => void
  ) => {
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
      const [fieldName, errorMessage] = getFieldNameAndMessageFromError(error);
      setFieldError(fieldName, errorMessage);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { setSubmitting, setFieldError }) =>
      onSubmitHandler(values, setSubmitting, setFieldError)
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

export default SignInForm;
