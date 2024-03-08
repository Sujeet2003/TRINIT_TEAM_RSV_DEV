import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
            backgroundColor: "black",
            color: "white"

      }} >
        <Toolbar>
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ 
                mr: 2,
            }}
          >
            icon
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button 
            className='gradient'
            sx = {{
                color: "inherit",
            }}
          >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}