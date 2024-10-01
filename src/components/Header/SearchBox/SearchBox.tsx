'use client';

import useSearchHistory from '@/hooks/SearchHistory/useSearchHistory';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './SearchBox.module.css';
import { SearchBoxProps } from './interfaces/SearchBox.interface';
import { useSearchInputContext } from '@/context/SearchInput/SearchInputProvider';
import useClickOutside from '@/hooks/SearchHistory/useClickOutside';

const SearchBox = ({ placeholder }: SearchBoxProps) => {
  const router = useRouter();
  const { history, addSearchTerm } = useSearchHistory(6);
  const { clearSearchInput } = useSearchInputContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionSelected, setSuggestionSelected] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useClickOutside(searchBoxRef, () => setShowSuggestions(false));

  const handleSearch = useCallback(() => {
    if (searchTerm?.trim() !== '') {
      addSearchTerm(searchTerm);
      setShowSuggestions(false);
      setSuggestionSelected(false);
      router.push(`/items?search=${searchTerm}`);
    }
  }, [addSearchTerm, router, searchTerm]);

  const handleClick = () => {
    setShowSuggestions(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setShowSuggestions(true);
      setSearchTerm('');
    } else {
      setSearchTerm(event.target.value);
      setShowSuggestions(false);
    }
  };

  const handleFocus = () => {
    if (searchTerm === '') {
      setSearchTerm('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    } else if (event.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestionSelected(true);
  };

  useEffect(() => {
    if (suggestionSelected) {
      handleSearch();
    }
  }, [suggestionSelected]);

  useEffect(() => {
    setSearchTerm('');
  }, [clearSearchInput]);

  return (
    <div ref={searchBoxRef} className={styles.searchBox}>
      <input
        type='text'
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        alt='Buscador'
      />
      <button onClick={handleSearch}>
        <Image
          src='/assets/search-icon.svg'
          alt='Buscar'
          width={16}
          height={16}
        />
      </button>
      {history?.length > 0 && showSuggestions && (
        <ul className={styles.suggestions}>
          {history?.map((item, index) => (
            <li key={index} onClick={() => handleSelectSuggestion(item)}>
              <Image
                src='/assets/time-icon.svg'
                alt='Búsqueda reciente'
                width={24}
                height={24}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
