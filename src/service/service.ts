import { api } from './api';
import { Character } from '../types/Character';


export const searchCharacters = async (query: string): Promise<Character[]> => {
  try {
    return await api.get(`/character/?name=${encodeURIComponent(query)}`);
  } catch (error) {
    console.error(`Error searching characters with query "${query}":`, error);
    throw error;
  }
};

export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    return await api.get(`/character/${id}`);
  } catch (error) {
    console.error(`Error fetching character with ID`, error);
    throw error;
  }
};

