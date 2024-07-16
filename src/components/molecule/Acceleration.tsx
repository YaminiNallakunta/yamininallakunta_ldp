import React from 'react';
import theme from '../../theme';
import Button from '@mui/material/Button'
import { ThemeProvider } from '@emotion/react';

const Acceleration:React.FC =() =>{
    return (
        <ThemeProvider theme={theme} >
         <Button
          variant="outlined"
          color="secondary"
          style={{
            width: 210,
            height: 49,
            marginBottom: 10,
            marginTop: 30,
            borderRadius: 12,
            textTransform: "none",
            border: 0,
            marginLeft: 20,
            gap:10,
            justifyContent:'start'
          }} >
          <img
          src={`${process.env.PUBLIC_URL}/assets/icons/home-2.svg`}
          alt="Example"  style={{alignItems:'start'}}
        />
          Home
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: 210,
            height: 49,
            borderRadius: 12,
            textTransform: "none",
            marginLeft: 20,
            gap:10,
            justifyContent:'start'
          }}
        >
             <img
          src={`${process.env.PUBLIC_URL}/assets/icons/coin.svg`}
          alt="Example"  style={{alignItems:'start'}}
        />
          Cash Accleration
        </Button>
        </ThemeProvider>
    )
}

export default Acceleration;

