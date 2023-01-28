import {ButtonGroup, StyledButton, StyledSubTitle,StyledTitle} from './../components/Styles'
const Home=()=>{
    return (
        <div>
            <div>      
            </div>
            <StyledTitle size={35}>
                Gps Home page
            </StyledTitle>
            <StyledSubTitle size={15}>
                feel free to explore
            </StyledSubTitle>
            <ButtonGroup>
            <StyledButton to="/login">Login</StyledButton>
            <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>

        </div>
    )
}
export default Home