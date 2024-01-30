// components/WhatsAppSearch.js

import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.container}>
    <input
      type="text"
      placeholder="Search for movies,Tv shows ,Themes and casts"
      className={styles.searchInput}
    />
    <div className={styles.searchIcon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.004"><path d="m19.705 18.288-5.531-5.531a7.927 7.927 0 1 0-1.424 1.421l5.531 5.532a1.006 1.006 0 0 0 1.422-1.422ZM3.738 12.096a5.908 5.908 0 1 1 8.354 0 5.869 5.869 0 0 1-8.354 0Z"></path></svg>
    </div>
  </div>
  );
};

export default Search;
