import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: none;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  min-width: 100px;
  background-color: #233554;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  ul {
    width: 100%;
    padding: 0;
  }
  
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const ListItem = styled.li`
  color: #ccd6f6;
  list-style: none;
  text-decoration: none;
  border-top: 1px solid #ccd6f6;
  border-bottom: 1px solid #ccd6f6;
  padding: 25px 0;
  width: 100%;
  text-align: center;
  transition: color 0.3s ease-in-out;
  
  
  :hover {
    color: #64ffda;
    border-top: 1px solid #64ffda;
    border-bottom: 1px solid #64ffda;
  }
`;
