import React, {useContext, useState} from 'react'
import {UseStateContext} from '../contexts/ContextProvider'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MenuButton = () => {
   const {showNav, setShowNav, screenWidth} = useContext(UseStateContext)
   const toggleNav = () => {
      setShowNav(prevState => !prevState)
   }
  return (
     <button className={`bg-gray-light text-gray-dark rounded-full flex items-center
         z-50 overflow-hidden
        hover:bg-true-gray hover:text-white cursor-pointer
        ${screenWidth<768 ? 'fixed p-2 right-3 top-3' : 'hidden'}
        `}
        onClick={toggleNav}>
        {showNav ? <CloseIcon sx={{ fontSize: '2rem' }} /> : <MenuIcon sx={{ fontSize: '2rem' }} />}
     </button>
  )
}

export default MenuButton
