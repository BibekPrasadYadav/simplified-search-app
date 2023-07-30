import React, { useState } from 'react';
import './WishlistButton.scss';

const WishlistButton: React.FC = () => {
  const [isWishlistAdded, setIsWishlistAdded] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlistAdded((prev) => !prev);
  };

  return (
    <button
      className={`wishlist-button ${isWishlistAdded ? 'wishlist-added' : ''}`}
      onClick={handleWishlistClick}
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;
