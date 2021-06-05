import React from 'react';
const styles = require('./Header.css').default;

function Header() {
  const [inputSearch, setSearchText] = React.useState('');
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className={styles.header}>
      <div
        className={styles.menu}
        onClick={() => setClicked(!clicked)}>=</div>
      <input
        type="text"
        placeholder='search...'
        value={inputSearch}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default Header;
