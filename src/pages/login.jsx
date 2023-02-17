import {
  ButtonGroup,
  colors,
  StyledFormArea,
  StyledExtraText,
  StyledTextLink,
  StyledTitle,
} from "../components/Styles";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import { FiMail, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import { Bars } from "react-loader-spinner";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Login = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = async (values) => {
    try {
      setSubmitting(true);
      const response = await axios.post("http://localhost:4000/user/login", values);
      
      if (response.data.status === "SUCCESS") {
        window.alert(response.data.message);
        window.localStorage.setItem('isAuthenticated','true')
        setIsAuthenticated(true);
      } else {
        window.alert(`${response.data.message},please retry`);
        setSubmitting(false);
      }
    } catch (error) {
      window.alert("An error occurred while logging in");
      setSubmitting(false);
    }
  };
   useEffect(()=>{window.localStorage.setItem('isAuthenticated','false')},[])
  return (
    <>
      {!isAuthenticated && (
        <div>
          <StyledFormArea>
            <StyledTitle size={15} color={colors.theme}>
              Login to GPS data analytics
            </StyledTitle>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values) => {
                handleLogin(values);
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .required("required")
                  .email("Invalid email address"),
                password: Yup.string()
                  .required("required")
                  .min(8, "too short")
                  .max(30, "too long"),
              })}
            >
              {() => (
                <Form>
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
                      <button className="login_button" type="submit">
                        Login
                      </button>
                    )}
                  </ButtonGroup>
                </Form>
              )}
            </Formik>

            <StyledTextLink size={10} to="/signup">
              <StyledExtraText size={10}>New here?</StyledExtraText>Sign-Up!
            </StyledTextLink>
          </StyledFormArea>
        </div>
      )}
      { isAuthenticated && <Navigate to="/dashboard" />}
      
    </>
  );
};
export default Login;
