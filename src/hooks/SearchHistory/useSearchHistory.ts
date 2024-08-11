import { useState, useEffect } from 'react';

const useSearchHistory = (maxItems: number) => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem('searchHistory') || '[]'
    );
    setHistory(storedHistory);
  }, []);

  const addSearchTerm = (term: string) => {
    const termLower = term.toLowerCase();
    const updatedHistory = [
      termLower,
      ...history.filter((item) => item !== term),
    ].slice(0, maxItems);
    setHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  return { history, addSearchTerm };
};

export default useSearchHistory;
