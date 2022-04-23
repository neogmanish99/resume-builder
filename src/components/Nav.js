import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography,Stack} from '@mui/material';
import Button from '@mui/material/Button';
import ResumeModal from './ResumeModal'



const Nav=()=> {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
        
        <AppBar position="static">
            <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Resume Builder
            </Typography>
            <Stack spacing={4} direction="row">
            
            {/* <Button variant="outlined" color="inherit">Preview</Button> */}
            <ResumeModal sx={{zIndex: 1}} />
            <Button variant="contained" sx={{color:"#2196f3",backgroundColor:"#fff"}}>Download</Button>
            </Stack>
            
            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default Nav;