import styled from 'styled-components';
//todo:--->named eport of GhostBtnStyled component
export const GhostBtnStyled = styled.button`
  background-color: transparent;
  border-radius: 2rem;
  letter-spacing: 0.1rem;
  color: #0663f6;
  border: 1px solid #00e0a2;
  text-align: center;
  padding-top: 0.5rem;
  cursor: pointer;
  font-size: 1.7rem;
  padding: 1.5rem;
  :active {
    transform: scale(1.1);
  }
`;
