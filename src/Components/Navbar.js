import React , {useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from '../livingDesireLogo.svg'
import UserContext from '../Context/UserContext/UserContext'
import CartContext from '../Context/CartContext/CartContext'
const Navbar = () => {
    const userContext = useContext(UserContext);
    const cartContext = useContext(CartContext);
    const { isAuth ,login,logout  } = userContext;
    const {itemCount} = cartContext;
    return (
        <nav>
            <nav >
                <div className="row p-2">
                    
                    <div className=" my-1 d-flex order-0 col-12 col-md-3 col-lg-2 justify-content-center">
                    <Link to='/' style={{textDecoration:"none"}} ><div id="mylogo" class="mylogo"><img src={logo} alt="..." />Livingdesire</div>
                    </Link>
                    </div>
                   
                    <div className="my-1 order-2 col-12 order-md-1  col-md-5 col-lg-7">
                        <form class="d-flex">
                            <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-danger" type="submit"><i class="fas fa-search"></i></button>
                        </form>    
                    </div>
                    <div id="rightNav" className="d-flex  my-1 order-1 col-12 order-md-2 col-md-4 col-lg-3 justify-content-around">
                        <div >
                        <button id="cart" className="btn-sm bg-white "  >

                            <i class="fas fa-shopping-cart"></i>

                            {
                                ( itemCount>0 ) && <div class="badge">{itemCount}</div> 
                            }    
                        </button>
                        </div>
                        <div  >
                            <button id="heart" className="btn-sm bg-white "   >
                                <i class="far fa-heart"></i> 
                            </button>
                        </div> 
                        <div>
                        { (isAuth)?
                        <button onClick={logout} id="login" className="btn-sm bg-white"  >
                            Logout
                        </button>
                        :  
                        <button id="login" onClick={login} className="btn-sm bg-white"  >
                                Login/Sign Up
                        </button>
                        }
                         
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    )
}

export default Navbar
