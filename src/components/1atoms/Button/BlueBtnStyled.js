import styled from 'styled-components';
//todo:--->named export of BlueBtnStyled component
export const BlueBtnStyled = styled.button`
  width: 8.8rem;
  background-color: blue;
  border-radius: 2rem;
  letter-spacing: 0.1rem;
  color: white;
  border: 1px solid #00e0a2;
  text-align: center;
  padding-top: 0.5rem;
  cursor: pointer;
  font-size: 1.7rem;
  margin: 1.5rem;
  padding: 1.5rem;
  :active {
    transform: scale(1.1);
  }
`;
