import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 2rem 0;
  justify-content: center;
  align-items: center;
`;

export const PageNumber = styled.button<{ active?: boolean }>`
  background: transparent;
  border: none;
  color: ${props => props.active ? 'rgb(203, 215, 54)' : '#999999'};
  cursor: pointer;
  font-family: "Nunito Sans", sans-serif;
  font-size: 3rem;
  font-weight: ${props => props.active ? '600' : '400'};
  transition: color 0.2s ease;

  &:hover {
    color: rgb(203, 215, 54);
  }
`;

export const PageNavButton = styled.button<{ disabled?: boolean }>`
  background: transparent;
  font-size: 3rem;
  border: none;
  color: #ffffff;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.disabled ? '#999' : 'rgb(203, 215, 54)'};
  }
`;

export const Ellipsis = styled.span`
  font-family: "Nunito Sans", sans-serif;
  color: #999999;
  font-size: 3rem;
  user-select: none;
`;