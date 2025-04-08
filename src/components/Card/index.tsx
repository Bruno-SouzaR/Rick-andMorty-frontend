import React from "react";
import { StyledCard, CardInformation } from "./styles"; 
import { Character } from "../../types/Character";


interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

export const Card: React.FC<CharacterCardProps> = ({ 
  character, 
  onClick 
}) => {

  const isDead = character.status === "Dead";

  return (
    <StyledCard onClick={onClick} isDead={isDead}>
      <img src={character.image} alt={`${character.name}`} />
      <CardInformation>
        <h3>{character.name}</h3>
        <p>{character.species}</p>
      </CardInformation>  
    </StyledCard>
  );
};