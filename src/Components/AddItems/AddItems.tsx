import React from 'react';
import './AddItems.css';

interface AddItemsProps {
  menuItems: { name: string; price: number; image: string }[];
  onAddItem: (item: string) => void;
}

const AddItems: React.FC<AddItemsProps> = ({ menuItems, onAddItem }) => {
  const handleItemClick = (itemName: string) => {
    onAddItem(itemName);
  };

  return (
    <div className="add-items">
      <h2>Add items</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <div className="item-container" onClick={() => handleItemClick(item.name)}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <h4>Price: {item.price}KGS</h4>
              <div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddItems;
