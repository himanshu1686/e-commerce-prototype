import {Switch,Route, BrowserRouter } from 'react-router-dom' 
import Navbar from './Components/Navbar'
import Dashboard from './Components/Page/Dashboard'
import Footer from './Components/Footer'
import About from './Components/Page/About'
import CancelationPolicy from './Components/Page/CancelationPolicy'
import ReturnPolicy from './Components/Page/ReturnPolicy'
import UserState from './Context/UserContext/UserState'
import CartState from './Context/CartContext/CartState'
import BeanBagState from './Context/BeanBagContext/BeanBagState'
import TShirtState from './Context/TShirtContext/TShirtState'
import TrouserState from './Context/TrouserContext/TrouserState'
import ShirtState from './Context/ShirtContext/ShirtState'


const  App = ()=> {
  return (
    <>
    <UserState >
      <BeanBagState >
        <TShirtState >
          <ShirtState>
            <TrouserState>
            <CartState >

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'
            component ={Dashboard} 
             />  
             <Route exact path='/about'
            component ={About} 
             />
             <Route exact path='/cancelationpolicy'
            component ={CancelationPolicy} 
             />
             <Route exact path='/returnpolicy'
            component ={ReturnPolicy} 
             />

        </Switch>
        <Footer/>
        </BrowserRouter>
        </CartState>
        </TrouserState>

        </ShirtState>
        </TShirtState>
        </BeanBagState>
        </UserState>
    </>
  );
}

export default App;
