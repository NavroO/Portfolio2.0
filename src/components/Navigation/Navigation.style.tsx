import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media screen and (min-width: 1024px) {
    div {
      display: none;
    }
  }
`;
