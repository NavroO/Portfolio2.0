import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  
  @media screen and (min-width: 1024px) {
    margin: 50px 200px;
  }
`;

export const Title = styled.h1`
  color: #64ffda;
  margin: 10px 0;
  font-size: 25px;
  font-weight: 400;

  @media screen and (min-width: 481px) {
    margin: 15px 0;
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
  
  @media screen and (min-width: 1024px) {
    margin: 20px 0;
    font-size: 40px;
  }
`;

export const Name = styled.p`
  color: #ccd6f6;
  font-weight: 600;
  font-size: 30px;

  @media screen and (min-width: 481px) {
    font-size: 36px;
  }

  @media screen and (min-width: 769px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 50px;
  }
`;

export const Specialization = styled.p`
  color: #8892b0;
  font-size: 25px;

  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #64ffda;
  padding: 10px 28px;
  margin-top: 50px;
  color: #64ffda;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    padding: 15px 60px;
  }
`;
