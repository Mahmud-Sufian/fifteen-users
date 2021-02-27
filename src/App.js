import logo from './logo.svg';
import './App.css';
import fakeData from './data/fakeData.json';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Users from './Components/Header/Users/Users';
import Cart from './Components/Header/Cart/Cart';

function App() {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setUsers(fakeData); 
  },[]);

  const handleAddUser = (user) => {
    const newSetCart = [...cart, user];
    setCart(newSetCart); 
  }



  return (
    <div>
      <Header></Header>
      <Cart cart={cart}></Cart>
      {
        users.map(user => <Users User={user}  handleAddUser={handleAddUser}></Users>)
      } 
    </div>
  );
}

export default App;
