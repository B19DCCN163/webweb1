
import './App.css';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Gioithieu from './components/Gioithieu/Gioithieu';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Tintuc from './components/Tintuc/Tintuc';
import Iproduct from './components/Products/Iproduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path='/products' element ={<Products />}/>
      <Route path='/gioithieu' element ={<Gioithieu />}/>
      <Route path='/user/login' element ={<Login />}/>
      <Route path='/user/register' element ={<Register />}/>
      <Route path='/tintuc' element ={<Tintuc />}/>
      <Route path='/iproduct' element ={<Iproduct />}/>





      

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
