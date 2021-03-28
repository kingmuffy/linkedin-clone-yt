import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import WorkIcon from '@material-ui/icons/Work';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import {logout } from "./features/userSlice"

const Header = () => {
    const dispatch = useDispatch()
    const logOutOfApp = () =>{
        dispatch(logout())
        auth.signOut();
    };
    return (
        <div className="header">
         <div className="header__left">
             <img src="https://assets.website-files.com/5e3937011a476970ab7a1eff/5e6e1725a2ae976a2b2b900a_FFI%20Logo%20B.svg" alt=""  />

             <div className="header__search">
             <SearchIcon/>
             <input placeholder="search" type="text" />



             </div>



         </div>
         <div className="header__right">
             <HeaderOption Icon={HomeIcon} title="Home"/>
             <HeaderOption Icon={SupervisorAccountIcon}title="My network"/>
             <HeaderOption Icon={MessageIcon}title="Message"/>
             <HeaderOption Icon={WorkIcon}title="Jobs"/>
             <HeaderOption Icon={NotificationsActiveIcon}title="Notification"/>
             <HeaderOption avatar={true} title='sign out'
             onClick={logOutOfApp}/>





         </div>

        </div>
    )
}

export default Header
