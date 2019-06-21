import React from  'react'
import { NavLink } from 'react-router-dom'


const activeStyle = {
    color: 'red'
}

function Nav () {
    return (
        <nav>
           <ul className='flex-center'>
                <li >
                    <NavLink
                        to='/'
                        activeStyle={activeStyle}
                        exact
                        className='top-new'>
                        Top
                    </NavLink>
                </li>

                <li>
                    <NavLink
                       to ='/new'
                       activeStyle={activeStyle}
                       className='top-new'>
                        New
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;