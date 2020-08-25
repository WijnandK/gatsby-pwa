import React from "react"
import footerStyles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <span className="text-dark"> This is our footer </span>
      </div>
    </footer>
  )
}

export default Footer
