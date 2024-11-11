import React from 'react'

const Header = ({ children }) => {
  return (
    <header className="bg-base-100 border-b p-4 text-xl font-bold h-16 flex items-center">
      {children}
    </header>
  )
}

export default Header