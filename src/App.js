import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Switch,Route ,Redirect} from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Menu from './components/Menu';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Beverages from './components/Menu/Beverages';

import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Layout>
      <Switch>
        <Route path='/' exact><Redirect to='/'/></Route>
        <Route path='/About' exact><About /></Route>
        <Route path='/Menu' exact><Menu /></Route>
        <Route path='/Menu/Beverages' exact><Beverages /></Route>
        <Route path='/Contact' exact><Contacts /></Route>
        <Route path='/Login' exact><Login /></Route>

      </Switch>
      </Layout>
      </Router>
      
    </div>
    
  );
}

export default App;
