import './App.css';
import Login from './Pages/Login Page/Login';
import Register from './Pages/Registration Page/Register';
import Profile from './Pages/Profile Page/Profile'
import Error404 from './Pages/Error Page/404';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sales from './Pages/Sales/Sales';
import Products from './Pages/Products/Products';
import AddProduct from './Pages/Products/AddProduct';
import Customers from './Pages/Customers/Customers';
import ProfileSettings from './Pages/Profile Page/Profile_Settings';
import AddCategory from './Pages/Products/AddCategory';
import Categories from './Pages/Products/Categories';
import AddCustomer from './Pages/Customers/AddCustomer';
import Reports from './Pages/Report/Report';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/Sales' element={<Sales />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/categories' element={<Categories/>}></Route>
        <Route path='/add category' element={<AddCategory/>}></Route>
        <Route path='/customers' element={<Customers/>}></Route>
        <Route path='/add customer' element={<AddCustomer/>}></Route>
        <Route path='/add product' element={<AddProduct />}></Route>
        <Route path='/report' element={<Reports/>}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/profile setting' element={<ProfileSettings/>}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
