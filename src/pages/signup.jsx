import {
  ButtonGroup,
  colors,
  StyledFormArea,
  StyledExtraText,
  StyledTextLink,
  StyledTitle,
  buttonn,
} from "../components/Styles";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import * as Yup from "yup";
import { Bars } from "react-loader-spinner";
import { Navigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
const SignUp = () => {
  const [detailsStored, setDetailsStored] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSignUp = async (values) => {
    try {
      setSubmitting(true);
      const response = await axios.post(
        "http://localhost:4000/user/signup",
        values
      );
      if (response.data.status === "SUCCESS") {
        window.alert(response.data.message);
        setDetailsStored(true);
      } else {
        window.alert(response.data.message);
        setDetailsStored(false);
        setSubmitting(false);
      }
    } catch (error) {
      window.alert("An error occurred while signing up");
      setSubmitting(false);
    }
  };
  return (
    <div>
      {!detailsStored && (
        <StyledFormArea>
          <StyledTitle size={15} color={colors.theme}>
            Signup to GPS data analytics
          </StyledTitle>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              retypepassword: "",
            }}
            onSubmit={(values) => {
              handleSignUp(values);
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("required").max(30, "too long"),
              email: Yup.string()
                .required("required")
                .email("Invalid email address"),
              password: Yup.string()
                .required("required")
                .min(8, "too short")
                .max(30, "too long"),
              retypepassword: Yup.string()
                .required("required")
                .oneOf([Yup.ref("password")], "Passwords didn't match"),
            })}
          >
            {() => (
              <Form>
                <TextInput
                  name="name"
                  type="text"
                  label="Name"
                  placeholder="elon musk"
                  icon={<FiUser />}
                />
                <TextInput
                  name="email"
                  type="text"
                  label="Email"
                  placeholder="abc@example.com"
                  icon={<FiMail />}
                />
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="**********"
                  icon={<FiLock />}
                />
                <TextInput
                  name="retypepassword"
                  type="password"
                  label="Retype Password"
                  placeholder="**********"
                  icon={<FiLock />}
                />
                <ButtonGroup>
                  {isSubmitting && (
                    <Bars
                      ariaLabel="bars-loading"
                      height="40"
                      width="80"
                      color={colors.theme}
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  )}
                  {!isSubmitting && (
                    <button type="submit" style={buttonn}>
                      signup
                    </button>
                  )}
                </ButtonGroup>
                <StyledTextLink size={10} to="/login">
                  <StyledExtraText size={10}>
                    Already have account?
                  </StyledExtraText>
                  Login
                </StyledTextLink>
              </Form>
            )}
          </Formik>
        </StyledFormArea>
      )}
      {detailsStored && <Navigate to="/login" />}
    </div>
  );
};
export default SignUp;
