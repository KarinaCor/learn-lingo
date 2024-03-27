import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid blue; */
  padding-left: 128px;
  padding-right: 128px;
  padding-top:20px;
  padding-bottom:20px;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  width: 100%;
  max-width: 160px;
  /* height: 40px; */
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #121417;

  /* &:hover,
  &:focus {
    background-color: #0b44cd;
  } */
`;

export const StyledLink = styled(Link)`
  color: #121417;
  font-size: 16px;
  line-height: 1.25;
  transition: color (#f4c550);
`;

export const Navigation = styled.nav`
gap:28px;
display: flex;
`

export const AuthWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const LogInBtn = styled.button`
  cursor: pointer;
  color: var(--main-text-color);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration-color: transparent;
  transition:
    text-decoration var(--transition),
    text-decoration-color #f4c550;
`;
export const RegistrationBtn = styled.button`
  cursor: pointer;
  padding: 14px 39px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background-color: rgb(18, 20, 23);

  color: rgb(255, 255, 255);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  &:hover,
  &:focus {
    background-color: #f4c550;
    color: black;
  }
`;