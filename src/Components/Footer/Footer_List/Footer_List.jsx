import React from 'react'
import "./Footer_List.css"


export const Footer_List = ({ children }) => {
  return (
    <ul className="footer__list">
      {children}
    </ul>
  )
}
