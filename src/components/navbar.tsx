import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Csealogo from '../media/images/csealogo-QUIZIX.png';

function ButtonAppBar() {
  return (
    <AppBar position="sticky" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img
            src={Csealogo}
            style={{
              margin: 'auto',
              textAlign: 'center',
              maxWidth: '50%',
              maxHeight: '80px',
            }}
            alt="CSEA"
          />{' '}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export { ButtonAppBar as Navbar };
