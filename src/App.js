import React from 'react';

import { BrowserRouter as Router ,Switch,Route ,Redirect} from 'react-router-dom';
import Layout from './components/Layout';
import MenuLayout from './components/MenuLayout';
import About from './components/About';
import Menu from './components/Menu';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Beverages from './components/Menu/Beverages';
import Snacks from './components/Menu/Snacks';
import Delicacies from './components/Menu/Delicacies';
import HotCoff from './components/Menu/HotCoffe';
import './App.css';


function App() {
  return (
    <div>
      <Router>
      <Layout>
      <Switch>
        <Route path='/' exact><Redirect to='/'/></Route>
        <Route path='/About' exact><About /></Route>
        <Route path='/Menu' exact>
        <Menu />
        </Route>
        <Route path='/Menu/Beverages' exact>
          <MenuLayout>
            <Beverages />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Snacks' exact>
          <MenuLayout>
            <Snacks />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Delicacies' exact>
          <MenuLayout>
            <Delicacies />
          </MenuLayout>
         </Route>
         
         <Route path='/Menu/HotCoffee' exact>
          <MenuLayout>
            <HotCoff />
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
