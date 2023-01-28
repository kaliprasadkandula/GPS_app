import {
  ButtonGroup,
  StyledButton,
  StyledSubTitle,
  StyledTitle,
  StyledFormArea
} from "./../components/Styles";
const Dashboard = () => {
  return (
    <div>
      <div></div>
      <StyledFormArea>
      <StyledTitle size={35}>Gps Dashboard page</StyledTitle>
      <StyledSubTitle size={15}>feel free to explore</StyledSubTitle>
        <ButtonGroup>
          <StyledButton to="/">Log out</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};
export default Dashboard;
