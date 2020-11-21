import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

function PostBox() {
    return (
        <div>
                         

            <Box className="boxshadow">   

            <Grid  container 
                direction="row"
                justify='center'
                alignItems='center'
                >                                 
                <Grid item xs={12} lg={5}>    
                {/* conditional rendering on image class for desktop */}
                    <img className="imageMessage" src="https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />

                </Grid>  

                <Grid item xs={7} >                        
                    <Box p={1}> 
                    <Box p={1}>             
                    <Typography variant="h6"  align="center">
                            Snake plant little baby
                    </Typography>
                    </Box>
                    <Box p={1}> 
                    <Typography variant="h6"  color="primary" align='center'>
                            150 Kč
                    </Typography>
                    </Box>
                    <Box m={5}>   
                        <FormControl fullWidth >
                        <InputLabel id="status">Status</InputLabel>
                            <MuiSelect labelId="status">
                            <MuiMenuItem /* value={`Available`} */>Available</MuiMenuItem>
                            <MuiMenuItem /* value={'Sold'} */>Sold</MuiMenuItem>
                        </MuiSelect>
                        </FormControl> 
                    </Box>   
                    </Box>
                </Grid>
                                
            
            </Grid>
            </Box> 


            
        </div>
    )
}

export default PostBox
