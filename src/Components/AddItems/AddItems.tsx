import React from 'react';

interface IAddItemProps {
  name: string;
  price: number;
  img: string;
}

const AddItems: React.FC<IAddItemProps> = ({name, price, img}) => {
  return (
    <div>
      <h3>Add items</h3>
      <button>
        <img src={img} alt="name"/>
        <h3>{name}</h3>
        <h3>Price: {price} KGS</h3>
      </button>
    </div>
  );
};

export default AddItems;