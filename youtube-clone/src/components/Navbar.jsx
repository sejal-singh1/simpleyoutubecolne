
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?q=${search}`);
  };

  return (
    <nav>
      <h1>YouTube Clone</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
