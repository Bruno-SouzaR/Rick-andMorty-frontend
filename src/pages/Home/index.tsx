import React, { useState } from "react";
import { Button } from "../../components/Button";
import { SearchContainer, SearchInput, StyledHome, ErrorMessage, LoadingImage } from "./styles";
import { api } from "../../service/api";
import { Card } from "../../components/Card";
import { CardsContainer } from "../../components/Card/styles";
import { Pagination } from "../../components/Pagination"; 
import { CharacterModal } from  "../../components/Modal";
import { CharacterDetails } from "../../types/Character";

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterDetails | null>(null);
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(false);

  const handleSearch = async (page = 1) => {
    if (!searchTerm.trim()) return;
    
    try {
      setIsLoading(true)
      setError(null);

      const response = await api.get(`/character/?name=${searchTerm}&page=${page}`);
      const charactersData = response.data[0] || [];
      const meta = response.data[1]?.meta;
      
      setCharacters(charactersData);
      setTotalPages(meta?.pages || 1);
      setCurrentPage(meta?.page || page);
    } catch (err: any) {
      setError(err.message);
      setCharacters([]);
    } finally {
      setIsLoading(false)
    }
  };

  const handlePageChange = (page: number) => {
    handleSearch(page);
  };

  const getCharacterById = async (id: number) => {
    try {
      setIsLoadingCharacter(true);
      const response = await api.get(`/character/${id}`);
      setSelectedCharacter(response.data as CharacterDetails);
      setIsModalOpen(true);
    } catch (err: any) {
      setError(`Failed to load character details: ${err.message}`);
    } finally {
      setIsLoadingCharacter(false);
    }
  };

  const handleCardClick = (characterId: number) => {
    getCharacterById(characterId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div>
      <StyledHome>

      <img src="../../src/assets/Logo.png" alt="Rick and Morty" 
        onClick={() => window.location.href ='/'}
      />

      <SearchContainer>
        <SearchInput
          placeholder="Search characters"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch(1)}
        />
        <Button text="Search" onClick={() => handleSearch(1)} link="" />
      </SearchContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && (
              <LoadingImage>
                <img src="../../src/assets/Loading.png" alt="Loading" />
                <p>Loading...</p>
              </LoadingImage>
            )}
      <CardsContainer>
        {characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            onClick={() => handleCardClick(character.id)}
          />
        ))}
      </CardsContainer>

      {characters.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      {isLoadingCharacter ? (
        <LoadingImage>
          <img src="../../src/assets/Loading.png" alt="Loading" />
          <p>Loading character details...</p>
        </LoadingImage>
      ) : (
        selectedCharacter && (
          <CharacterModal 
            characterDetails={selectedCharacter}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )
      )}
      </StyledHome>
    </div>
    
  );
};
