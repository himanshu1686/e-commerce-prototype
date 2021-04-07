import React,{useState} from 'react'
import BeanBag from '../Gallery/BeanBag'
import TShirts from '../Gallery/TShirts'
import Shirts from '../Gallery/Shirts'
import Trousers from '../Gallery/Trousers'
const Dashboard = () => {
    const [activeNav, setactiveNav] = useState("Bean Bag")
    const changeNav = (e)=>{
        e.preventDefault();
        setactiveNav(e.target.textContent)
    }
   
    

    return (
        <div>
            <div className="row mx-5 my-2">  
                <div className=" d-flex justify-content-around col-8"   >
                <div
                 
                className={( activeNav==="Bean Bag" )?"sub-menu-nav-active":"sub-menu-nav"}
                onClick={changeNav}>Bean Bag</div>
                <div 
                className={( activeNav==="T-Shirts" )?"sub-menu-nav-active":"sub-menu-nav"} 
                onClick={changeNav}>T-Shirts</div>
                <div className={( activeNav==="Shirts" )?"sub-menu-nav-active":"sub-menu-nav"} 
                onClick={changeNav}>Shirts</div>
                <div className={( activeNav==="Trousers" )?"sub-menu-nav-active":"sub-menu-nav"} onClick={changeNav}>Trousers</div>

                </div>
             </div>
            <div class="row m-2">
               { 
                  (activeNav==='Bean Bag') ? <BeanBag /> :
                  (activeNav==='T-Shirts') ? <TShirts /> :
                  (activeNav==='Shirts') ? <Shirts /> :
                  (activeNav==='Trousers') ? <Trousers /> :
                <div > No valid Navigator tab selected ! </div>
               }    
            </div>
        </div>
    )
}

export default Dashboard
