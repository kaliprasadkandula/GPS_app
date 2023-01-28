import styled from "styled-components";
import background from "./../assets/bg.png";
import { Link } from "react-router-dom";

export const colors = {
  primary: "#FFF",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1f2937",
  dark2: "#4b5563",
  dark3: "#9ca3af",
  red: "#dc2626",
};

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "Black")};
  padding: 5px;
  margin-bottom: 10px;
`;

export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "Black")};
  padding: 5px;
  margin-bottom: 15px;
`;

export const StyledButton = styled(Link)`
margin: 2px;
padding: 10px;
width: 80px;
background-color: transparent;
font-size: 10px;
border: 2px solid ${colors.theme};
border-radius: 10px;
text-decoration: none;
text-align: center;
transition: ease-in-out 0.1s;
background-color: ${colors.primary};
color:${colors.theme};
&:hover {
  background-color: ${colors.theme};
  color:${colors.primary};
  cursor: pointer;
}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 15px;
  font-weight: bold;
  
`;

export const StyledTextInput = styled.input`
  width: 280px;
  padding: 10px;
  padding-left: 40px;
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors.primary};
  border: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;
  border-radius: 8px;
  ${(props) =>
    props.invalid &&
    `
        background-color:${colors.red};
        color:${colors.primary};
        `}
  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export const StyledLabel = styled.p`
  padding-left: 5px;
  text-align: left;
  font-size: 13px;
  font-weight: bold;
  color:Black;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => colors.light2};
  padding: 30px 55px;
  text-align: center;
  border-radius: 15px;
`;

export const StyledFormButton = styled(Link)`
  margin: 2px;
  padding: 10px;
  width: 80px;
  background-color: transparent;
  font-size: 10px;
  border: 2px solid ${colors.theme};
  border-radius: 10px;
  text-decoration: none;
  transition: ease-in-out 0.1s;
  background-color: ${colors.primary};
  color:${colors.theme};
  &:hover {
    background-color: ${colors.theme};
    color:${colors.primary};
    cursor: pointer;
  }
`;

export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 15px;
  top: 30px;
  ${(props) => props.right && `right:15px;`}
  ${(props) => !props.right && `left:10px;`}
`;

export const StyledErrorMsg = styled.div`
  color: ${colors.red};
  font-size: 11px;
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
  font-weight: bold;
`;

export const StyledExtraText = styled.p`
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  font-size: ${(props) => props.size}px;
  text-align: center;
  padding: 2px;
  margin-top: 10px;
  letter-spacing: 1px;
  display: inline-block;
`;

export const StyledTextLink = styled(Link)`
  font-size: ${(props) => props.size}px;
  font-weight: bold;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
    letter-spacing: 1px;
    font-size:12px;
  }
`;

export const StyledCopyRight=styled.p`
  padding:5px;
  margin:2px;
  text-align: center;
  font-size:10px;
  color: ${colors.dark1};
`