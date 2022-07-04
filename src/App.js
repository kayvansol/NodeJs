
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Product from './Components/Product';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import UserList from './Components/UserList';

function App() {
  return (

    <div className="App">

      <Router>

        <NavBar></NavBar>
    
        <Header userName={'مهلا'}></Header>

        <div style={{ paddingTop: '50px', minHeight: '350px' }}>
          
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/UserList' element={<UserList />} />
          </Routes>

        </div>

        <Footer></Footer>

      </Router>

    </div>

  );
  
}

export default App;
