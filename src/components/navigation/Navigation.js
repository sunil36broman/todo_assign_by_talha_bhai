import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
class Navigation extends React.Component {

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link to='/'>
                    <span className='navbar-brand'>TODO APP</span>
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    dataToggle='collapse'
                    dataTarget='#nav'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

            </nav>


        )
    }
}


export default Navigation