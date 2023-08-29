import React, {createContext, useContext, useState} from 'react'


const UseStateContext = createContext()

const UseStateProvider = ({children}) => {
   const [showNav, setShowNav] = useState(false)
   return (
      <UseStateContext.Provider value={{showNav, setShowNav}}>
         {children}
      </UseStateContext.Provider>
   )
}

export {UseStateContext, UseStateProvider};