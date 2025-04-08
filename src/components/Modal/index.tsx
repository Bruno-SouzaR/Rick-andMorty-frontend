import React from "react";
import { ModalOverlay, ModalContent, CloseButton, LeftPanel, ImageSection, CharacterImg, CharacterInfo, RightPanel, Title, LocationInfo, ResidentsInfo, TextInfo, TypeInfo} from "./styles";
import { CharacterDetails } from "../../types/Character";

interface CharacterModalProps {
  characterDetails: CharacterDetails;
  isOpen: boolean;
  onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
  characterDetails,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>Close</CloseButton>
          <LeftPanel>
            <ImageSection>
              <div>
              <CharacterImg
              src={characterDetails.image} 
              alt={characterDetails.name}
              />
              <CharacterInfo>
                <h3>{characterDetails.name}</h3>
                <p>{characterDetails.species}</p>
              </CharacterInfo>
              </div>
            </ImageSection>
          </LeftPanel>
          <RightPanel>
            <div>
            <Title>ABOUT</Title>
            <TextInfo>
              {characterDetails.name} is a{" "}
              {characterDetails.gender?.toLowerCase()}{" "}
              {characterDetails.species?.toLowerCase()}. 
              {characterDetails.status === "Alive"
                ? " He is alive and well."
                : characterDetails.status === "Dead"
                ? " Unfortunately, he is no longer alive."
                : " Status unknown."}
              {characterDetails.latest_air_date && (
                <> Last seen in {characterDetails.latest_air_date}.</>
              )}
            </TextInfo>
            </div>

            <div>
            <Title>ORIGIN</Title>
            <TypeInfo>{characterDetails.origin?.type || "Unknown"}</TypeInfo>
            <LocationInfo>{characterDetails.origin?.name || "Unknown"}</LocationInfo>
            <TextInfo>{characterDetails.origin?.dimension || "Unknown"}</TextInfo>
            <ResidentsInfo>
              {characterDetails.origin?.residents_count ?? "N/A"} Residents
            </ResidentsInfo>
            </div>

            <div>
            <Title>LOCATION</Title>
            <TypeInfo>{characterDetails.location?.type}</TypeInfo>
            <LocationInfo>{characterDetails.location?.name || "Unknown"}</LocationInfo>
            <TextInfo>{characterDetails.location?.dimension || "Unknown"}</TextInfo>
            <ResidentsInfo>
              {characterDetails.location?.residents_count ?? "N/A"} Residents
            </ResidentsInfo>
            </div>
          
          </RightPanel>
      </ModalContent>
    </ModalOverlay>
  );
};