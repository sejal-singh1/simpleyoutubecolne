const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => (
    <div className="sidebar">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
  
  export default Sidebar;
  