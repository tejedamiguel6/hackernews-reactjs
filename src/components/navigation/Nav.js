import React from  'react'
import { NavLink } from 'react-router-dom'
import { ThemeConsumer } from '../../context/theme'


const activeStyle = {
    color: 'red'
}



function Nav () {
    return (

        <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <nav className='flex-center'>
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


            <button
              style={{fontSize: 30}}
              className='btn-clear'
              onClick={toggleTheme}
            >
              {theme === 'light' ? '🌞' : '🌝'}
            </button>
            
            






          </nav>
        )}
      </ThemeConsumer>






        // <nav>
        //    <ul className='flex-center'>
        //         <li >
        //             <NavLink
        //                 to='/'
        //                 activeStyle={activeStyle}
        //                 exact
        //                 className='top-new'>
        //                 Top
        //             </NavLink>
        //         </li>

        //         <li>
        //             <NavLink
        //                to ='/new'
        //                activeStyle={activeStyle}
        //                className='top-new'>
        //                 New
        //             </NavLink>
        //         </li>
        //     </ul>
        // </nav>
    )

}

export default Nav;