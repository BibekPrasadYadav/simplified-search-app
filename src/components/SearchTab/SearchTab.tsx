import React, { useState } from 'react';
import faker from 'faker';
import './SearchTab.scss';

const SearchTab: React.FC = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filter, setFilter] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilter(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setFilter(suggestion);
    setShowSuggestions(false);
  };

  // Generate fake trending suggestions using faker API
  const trendingSuggestions: string[] = Array.from({ length: 5 }, () =>
    faker.random.word()
  );

  return (
    <div className="search-tab">
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Search..."
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      />
      {showSuggestions && (
        <div className="suggestions-box">
          {trendingSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchTab;
