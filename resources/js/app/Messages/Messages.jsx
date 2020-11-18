import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import MessagePreviewItem from './MessagePreviewItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    },

 
}));

/* createBreakpoints
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px */


export default function Messages() {
  const classes = useStyles();

  return (
    <div>
    <Container>
      <Grid  container 
             direction="column"
             alignItems="center"
             >

          <Grid item xs={12}>
            <Box mx="auto" p={5}>                                
                <Typography variant="h3" 
                            color="primary"
                            align='center'
                            >                      
                    Messages
                </Typography>               
            </Box>
          </Grid>

         
        <Grid item xs={12} lg={6}> 
          <Box className="boxshadow">                             
             <List>
               
                <MessagePreviewItem />

                 
                <MessagePreviewItem />

                 
                <MessagePreviewItem />

              </List>
              </Box> 
              </Grid>
                          
            
         </Grid>
    </Container>
  </div>
  )}