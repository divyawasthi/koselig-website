import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Switch,Route ,Redirect} from 'react-router-dom';
import Layout from './components/Layout';
import MenuLayout from './components/MenuLayout';
import About from './components/About';
import Menu from './components/Menu';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Beverages from './components/Menu/Beverages';


import './App.css';
// import Carousel from './components/carousel';
import Imgcarousel from './components/Imgcarousel';


function App() {
  return (
    <div>
      <Router>
      <Layout>
      <Switch>
        <Route path='/' exact><Imgcarousel /></Route>
        <Route path='/About' exact><About /></Route>
        <Route path='/Menu' exact>
        <Menu />
        </Route>
        <Route path='/Menu/Beverages' exact>
          <MenuLayout>
          <Beverages />
          </MenuLayout>
         </Route>
        <Route path='/Contact' exact><Contacts /></Route>
        <Route path='/Login' exact><Login /></Route>

      </Switch>
      </Layout>
      </Router>
      
    </div>
    
  );
}

export default App;
