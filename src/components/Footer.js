import React from "react"
import footerStyles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <span className="text-muted"> This is our footer comp </span>
      </div>
    </footer>
  )
}

export default Footer
