import React from 'react';
import SearchTab from './components/SearchTab/SearchTab';
import WishlistButton from './components/WishlistButton/WishlistButton';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <SearchTab />
      <div className="product-list">
        {/* Product items will be dynamically added here */}
      </div>
      <WishlistButton />
    </div>
  );
};

export default App;

