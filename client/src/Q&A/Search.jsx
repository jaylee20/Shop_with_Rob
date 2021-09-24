import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #525252;
  padding: 1em;
  width: 1500px;
  color: #525252;
`;

const Search = ({ searchTerm, questions }) => {
  const { length } = questions;

  return (
    <div>
      {length ? (
        <form>
          <Input placeholder="Have a question? Search for answers…" onChange={searchTerm} />
        </form>
      ) : null}
    </div>
  );
};

export default Search;
