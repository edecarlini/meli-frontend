'use client';
import React, { createContext, useContext, useState } from 'react';

interface SearchInputContextProps {
  clearSearchInput: () => void;
}

const SearchInputContext = createContext<SearchInputContextProps>({
  clearSearchInput: () => {},
});

export const SearchInputProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [clearTrigger, setClearTrigger] = useState(false);

  const clearSearchInput = () => {
    setClearTrigger((prev) => !prev);
  };

  return (
    <SearchInputContext.Provider value={{ clearSearchInput }}>
      {children}
    </SearchInputContext.Provider>
  );
};

export const useSearchInputContext = () => useContext(SearchInputContext);
