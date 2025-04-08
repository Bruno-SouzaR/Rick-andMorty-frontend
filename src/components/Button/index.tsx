import { Link } from "react-router-dom";
import { StyledButton } from "./styles"

interface ButtonProps {
  text: string;
  link: string;         
  onClick?: () => void; 
}

export const Button: React.FC<ButtonProps> = ({
  text,
  link,
  onClick
}) => {
  return (
    <StyledButton 
      as={Link} 
      to={link}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}