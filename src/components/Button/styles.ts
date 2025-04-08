import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 1rem 1.5rem;
    background: transparent;
    border: 0.15rem solid white;
    border-radius: 0.5rem;
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-size: 1.6rem;
    font-family: "Nunito Sans", sans-serif;

    &:hover {
        background: gray;
    }
`