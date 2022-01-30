import React from 'react';
import '../styles/Navbar.css'

const Navbar = ({ clickHandler }) => {
    return (
        <>

            <div className='navbar rightNav col1'>
                {/* <h1 className='col1'>LGM_App</h1> */}
                <a href="/">LGM_App</a>
            </div>

            <div className="col2">
                    <button onClick={clickHandler} className=''>Get Users</button>
            </div>

        </>
    );
};

export default Navbar;

