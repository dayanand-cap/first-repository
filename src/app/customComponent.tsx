"use client";
import React, { useState } from 'react';

type searchResultType = {
  name: string,
  org: string,
  id: string
}

const CustomComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState<searchResultType[]>([]);

  const handleSearch = async () => {
    try {
        const response = await fetch('https://67c8270d0acf98d0708528d1.mockapi.io/api/tp/users');
        const data = await response.json();
        setError('');
        setSearchResults(data || []);
        if (!response.ok) {
            setError(data.error.message);
        }
    } catch(err) {
        // @ts-expect-error comment
        setError(err.toString() || 'API error');
    }
  }

  return (
    <div>
      <h2>{searchTerm}</h2>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{index + 1} | {result.name} | {result.org}</li>
          // <li key={index}>{result.org}</li>
        ))}
      </ul>
      <h3>{error}</h3>
    </div>
  );
}

export default CustomComponent;