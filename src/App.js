import React from 'react';
import { BrowserRouter as Router ,Switch,Route ,Redirect} from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Imgcarousel from './components/Imgcarousel';
import Menurenderer from './Menurender';
import './App.css';


function App() {
  return (
    <div>
      <Router>
      <Layout>
      <Switch>
        <Route path='/' exact><Redirect to='/'/><Imgcarousel /></Route>
        <Route path='/About' exact><About /></Route>
        <Route path='/Menu' >
        <Menurenderer />
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
