import React from 'react';
import { Route,Switch } from 'react-router-dom';
import HotCoff from './components/Menu/HotCoffe';
import ColdCoff from './components/Menu/ColdCoffee';
import Tea from './components/Menu/Tea';
import HotChoc from './components/Menu/HotChoc';
import Menu from './components/Menu';
import MenuLayout from './components/MenuLayout';
import Beverages from './components/Menu/Beverages';
import Snacks from './components/Menu/Snacks';
import Delicacies from './components/Menu/Delicacies';
import Smoothies from './components/Menu/Smoothies';
import Cookies from './components/Menu/Cookies';
import Sandwhich from './components/Menu/Sandwhich';
import Bagel from './components/Menu/Bagel';
import Italian from './components/Menu/Italian';
import Salads from './components/Menu/Salads';
import Plates from './components/Menu/Plates';
import Soul from './components/Menu/Soul';
const Menurenderer = () =>{
    return <>
    <Switch>
        <Route path='/Menu' exact><Menu /></Route>
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
         
         <Route path='/Menu/ColdCoffee' exact>
          <MenuLayout>
            <ColdCoff />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Tea' exact>
          <MenuLayout>
            <Tea />
          </MenuLayout>
         </Route>
         <Route path='/Menu/HotChoc' exact>
          <MenuLayout>
            <HotChoc />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Smoothies' exact>
          <MenuLayout>
            <Smoothies />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Cookies' exact>
          <MenuLayout>
            <Cookies />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Sandwhich' exact>
          <MenuLayout>
            <Sandwhich />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Bagel' exact>
          <MenuLayout>
            <Bagel />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Soul' exact>
          <MenuLayout>
            <Soul />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Salads' exact>
          <MenuLayout>
            <Salads />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Italian' exact>
          <MenuLayout>
            <Italian />
          </MenuLayout>
         </Route>
         <Route path='/Menu/Plates' exact>
          <MenuLayout>
            <Plates />
          </MenuLayout>
         </Route>
    </Switch>
    
    </>
}

export default Menurenderer;