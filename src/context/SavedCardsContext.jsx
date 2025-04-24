import React, { createContext, useContext, useState } from 'react';

const SavedCardsContext = createContext();

export const SavedCardsProvider = ({ children }) => {
  const [savedCards, setSavedCards] = useState([]);

  const saveCard = (card) => {
    setSavedCards((prev) => [...prev, card]);
  };

  return (
    <SavedCardsContext.Provider value={{ savedCards, saveCard }}>
      {children}
    </SavedCardsContext.Provider>
  );
};

export const useSavedCards = () => useContext(SavedCardsContext);