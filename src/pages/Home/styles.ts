import styled from 'styled-components'

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url('/assets/Background.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  gap: 4rem;
  
  img {
    width: 40rem;
    cursor: pointer;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: transparent;
  margin-bottom: 0.5rem;
  border-radius: 0.8rem;
`

export const SearchInput = styled.input`
  padding: 1rem;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  background: transparent;
  color: white;

  ::placeholder {
    font-family: "Nunito Sans", sans-serif;
    color: #9F9F9F;
  }
`
export const ErrorMessage =styled.p`
  color: red;
  margin-bottom: 2rem;
  text-align: center;

`;

export const LoadingImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(0.5rem);
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
    height: auto;
    margin-bottom: 2.5rem;
  }

  p {
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.8rem;
    text-align: center;
  }
`;