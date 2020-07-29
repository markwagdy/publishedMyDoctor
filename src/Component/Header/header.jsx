import React from 'react';
import './header.scss';
import {ReactComponent as Logo} from '../../assets/doctor (1).svg';
import {Link} from 'react-router-dom';
const Header =({})=>(
<div className='header'>
   <div className='logo-container'> 
<Logo className='logo'/>
</div>
<div className='options'>
   
    <p className='option'>Contact</p>
    <p className='option'>SIGN IN</p>
</div>


</div>






)
export default Header;