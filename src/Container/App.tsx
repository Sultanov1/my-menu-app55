import './App.css';
import hamburger from '../assets/burger.png'
import cheeseBurger from '../assets/cheese.png';
import fries from '../assets/fries.png';
import coffee from '../assets/coffee.png';
import tea from '../assets/tea.png';
import coke from '../assets/coke.png';
import React, {useState} from 'react';
import OrderDetails from '../Components/OrderDetails/OrderDetails.tsx';
import AddItems from '../Components/AddItems/AddItems.tsx';

interface MenuItem {
  name: string;
  price: number;
  image: string;
}

const App: React.FC = () => {
  const [order, setOrder] = useState<Map<string, { quantity: number; price: number }>>(new Map());
  const menuItems: MenuItem[] = [
    {name: 'Hamburger', price: 80, image: hamburger},
    {name: 'cheeseBurger', price: 90, image: cheeseBurger},
    {name: 'fries', price: 45, image: fries},
    {name: 'Coffee', price: 70, image: coffee},
    {name: 'Tea', price: 50, image: tea},
    {name: 'Coke', price: 40, image: coke}
  ];

  const handleAddItem = (itemName: string) => {
    const existingItem = order.get(itemName);

    if (existingItem) {
      const updatedQuantity = existingItem.quantity + 1;
      order.set(itemName, { quantity: updatedQuantity, price: updatedQuantity * getPrice(itemName) });
      setOrder(new Map(order));
    } else {
      setOrder(new Map(order.set(itemName, { quantity: 1, price: getPrice(itemName) })));
    }
  };

  const handleRemoveItem = (itemName: string) => {
   order.delete(itemName);
    setOrder(new Map(order));
  };

  const getPrice = (itemName: string) => {
    const item = menuItems.find(i => i.name === itemName);
    return item ? item.price : 0;
  };

  const calculateTotal = (): number => {
    let total = 0;
    order.forEach((value) => {
      total += value.price;
    });
    return total;
  };

  const orderArray = Array.from(order, ([item, { quantity, price }]) => ({ item, quantity, price }));

  return (
    <div className="app">
      <OrderDetails order={orderArray} total={calculateTotal()} onRemoveItem={handleRemoveItem} />
      <AddItems menuItems={menuItems} onAddItem={handleAddItem} />
    </div>
  );
};

export default App;
