import './App.css';
import AddItems from './Components/AddItems/AddItems.tsx';
import hamburger from './assets/burger.png';
import cheeseBurger from './assets/cheese.png';
import fries from './assets/fries.png';
import coffee from './assets/coffee.png';
import tea from './assets/tea.png';
import coke from './assets/coke.png';


const App = () => {
  const menuItems = [
    {name: 'Hamburger', price: 80, img: hamburger},
    {name: 'cheeseBurger', price: 90, img: cheeseBurger},
    {name: 'fries', price: 45, img: fries},
    {name: 'Coffee', price: 70, img: coffee},
    {name: 'Tea', price: 50, img: tea},
    {name: 'Coke', price: 40, img: coke}
  ]

  return (
    <>
      <AddItems name={menuItems[0].name} price={menuItems[0].price} img={menuItems[0].img} />
    </>
  );
};

export default App;
