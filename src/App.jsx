import React from 'react';
import './App.css';
import Login from './Pages/Login Page/Login';
import Register from './Pages/Registration Page/Register';
import Profile from './Pages/Profile Page/Profile';
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
import {useSelector} from 'react-redux';
function App() {
 const isLoggedIn = useSelector(state => state.isLoggedIn);
console.log(isLoggedIn)
  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        {isLoggedIn && (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/add-customer" element={<AddCustomer />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile setting" element={<ProfileSettings />} />
          </>
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
