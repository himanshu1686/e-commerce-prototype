import {Switch,Route } from 'react-router-dom' 
import Navbar from './Components/Navbar'
import Dashboard from './Components/Page/Dashboard'
import Footer from './Components/Footer'
import About from './Components/Page/About'
import CancelationPolicy from './Components/Page/CancelationPolicy'
import ReturnPolicy from './Components/Page/ReturnPolicy'
const  App = ()=> {
  return (
    <div >
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
    </div>
  );
}

export default App;
