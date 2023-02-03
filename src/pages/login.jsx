import {
  ButtonGroup,
  colors,
  StyledFormArea,
  StyledSubTitle,
  StyledFormButton,
  StyledExtraText,
  StyledTextLink,
  StyledCopyRight,
  StyledTitle,
} from "../components/Styles";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import { FiMail, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import { Bars } from "react-loader-spinner";
import { connect } from "react-redux";
import { loginUser } from "../auth/actions/userActions";
import { Navigate  } from 'react-router-dom'
import {navigate, useState } from "react"
import axios from "axios"
const Login = (props) => {
  const [error, setError] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleLogin = async (values) => {
    try {
      setSubmitting(true);
      const response = await axios.post("http://localhost:4000/user/login", values);
      
      if (response.data.status === "SUCCESS") {
        setIsAuthenticated(true);
        navigate("/dashboard");
      } else {
        console.log(`authentication is failed`)
        setError("Incorrect email or password");
        setSubmitting(false);
      }
    } catch (error) {
      setError("An error occurred while logging in");
      setSubmitting(false);
    }
  };
  return (
    <>{(!isAuthenticated)&&<div>
      <StyledFormArea>
        <StyledTitle size={15} color={colors.theme}>
          Welcome to GPS data analytics
        </StyledTitle>
        <StyledSubTitle size={11} color={colors.light1}>
          please login
        </StyledSubTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async(values, { setFieldError,setSubmitting }) => {
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
          {({ isSubmitting }) => (
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
                  <button type="submit" >
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
        <StyledCopyRight>
          All copyrights &copy; T S V Kali Prasad Kandula
        </StyledCopyRight>
      </StyledFormArea>
    </div>
   
    }{ (isAuthenticated)&&<Navigate  to="/dashboard"/>}
    </>
  );
};
// export default connect(null,{loginUser})(Login);
export default Login;
