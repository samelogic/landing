import React from 'react'
import { Link } from 'gatsby'

import imgL1Logo from '../../assets/image/svg/Official-Samelogic-Logo-dark.svg'
import imgL1LogoWhite from '../../assets/image/svg/Official-Samelogic-Logo-white.svg'

const Logo = ({ white, height, className = '', ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {white ? (
        <img src={imgL1LogoWhite} alt="Samelogic Logo" />
      ) : (
        <img src={imgL1Logo} alt="Samelogic Logo" />
      )}
    </Link>
  )
}

export default Logo
