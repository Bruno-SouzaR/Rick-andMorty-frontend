import styled from "styled-components";

interface StyledCardProps {
  isDead: boolean;
}

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`
export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  background-color: #333333;
  border-radius: 1rem;
  overflow: hidden;
  height: 100%;
  transition: transform 0.2s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    border: 0.5rem solid rgb(203, 215, 54);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    filter: ${({ isDead }) => (isDead ? "grayscale(100%)" : "none")};
    transition: filter 0.2s ease-in-out;
  }
`
export const CardInformation = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem 2rem; 
  backdrop-filter: blur(0.5rem);
  background-color: rgba(0, 0, 0, 0.7);

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 2.5rem;
    font-family: "Nunito Sans", sans-serif;
    font-weight: bold;
    color: #ffffff;;
    }
  p {
    font-size: 1.7rem;
    font-family: "Nunito Sans", sans-serif;
    color: #ffffff;
  }
`;