import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icon-menu.svg';
import closeMenu from '../assets/images/icon-close-menu.svg';
import arrowDown from '../assets/images/icon-arrow-down.svg';
import arrowUp from '../assets/images/icon-arrow-up.svg';
import todo from '../assets/images/icon-todo.svg';
import calendar from '../assets/images/icon-calendar.svg';
import reminders from '../assets/images/icon-reminders.svg';
import planning from '../assets/images/icon-planning.svg';

import { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeFeature, setActiveFeature] = useState<boolean>(false);
    const [activeCompany, setActiveCompany] = useState<boolean>(false);

    return (
        <>
        <header>
            <img className='logo' src={logo} alt="Snap Logo" />
            <a className='menu' onClick={() => setIsOpen(!isOpen)}>
                    <img style={{width: '40px'}} src={menu} alt="menu" />
            </a>
                <nav className={ !isOpen ? "navNotActive" : "navActive"}>
                   <div className='closeButton'>
                        <a  href="#" onClick={() => setIsOpen(!isOpen)}>
                        <img src={closeMenu} alt="" />
                        </a>
                    </div>
                    <ul className='nav--list-primary'>
                        <li className='list--items'>
                            <a href="#" onClick={() => setActiveFeature(!activeFeature)}>Features <img  src={!activeFeature ? arrowDown : arrowUp} alt="" /></a>
                            <ul className={`${activeFeature ? "dropdownOpen" : "dropdownClose"}`}>
                                <li className='list--feature'><img className='dropdown--image' src={todo} alt="" /><a href="#">Todo List</a></li>
                                <li className='list--feature'><img className='dropdown--image' src={calendar} alt="" /><a href="#">Calendar</a></li>
                                <li className='list--feature'><img className='dropdown--image' src={reminders} alt="" /><a href="#">Reminders</a></li>
                                <li className='list--feature'><img className='dropdown--image' src={planning} alt="" /><a href="#">Planning</a></li>
                            </ul>
                        </li>
                        <li className='list--items'>
                            <a href="#" onClick={() => setActiveCompany(!activeCompany)}>Company <img src={!activeCompany ? arrowDown : arrowUp} alt="" /></a>
                            <ul className={`${activeCompany ? "dropdownOpenCompany" : "dropdownCloseCompany"}`}>
                                <li><a href="#">History</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </li>
                        <li className='list--items'>
                            <a href="#">Careers</a>
                        </li>
                        <li className='list--items'>
                            <a href="#">About</a>
                        </li>
                    </ul>
                    <div className='nav--list__right'>
                        <a className='loginButton' href="#">Login</a>
                        <a className='registerButton' href="#">Register</a>
                    </div>
                </nav>
        </header>
        </>
    )
}

export default Navigation;