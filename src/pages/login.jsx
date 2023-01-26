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
const Login = () => {
  return (
    <div>
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
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
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
                  <StyledFormButton type="submit" to="/login">
                    Login
                  </StyledFormButton>
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
  );
};
export default Login;
