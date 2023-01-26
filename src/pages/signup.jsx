import {
  ButtonGroup,
  colors,
  StyledFormArea,
  StyledSubTitle,
  StyledFormButton,
  StyledExtraText,
  StyledTextLink,
  StyledTitle,
} from "../components/Styles";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import * as Yup from "yup";
import { Bars } from "react-loader-spinner";
const SignUp = () => {
  return (
    <div>
      <StyledFormArea>
        <StyledTitle size={15} color={colors.theme}>
          Welcome to GPS data analytics
        </StyledTitle>
        <StyledSubTitle size={11} color={colors.light1}>
          please signup
        </StyledSubTitle>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            retypepassword: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
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
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="name"
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
                  <StyledFormButton type="submit" to="/login">
                    Sign-Up
                  </StyledFormButton>
                )}
              </ButtonGroup>
              <StyledTextLink size={10} to="/signup">
                <StyledExtraText size={10}>
                  Already have account?
                </StyledExtraText>
                Login
              </StyledTextLink>
            </Form>
          )}
        </Formik>
      </StyledFormArea>
    </div>
  );
};
export default SignUp;
