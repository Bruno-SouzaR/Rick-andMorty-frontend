import styled from "styled-components"

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  display: flex;
  border-radius: 0.8rem;
  overflow: hidden;
  max-width: 90%;
  width: 75%;
  height: 85%;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 38rem;
    height: auto;
  }

  @media (max-width: 48rem) {
   height: auto;
   max-height: 95vh;
   border-radius: 1rem;
 }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 2.5rem;
  left: 12rem;
  background-color: transparent;
  font-weight: bold;
  color: white;
  border: 0.2rem solid white;
  border-radius: 0.5rem;
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  font-size: 1.7rem;
  z-index: 10;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    font-size: 1.4rem;
    padding: 0.5rem 0.8rem;
    border-width: 0.1rem;
    z-index: 100;
  }

  @media (max-width: 48rem) {
   top: 1rem;
   left: 1rem;
   color: white;
   font-size: 1.6rem;
   background-color: transparent;
   border: none;
   padding: 0;
 }
`

export const LeftPanel = styled.div`
  flex: 0 0 35%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    backdrop-filter: blur(4rem);
    background-color: rgba(130, 130, 130, 0.3);
    z-index: -1; 
    border-radius: 1rem 0 0 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    
    &::before {
      backdrop-filter: none;
      background-color: transparent;
    }
  }

  @media (max-width: 48rem) {
   width: 100%;
   height: auto;
   flex: 0 0 auto;
   border-radius: 0;
   
   &::before {
     display: none;
   }
 }
`

export const ImageSection = styled.div`
  margin-top: 5rem;
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    align-items: center; 
    margin-top: 0;
    padding-bottom: 0;
  }
`

export const CharacterImg = styled.img`
  min-width: 80%;
  width: 100%;
  height: 60vh;
  object-fit: cover;
  margin-top: 5rem;
  border-radius: 1rem 1rem 0 0;

  @media (max-width: 768px) {
    height: 100%;
    width: auto;
    object-fit: cover;
    margin-top: 5rem;
    border-radius: 1rem;
  }

  @media (max-width: 48rem) {
   height: 40vh;
   width: 100%;
   object-fit: fill;
   margin-top: 3.5rem;
   border-radius: 1rem;
 }
`

export const CharacterInfo = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 2rem 2rem; 
  background-color: rgba(0, 0, 0, 0.8);

  h3 {
    font-size: 2.5rem;
    font-family: "Nunito Sans", sans-serif;
    font-weight: bold;
    color: #ffffff;
  }
  p {
    font-size: 1.7rem;
    font-family: "Nunito Sans", sans-serif;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(0.5rem);
    background-color: rgba(90, 90, 90, 0.8);
    padding: 1rem 1.5rem;
    h3 {
      font-size: 2.5rem;
      font-family: "Nunito Sans", sans-serif;
      font-weight: bold;
      color: #ffffff;
    }
    p {
      font-size: 1.7rem;
      font-family: "Nunito Sans", sans-serif;
      color: #ffffff;
    }
  }

 @media (max-width: 48rem) {
   padding: 1rem 1.5rem;
   
   h3 {
     font-size: 2rem;
     margin-bottom: 0.2rem;
   }
   
   p {
     font-size: 1.4rem;
     margin: 0;
   }
 }
`

export const RightPanel = styled.div`
  flex: 1;
  background-color: #000000;
  color: #999999;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  font-family: "Nunito Sans", sans-serif;
  padding: 6rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem ;
    gap: 1.5rem;
    border-radius: 0 0 1rem 1rem;
  }

 @media (max-width: 48rem) {
   width: 100%;
   padding: 1.5rem;
   gap: 1.2rem;
   flex: 1;
 }
`

export const Title = styled.h3`
  color: rgb(203, 215, 54);
  font-size: 1.8rem;
  letter-spacing: 0.5rem;
  margin: 0 0 1rem 0;
  font-weight: 500;

 @media (max-width: 48rem) {
   color: rgb(203, 215, 54);
   font-size: 1.4rem;
   margin: 0 0 0.5rem 0;
 }
`

export const TypeInfo = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  color: #999999;

 @media (max-width: 48rem) {
   font-size: 1.2rem;
   margin-bottom: 0.2rem;
 }
`

export const TextInfo = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  color: #ffffff;

 @media (max-width: 48rem) {
   font-size: 1.3rem;
   line-height: 1.4;
   margin: 0.2rem 0 0.8rem 0;
 }
`

export const LocationInfo = styled.div`
  font-size: 3rem;
  color: #ffffff;

 @media (max-width: 48rem) {
   font-size: 1.6rem;
   margin: 0.2rem 0;
 }
`

export const ResidentsInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #999;
  font-size: 1.5rem;

 @media (max-width: 48rem) {
   font-size: 1.2rem;
   margin-top: 0.3rem;
 }
`