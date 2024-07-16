import React from 'react';
import SeederPage from './page/SeederPage';
import Box from '@mui/material/Box';

const App: React.FC =() => {
  return (
    <Box sx={{border:'5px solid black', height:600, width:250, ml:20, backgroundColor:'#222124',mt:5}}>
    <div>
      <SeederPage />
    </div>
    </Box>
  )
}

export default App;
