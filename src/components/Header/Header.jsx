import * as SC from './Header.styled';

export const Header = () => {
  return (
    <SC.Wrapper>
      <SC.LinkStyled to="/">LearnLingo</SC.LinkStyled>
      <SC.Navigation>
        <SC.StyledLink to="/first">Home</SC.StyledLink>
        <SC.StyledLink to="/second">Teachers</SC.StyledLink>
      </SC.Navigation>
      <SC.AuthWrapper>
      <SC.LogInBtn>LogIn</SC.LogInBtn>
      <SC.RegistrationBtn>Register</SC.RegistrationBtn>
      </SC.AuthWrapper>
    </SC.Wrapper>
  );
};
