import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {


 const linkActive=()=>{
    return "Active"
 }

  return(
      <>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/saddam'  >Admin</NavLink>
      <NavLink to='/suport'>Supot</NavLink>
      <NavLink to='/Contact'>Contact</NavLink>

      </>

  );
};

export default Navigation;
