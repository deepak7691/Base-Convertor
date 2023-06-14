import React from 'react';
import './footer.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <footer className="footer">
      <p className="text">© 2023 Deepak Kawliya. All rights reserved.</p>
      
      <FacebookRoundedIcon color='primary'/><InstagramIcon color='primary'/><TwitterIcon color='primary'/>
    </footer>
  );
}

export default Footer;



