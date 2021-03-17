import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import WorkIcon from '@material-ui/icons/Work';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';

const Header = () => {
    return (
        <div className="header">
         <div className="header__left">
             <img src="https://assets.website-files.com/5e3937011a476970ab7a1eff/5e6e1725a2ae976a2b2b900a_FFI%20Logo%20B.svg" alt=""  />

             <div className="header__search">
             <SearchIcon/>
             <input type="text" />



             </div>



         </div>
         <div className="header__right">
             <HeaderOption Icon={HomeIcon} title="Home"/>
             <HeaderOption Icon={SupervisorAccountIcon}title="My network"/>
             <HeaderOption Icon={MessageIcon}title="Message"/>
             <HeaderOption Icon={WorkIcon}title="Jobs"/>
             <HeaderOption Icon={NotificationsActiveIcon}title="Notification"/>
             <HeaderOption avatar='https://scontent.ffjr1-3.fna.fbcdn.net/v/t1.0-9/14713590_1357419237624367_3947016782911371143_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=A_YM5ar0GLUAX_ylLhD&_nc_ht=scontent.ffjr1-3.fna&oh=113992d19b488c3ae50f48c7632fbf90&oe=6072D3F9' title='me'/>





         </div>

        </div>
    )
}

export default Header
