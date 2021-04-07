import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div className="row my-5 mx-2">
            <div className="col-8 justify-content-around  d-flex">
                <Link to='/about'><div>About Us</div></Link>
                <Link to='/cancelationpolicy'><div>Cancelation Policy</div></Link>
                <Link to='/returnpolicy'><div>Return Policy</div></Link>
                <Link to='/'><div>Dashboard</div></Link>

            </div>
        </div>
    )
}

export default Footer
