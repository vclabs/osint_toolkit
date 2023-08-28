import React from 'react';
import ot_logo_light from '../images/osint_light.png';
import ot_logo_dark from '../images/osint.png';
import useTheme from "@mui/material/styles/useTheme";

function Header() {
  const theme = useTheme();

  return (
    <div>
      <img
        src={theme.palette.mode === 'dark' ? ot_logo_dark : ot_logo_light}
        height={80}
        alt="OSINT Toolkit logo"
      />
    </div>
  )
}

export default Header
