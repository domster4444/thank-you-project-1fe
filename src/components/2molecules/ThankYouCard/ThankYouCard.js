import styled from 'styled-components';
export const ThankYouCard = styled.div`
  min-width: 10rem;
  max-width: 20rem;
  margin: 1rem;
  background-color: white;
  padding: 2rem;
  box-shadow: 0px 6px 6px 0px rgb(179, 177, 178);
  border-radius: 2rem;
  cursor: pointer;
  transition: all ease-in-out 450ms;
  box-shadow: 0px 0px 0px 6px rgba(244, 241, 242, 0.5);

  hr {
    background-color: rgb(179, 177, 178);
  }
  &:hover {
    box-shadow: 0px 0px 0px 16px rgba(225, 211, 200, 0.2);
    transition: transform ease-in-out 350ms;
    transform: scale(1.05);
  }
  &:active {
    transition: transform ease-in-out 350ms;
    transform: scale(1.08);
  }
`;
