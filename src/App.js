import React from 'react';
import { Box, Typography } from '@mui/material';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Box>
      <Typography variant="h4" align="center">
        Climate Resilient Property Dashboard
      </Typography>
      <Dashboard />
    </Box>
  );
}

export default App;
