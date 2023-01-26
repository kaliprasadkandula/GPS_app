import { useState } from "react";
import { useField } from "formik";
import { StyledTextInput, StyledLabel, StyledIcon, StyledErrorMsg } from "./Styles";
import { FiEye, FiEyeOff } from "react-icons/fi";
export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
      {props.type!=="password"&&<StyledTextInput {...field} {...props} invalid={meta.error&&meta.touched} />}
      {props.type==="password"&&<StyledTextInput {...field} {...props} invalid={meta.error&&meta.touched} type={show?"text":"password"}/>}

      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledIcon right={true} onClick={()=>setShow(!show)}>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {
        (meta.touched&&meta.error)?
        (<StyledErrorMsg>{meta.error}</StyledErrorMsg>):
        (<StyledErrorMsg style={{visibility:"hidden"}}>.</StyledErrorMsg>)
      }
    </div>
  );
};
